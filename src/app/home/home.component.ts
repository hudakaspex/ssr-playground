import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router, 
    private titleService: Title,
    private metaService: Meta
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Home - SSR Playground');
    this.metaService.updateTag({
      name: 'description',
      content: 'Welcome to SSR Playground - your home for exploring Angular Universal server-side rendering. This page uses client-side rendering for dynamic content.'
    });
  }

  navigateToAbout() {
    this.router.navigate(['/about']);
  }

}
