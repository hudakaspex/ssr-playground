import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(
    private router: Router, 
    private titleService: Title,
    private metaService: Meta
  ) { }

  ngOnInit() {
    this.titleService.setTitle('About - SSR Playground Test');
    this.metaService.updateTag({
      name: 'description',
      content: 'Learn more about our SSR Playground project test. This page demonstrates server-side rendering capabilities with Angular Universal and hybrid rendering modes.'
    });
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

}
