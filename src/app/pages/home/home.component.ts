import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  stats = [
    { icon: 'fas fa-calendar-alt', value: 0, target: 15, suffix: '+', label: 'Years Experience' },
    { icon: 'fas fa-user-graduate', value: 0, target: 5000, suffix: '+', label: 'Students Trained' },
    { icon: 'fas fa-trophy', value: 0, target: 95, suffix: '%', label: 'Success Rate' },
    { icon: 'fas fa-chalkboard-teacher', value: 0, target: 50, suffix: '+', label: 'Expert Faculty' }
  ];

  courses = [
    {
      icon: 'fas fa-atom',
      title: 'Class 11-12 Science',
      description: 'Comprehensive coaching for Physics, Chemistry, Mathematics & Biology with board exam focus.',
      features: ['CBSE & State Board', 'Weekly Tests', 'Lab Practicals'],
      color: '#1a237e'
    },
    {
      icon: 'fas fa-rocket',
      title: 'JEE Preparation',
      description: 'Intensive training for JEE Main & Advanced with topic-wise problem solving sessions.',
      features: ['Mock Tests', 'Doubt Sessions', 'Study Material'],
      color: '#e65100'
    },
    {
      icon: 'fas fa-heartbeat',
      title: 'NEET Coaching',
      description: 'Focused preparation for NEET with special emphasis on Biology, Physics & Chemistry.',
      features: ['NCERT Based', 'Previous Year Papers', 'Regular Tests'],
      color: '#2e7d32'
    },
    {
      icon: 'fas fa-flask',
      title: 'MHT-CET Prep',
      description: 'Strategic preparation for Maharashtra CET entrance with state-level syllabus coverage.',
      features: ['State Syllabus', 'Online Tests', 'Performance Tracking'],
      color: '#6a1b9a'
    },
    {
      icon: 'fas fa-book-open',
      title: 'Foundation (8-10)',
      description: 'Building strong fundamentals in Science & Mathematics for competitive exam readiness.',
      features: ['Olympiad Prep', 'NTSE/NSE', 'Board Excellence'],
      color: '#00838f'
    },
    {
      icon: 'fas fa-graduation-cap',
      title: 'Board Exam Prep',
      description: 'Dedicated board exam preparation ensuring students score highest possible marks.',
      features: ['Sample Papers', 'Revision Classes', 'Scoring Tips'],
      color: '#bf360c'
    }
  ];

  whyChooseUs = [
    { icon: 'fas fa-award', title: 'Expert Faculty', desc: 'Experienced teachers with proven track records in competitive exam coaching.' },
    { icon: 'fas fa-users', title: 'Small Batches', desc: 'Limited students per batch ensuring personalized attention for every student.' },
    { icon: 'fas fa-book', title: 'Study Material', desc: 'Comprehensive, well-researched study material designed by subject experts.' },
    { icon: 'fas fa-comments', title: 'Doubt Sessions', desc: 'Regular doubt-clearing sessions to ensure no concept is left behind.' },
    { icon: 'fas fa-chart-line', title: 'Progress Tracking', desc: 'Regular assessments and parent-teacher meetings for monitoring progress.' },
    { icon: 'fas fa-laptop', title: 'Smart Learning', desc: 'Integration of technology with traditional teaching for enhanced understanding.' }
  ];

  testimonials = [
    {
      name: 'Priya Sharma',
      course: 'JEE Advanced',
      rating: 5,
      text: 'Dnyanasagar transformed my preparation. The faculty\'s dedication and systematic approach helped me crack JEE Advanced with a great rank!',
      result: 'AIR 1247'
    },
    {
      name: 'Rahul Patil',
      course: 'NEET',
      rating: 5,
      text: 'The biology faculty here is exceptional. Their NCERT-focused approach and regular tests gave me the confidence to score 680+ in NEET.',
      result: '685/720'
    },
    {
      name: 'Sneha Kulkarni',
      course: 'MHT-CET',
      rating: 5,
      text: 'Best coaching for MHT-CET preparation. The practice sets and mock tests were exactly what I needed. Secured admission in COEP!',
      result: '99.2 %ile'
    },
    {
      name: 'Amit Deshmukh',
      course: 'Class 12 Board',
      rating: 5,
      text: 'I scored 96% in my board exams thanks to the excellent teaching methodology at Dnyanasagar. The revision sessions were very helpful.',
      result: '96% in Boards'
    }
  ];

  currentTestimonial = 0;
  private testimonialInterval: any;
  private statsAnimated = false;

  ngOnInit() {
    this.startTestimonialAutoplay();
    this.setupIntersectionObserver();
  }

  ngOnDestroy() {
    if (this.testimonialInterval) {
      clearInterval(this.testimonialInterval);
    }
  }

  startTestimonialAutoplay() {
    this.testimonialInterval = setInterval(() => {
      this.currentTestimonial = (this.currentTestimonial + 1) % this.testimonials.length;
    }, 5000);
  }

  setTestimonial(index: number) {
    this.currentTestimonial = index;
    clearInterval(this.testimonialInterval);
    this.startTestimonialAutoplay();
  }

  setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.statsAnimated) {
          this.statsAnimated = true;
          this.animateCounters();
        }
      });
    }, { threshold: 0.3 });

    setTimeout(() => {
      const statsSection = document.getElementById('stats-section');
      if (statsSection) observer.observe(statsSection);
    }, 100);
  }

  animateCounters() {
    this.stats.forEach(stat => {
      const duration = 2000;
      const steps = 60;
      const increment = stat.target / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.target) {
          stat.value = stat.target;
          clearInterval(timer);
        } else {
          stat.value = Math.floor(current);
        }
      }, duration / steps);
    });
  }

  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }
}
