import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [NgFor],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})

export class PortfolioComponent {
  portfolioImages = [
    { src: 'images/portfolio/poert1.png', alt: 'Portfolio Item 1' },
    { src: 'images/portfolio/port2.png', alt: 'Portfolio Item 2' },
    { src: 'images/portfolio/port3.png', alt: 'Portfolio Item 3' },
    { src: 'images/portfolio/poert1.png', alt: 'Portfolio Item 4' },
    { src: 'images/portfolio/port2.png', alt: 'Portfolio Item 5' },
    { src: 'images/portfolio/port3.png', alt: 'Portfolio Item 6' }
  ];
}
