import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('ssr-playground');

  constructor(
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit() {
    this.titleService.setTitle('SSR Playground');
    this.metaService.updateTag({
      name: 'description',
      content: 'SSR Playground - A comprehensive demo of Angular Universal with hybrid rendering modes including server-side rendering, client-side rendering, and prerendering.'
    });
  }
}
