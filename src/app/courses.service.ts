import { Injectable } from '@angular/core';
import { Course } from './course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  courses: Course[] = [
    {
      iconUrl: '../../../assets/icon-animation.svg',
      name: 'Animation',
      description: 'Learn the latest animation techniques to create stunning motion design and captivate your audience.'
    },
    {
      iconUrl: '../../../assets/icon-design.svg',
      name: 'Design',
      description: 'Create beautiful, usable interfaces to help shape the future of how the web looks.'
    },
    {
      iconUrl: '../../../assets/icon-photography.svg',
      name: 'Photography',
      description: 'Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.'
    },
    {
      iconUrl: '../../../assets/icon-crypto.svg',
      name: 'Crypto',
      description: 'All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.'
    },
    {
      iconUrl: '../../../assets/icon-business.svg',
      name: 'Business',
      description: 'A step-by-step playbook to help you start, scale, and sustain your business without outside investment.'
    },
  ];

  constructor() { }
}
