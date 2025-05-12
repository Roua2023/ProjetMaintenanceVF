import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-maintenancepredictive',
  imports: [CommonModule,RouterModule],
  templateUrl: './maintenancepredictive.component.html',
  styleUrl: './maintenancepredictive.component.css'
})
export class MaintenancepredictiveComponent {
   currentChapter = 1;

  nextChapter() {
    if (this.currentChapter < 9) {
      this.currentChapter++;
    }
  }

  previousChapter() {
  if (this.currentChapter > 1) {
    this.currentChapter--;
  }
}
chapterTitles: string[] = [
  '', // index 0 (inutile, car tu commences à 1)
  'Introduction à la maintenance prédictive',
  'Avantages de la maintenance prédictive',
  'Étapes de mise en œuvre',
  'Extraction des Indicateurs de Condition',
  'Estimation de la Durée de Vie Restante (RUL)',
  'Étude de cas (Pompe Triplex)',
  'Outils et Ressources MATLAB pour la Maintenance Prédictive',
  'Défis et Solutions Communes en Maintenance Prédictive',
  'Conclusion et Perspectives'
]

}
