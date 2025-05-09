import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-error401',
  templateUrl: './error401.component.html',
  styleUrls: ['./error401.component.css'],
  imports: [CommonModule],
})
export class Error401Component {
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
