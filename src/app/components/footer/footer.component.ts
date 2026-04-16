import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Our Courses', path: '/courses' },
    { label: 'Results', path: '/results' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact Us', path: '/contact' }
  ];

  courses = [
    'Class 8-10 Foundation',
    'Class 11-12 Science',
    'JEE Preparation',
    'NEET Preparation',
    'MHT-CET Coaching',
    'Board Exam Prep'
  ];
}
