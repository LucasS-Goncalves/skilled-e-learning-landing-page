import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/course';
import { CoursesService } from 'src/app/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit{
  courses: Course[] = [];

  constructor(private coursesService: CoursesService){}

  ngOnInit(): void {
    this.courses = this.coursesService.courses;
  }
}
