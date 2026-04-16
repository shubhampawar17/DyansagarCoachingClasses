import { Component } from '@angular/core';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  activeFilter = 'all';
  filters = ['all', 'classroom', 'events', 'awards', 'campus'];

  photos = [
    { src: '', category: 'classroom', title: 'Smart Classroom Session', color: '#1a237e' },
    { src: '', category: 'events', title: 'Annual Day Celebration', color: '#e65100' },
    { src: '', category: 'awards', title: 'Topper Felicitation', color: '#2e7d32' },
    { src: '', category: 'campus', title: 'Campus Overview', color: '#6a1b9a' },
    { src: '', category: 'classroom', title: 'Physics Lab Session', color: '#00838f' },
    { src: '', category: 'events', title: 'Science Exhibition', color: '#bf360c' },
    { src: '', category: 'awards', title: 'JEE Achievement Award', color: '#1a237e' },
    { src: '', category: 'campus', title: 'Library Section', color: '#e65100' },
    { src: '', category: 'classroom', title: 'Chemistry Lab', color: '#2e7d32' },
    { src: '', category: 'events', title: 'Parent-Teacher Meet', color: '#6a1b9a' },
    { src: '', category: 'awards', title: 'NEET Topper Award', color: '#00838f' },
    { src: '', category: 'campus', title: 'Computer Lab', color: '#bf360c' }
  ];

  selectedPhoto: any = null;

  get filteredPhotos() {
    if (this.activeFilter === 'all') return this.photos;
    return this.photos.filter(p => p.category === this.activeFilter);
  }

  openLightbox(photo: any) { this.selectedPhoto = photo; document.body.style.overflow = 'hidden'; }
  closeLightbox() { this.selectedPhoto = null; document.body.style.overflow = ''; }
}
