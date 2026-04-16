import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  activeFilter = 'all';

  filters = [
    { key: 'all', label: 'All Courses' },
    { key: 'foundation', label: 'Foundation' },
    { key: 'science', label: 'Class 11-12' },
    { key: 'jee', label: 'JEE' },
    { key: 'neet', label: 'NEET' },
    { key: 'cet', label: 'MHT-CET' }
  ];

  courses = [
    {
      category: 'foundation',
      icon: 'fas fa-seedling',
      title: 'Class 8 Foundation',
      duration: '1 Year',
      batchSize: '30 Students',
      subjects: ['Mathematics', 'Science', 'Mental Ability'],
      features: ['Olympiad Preparation', 'NTSE Foundation', 'Weekly Tests', 'Parent Meetings'],
      color: '#00838f'
    },
    {
      category: 'foundation',
      icon: 'fas fa-book-open',
      title: 'Class 9-10 Foundation',
      duration: '2 Years',
      batchSize: '30 Students',
      subjects: ['Mathematics', 'Science', 'SSC Board'],
      features: ['Board + Competitive', 'Scholarship Exams', 'Lab Sessions', 'Monthly Tests'],
      color: '#00695c'
    },
    {
      category: 'science',
      icon: 'fas fa-atom',
      title: 'Class 11 Science',
      duration: '1 Year',
      batchSize: '35 Students',
      subjects: ['Physics', 'Chemistry', 'Math/Biology'],
      features: ['CBSE + State Board', 'JEE/NEET Foundation', 'Regular DPPs', 'Doubt Sessions'],
      color: '#1a237e'
    },
    {
      category: 'science',
      icon: 'fas fa-microscope',
      title: 'Class 12 Science',
      duration: '1 Year',
      batchSize: '35 Students',
      subjects: ['Physics', 'Chemistry', 'Math/Biology'],
      features: ['Board Excellence', 'Entrance Exam Prep', 'Revision Batches', 'Mock Boards'],
      color: '#283593'
    },
    {
      category: 'jee',
      icon: 'fas fa-rocket',
      title: 'JEE Main Prep',
      duration: '2 Years',
      batchSize: '30 Students',
      subjects: ['Physics', 'Chemistry', 'Mathematics'],
      features: ['Complete JEE Syllabus', 'Mock Tests (NTA Pattern)', 'Previous Year Analysis', 'Rank Improvement'],
      color: '#e65100'
    },
    {
      category: 'jee',
      icon: 'fas fa-fire',
      title: 'JEE Advanced Intensive',
      duration: '1 Year',
      batchSize: '25 Students',
      subjects: ['Advanced Physics', 'Advanced Chemistry', 'Advanced Math'],
      features: ['IIT Level Problems', 'Daily Practice Papers', 'Weekend Tests', 'Personal Mentoring'],
      color: '#bf360c'
    },
    {
      category: 'neet',
      icon: 'fas fa-heartbeat',
      title: 'NEET UG Complete',
      duration: '2 Years',
      batchSize: '30 Students',
      subjects: ['Physics', 'Chemistry', 'Biology (ZB)'],
      features: ['NCERT Focused', 'NEET Mock Tests', 'Biology Special', 'Previous Year Papers'],
      color: '#2e7d32'
    },
    {
      category: 'neet',
      icon: 'fas fa-stethoscope',
      title: 'NEET Dropper Batch',
      duration: '1 Year',
      batchSize: '25 Students',
      subjects: ['Physics', 'Chemistry', 'Biology'],
      features: ['Crash Course', 'Intensive Revision', 'Daily Tests', 'Score Improvement Focus'],
      color: '#1b5e20'
    },
    {
      category: 'cet',
      icon: 'fas fa-flask',
      title: 'MHT-CET Engineering',
      duration: '1 Year',
      batchSize: '35 Students',
      subjects: ['Physics', 'Chemistry', 'Mathematics'],
      features: ['State Syllabus', 'CET Mock Tests', 'Cutoff Analysis', 'College Guidance'],
      color: '#6a1b9a'
    },
    {
      category: 'cet',
      icon: 'fas fa-dna',
      title: 'MHT-CET Medical',
      duration: '1 Year',
      batchSize: '35 Students',
      subjects: ['Physics', 'Chemistry', 'Biology'],
      features: ['Maharashtra Board', 'CET Pattern Tests', 'Medical College Guidance', 'Admission Support'],
      color: '#4a148c'
    }
  ];

  get filteredCourses() {
    if (this.activeFilter === 'all') return this.courses;
    return this.courses.filter(c => c.category === this.activeFilter);
  }

  setFilter(key: string) {
    this.activeFilter = key;
  }
}
