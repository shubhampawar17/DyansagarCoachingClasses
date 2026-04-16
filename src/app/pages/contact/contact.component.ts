import { Component } from '@angular/core';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  formData = {
    name: '',
    phone: '',
    email: '',
    course: '',
    message: ''
  };

  courseOptions = [
    'Class 8 Foundation',
    'Class 9-10 Foundation',
    'Class 11 Science',
    'Class 12 Science',
    'JEE Main Preparation',
    'JEE Advanced Intensive',
    'NEET UG Complete',
    'NEET Dropper Batch',
    'MHT-CET Engineering',
    'MHT-CET Medical'
  ];

  submitted = false;

  contactInfo = [
    { icon: 'fas fa-map-marker-alt', title: 'Visit Us', lines: ['123, Main Road, Near Bus Stand,', 'Pune, Maharashtra 411001'] },
    { icon: 'fas fa-phone-alt', title: 'Call Us', lines: ['+91 98765 43210', '+91 98765 43211'] },
    { icon: 'fas fa-envelope', title: 'Email Us', lines: ['info@dnyanasagar.com', 'admissions@dnyanasagar.com'] },
    { icon: 'fas fa-clock', title: 'Working Hours', lines: ['Mon - Sat: 7:00 AM - 9:00 PM', 'Sunday: 9:00 AM - 1:00 PM'] }
  ];

  onSubmit() {
    this.submitted = true;
    setTimeout(() => this.submitted = false, 5000);
    this.formData = { name: '', phone: '', email: '', course: '', message: '' };
  }
}
