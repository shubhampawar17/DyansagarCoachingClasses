import { Component } from '@angular/core';
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {
  activeYear = '2025';
  years = ['2025', '2024', '2023', '2022'];

  toppers: Record<string, any[]> = {
    '2025': [
      { name: 'Aditya Kulkarni', exam: 'JEE Advanced', score: 'AIR 892', photo: '' },
      { name: 'Priya Sharma', exam: 'NEET UG', score: '695/720', photo: '' },
      { name: 'Rohan Deshmukh', exam: 'MHT-CET', score: '99.8 %ile', photo: '' },
      { name: 'Sneha Patil', exam: 'HSC Board', score: '98.6%', photo: '' },
      { name: 'Vikram Joshi', exam: 'JEE Main', score: '99.4 %ile', photo: '' },
      { name: 'Ananya Rao', exam: 'NEET UG', score: '670/720', photo: '' }
    ],
    '2024': [
      { name: 'Aman Singh', exam: 'JEE Advanced', score: 'AIR 1247', photo: '' },
      { name: 'Kavita Desai', exam: 'NEET UG', score: '685/720', photo: '' },
      { name: 'Rahul Patil', exam: 'MHT-CET', score: '99.5 %ile', photo: '' },
      { name: 'Pooja Mehta', exam: 'HSC Board', score: '97.8%', photo: '' }
    ],
    '2023': [
      { name: 'Suresh Kumar', exam: 'JEE Main', score: '99.2 %ile', photo: '' },
      { name: 'Neha Jadhav', exam: 'NEET UG', score: '660/720', photo: '' },
      { name: 'Ajay Thakur', exam: 'MHT-CET', score: '99.1 %ile', photo: '' }
    ],
    '2022': [
      { name: 'Ravi Sharma', exam: 'JEE Advanced', score: 'AIR 2150', photo: '' },
      { name: 'Swati Iyer', exam: 'NEET UG', score: '645/720', photo: '' }
    ]
  };

  achievements = [
    { value: '250+', label: 'IIT/NIT Selections', icon: 'fas fa-university' },
    { value: '500+', label: 'Medical Selections', icon: 'fas fa-hospital' },
    { value: '1200+', label: 'Engineering Selections', icon: 'fas fa-cog' },
    { value: '98%', label: 'Board Pass Rate', icon: 'fas fa-chart-line' }
  ];
}
