import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-maintenance4',
  standalone: true, // ajoute ceci si c'est un composant autonome
    imports: [CommonModule,RouterModule],
  templateUrl: './maintenance4.component.html',
  styleUrls: ['./maintenance4.component.css']
})
export class Maintenance4Component {
  images: string[] = [
        "assets/images/MG4.0/m1.png",

    "../../../../../assets/images/MG4.0/m2.png",
    "../../../../../assets/images/MG4.0/m3.png",
    "../../../../../assets/images/MG4.0/m4.png",
    "../../../../../assets/images/MG4.0/m5.png",
    "../../../../../assets/images/MG4.0/m6.png",
    "../../../../../assets/images/MG4.0/m7.png",
    "../../../../../assets/images/MG4.0/m8.png",
    "../../../../../assets/images/MG4.0/m9.png",
    "../../../../../assets/images/MG4.0/m10.png",
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
