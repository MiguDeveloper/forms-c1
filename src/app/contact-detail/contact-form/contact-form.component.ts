import { tap, filter, map } from 'rxjs/operators';
import { ContactService } from './../../contact.service';
import { Contact, PhoneType } from './../../contact.model';
import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { startWithCapitalValidator } from 'src/app/directives/start-with-capital.directive';
import { zip } from 'rxjs';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit, AfterViewChecked {
  public contact: Contact = new Contact(0, '', 'assets/default-user.png', []);
  public readonly phoneTypes: PhoneType[] = Object.values(PhoneType);

  @ViewChild('contactForm', { static: true }) contactForm!: NgForm;

  public contactFormReactive: FormGroup = new FormGroup({
    rname: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      startWithCapitalValidator(),
    ]),
    rpicture: new FormControl('assets/default-user.png'),
    rphones: new FormArray([
      new FormGroup({
        type: new FormControl(''),
        number: new FormControl(''),
      }),
    ]),
    remail: new FormControl(''),
    direction: new FormControl(''),
  });

  public contactFormFB = this.fb.group({
    name: [
      '',
      [
        Validators.required,
        Validators.minLength(2),
        startWithCapitalValidator(),
      ],
    ],
    picture: ['assets/default-user.png'],
    phones: this.fb.array([
      this.fb.group({
        type: [null],
        number: [''],
      }),
    ]),
    email: [''],
    direction: [''],
  });

  constructor(
    private contactService: ContactService,
    private cd: ChangeDetectorRef,
    private fb: FormBuilder
  ) {}
  ngAfterViewChecked(): void {
    this.cd.detectChanges();
  }

  ngOnInit(): void {
    const haveContact = localStorage.getItem('contact');
    if (haveContact) {
      const contactObj = JSON.parse(haveContact);
      this.phoneArray.clear();
      contactObj.rphones.forEach((phone: any) => {
        this.addNewPhoneToContactReactive();
      });
      this.contactFormReactive.patchValue(contactObj);
    }

    zip(
      this.contactFormReactive.statusChanges,
      this.contactFormReactive.valueChanges
    )
      .pipe(
        filter(([state, value]) => state === 'VALID'),
        map(([state, value]) => value),
        tap((data) => console.log(data))
      )
      .subscribe((formValue) =>
        localStorage.setItem('contact', JSON.stringify(formValue))
      );
  }

  getControl(nameControl: string) {
    return this.contactFormReactive.get(nameControl);
  }

  get phoneArray(): FormArray {
    return this.contactFormReactive.get('rphones') as FormArray;
  }

  onSubmit() {
    this.contactService.addContact(this.contact);
    this.contact = new Contact(0, '', 'assets/default-user.png', []);
    this.contactForm.reset();
  }

  addContactReactive() {
    this.contactService.addContact(this.contactFormReactive.value);
    this.phoneArray.clear();
    this.addNewPhoneToContactReactive();
    this.contactFormReactive.reset({
      rpicture: 'assets/default-user.png',
    });
    localStorage.removeItem('contact');
  }

  addNewPhoneToContact() {
    this.contact.phones?.push({ type: PhoneType.home, number: 0 });
  }

  addNewPhoneToContactReactive() {
    this.phoneArray.push(
      this.fb.group({
        type: [null],
        number: [''],
      })
    );
    /*this.phoneArray.push(
      new FormGroup({
        type: new FormControl(null),
        number: new FormControl(''),
      })
    );*/
  }

  getImage(event: any): Promise<string> {
    return new Promise((resolve, reject) => {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        resolve(<string>reader.result);
      };
      reader.onerror = (error) => {
        reject(error);
      };
    });
  }

  addImageTemplate(event: any) {
    this.getImage(event)
      .then((img) => (this.contact.picture = img))
      .catch((err) => {
        console.log('error al cargar la imagen');
        this.contact.picture = 'assets/default-user.png';
      });
  }

  async addImageReactive(event: any) {
    const image = await this.getImage(event);
    this.contactFormReactive.get(['rpicture'])?.setValue(image);
  }
}
