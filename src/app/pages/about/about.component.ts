import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  faculty = [
    { name: 'Dr. Rajesh Kumar', subject: 'Physics', experience: '18+ Years', image: '' },
    { name: 'Prof. Sunita Deshpande', subject: 'Chemistry', experience: '15+ Years', image: '' },
    { name: 'Mr. Anil Patil', subject: 'Mathematics', experience: '20+ Years', image: '' },
    { name: 'Dr. Meera Joshi', subject: 'Biology', experience: '12+ Years', image: '' },
    { name: 'Mr. Vikram Singh', subject: 'Mathematics', experience: '14+ Years', image: '' },
    { name: 'Mrs. Priyanka Rao', subject: 'Chemistry', experience: '10+ Years', image: '' }
  ];

  milestones = [
    { year: '2000', title: 'Foundation', desc: 'Dnyansagar was established with a vision to provide quality education.' },
    { year: '2013', title: 'First 100%', desc: 'Achieved 100% results in board examinations for the first time.' },
    { year: '2016', title: 'JEE Success', desc: 'First batch of JEE students — 15 selections in IITs and NITs.' },
    { year: '2019', title: 'NEET Milestone', desc: '50+ students selected in top medical colleges across India.' },
    { year: '2022', title: 'Expansion', desc: 'Opened second branch to serve more students in the region.' },
    { year: '2025', title: '5000+ Alumni', desc: 'Crossed 5000 successful alumni network milestone.' }
  ];

  infrastructure = [
    { icon: 'fas fa-chalkboard', title: 'Smart Classrooms', desc: '12 fully equipped smart classrooms with projectors and digital boards.' },
    { icon: 'fas fa-flask', title: 'Science Labs', desc: 'State-of-the-art Physics, Chemistry, and Biology laboratories.' },
    { icon: 'fas fa-book-reader', title: 'Library', desc: 'Extensive library with 5000+ books, journals, and reference materials.' },
    { icon: 'fas fa-laptop', title: 'Computer Lab', desc: 'Online test facility with 40+ computers for mock examinations.' },
    { icon: 'fas fa-dumbbell', title: 'Recreation', desc: 'Indoor games and relaxation area for students between sessions.' },
    { icon: 'fas fa-video', title: 'Recording Studio', desc: 'In-house recording studio for creating online course content.' }
  ];
}
