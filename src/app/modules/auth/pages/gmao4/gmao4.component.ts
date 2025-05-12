import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-gmao4',
    imports: [CommonModule,RouterModule],
  templateUrl: './gmao4.component.html',
  styleUrl: './gmao4.component.css'
})
export class Gmao4Component {
  images: string[] = [

    "../../../../../assets/images/MG4.0/G1.png",
    "../../../../../assets/images/MG4.0/G2.png",
    "../../../../../assets/images/MG4.0/G3.png",
    "../../../../../assets/images/MG4.0/G4.png",
    "../../../../../assets/images/MG4.0/G5.png",
    "../../../../../assets/images/MG4.0/G6.png",
    "../../../../../assets/images/MG4.0/G7.png",
    "../../../../../assets/images/MG4.0/G8.png",
    "../../../../../assets/images/MG4.0/G9.png",
    "../../../../../assets/images/MG4.0/G10.png",
  ];

  current = 0;

  get currentImage(): string {
    return this.images[this.current];
  }

  nextImage(): void {
    this.current = (this.current + 1) % this.images.length;
  }

  previousImage(): void {
    this.current = (this.current - 1 + this.images.length) % this.images.length;
  }

}
