import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-maintenance-prev',
    imports: [CommonModule,RouterModule],
  templateUrl: './maintenance-prev.component.html',
  styleUrl: './maintenance-prev.component.css'
})

export class MaintenancePrevComponent {
   currentChapter = 1;
showAnswer = false;
  nextChapter() {
    if (this.currentChapter < 11) {
      this.currentChapter++;
    }
  }

  previousChapter() {
  if (this.currentChapter > 1) {
    this.currentChapter--;
  }
}
 chapterTitles: { [key: number]: string } = {
  1: 'Introduction à la maintenance préventive',
  2: 'Les prérequis',
  3: 'Les 5 étapes de la maintenance préventive',
  4: 'Etape1 ->1 Évaluation et inventaire des équipements',
  5: 'Etape1 ->2 Détermination des tâches de maintenance préventive',
  6: 'Etape1 ->3 Planification et programmation',
  7: 'Etape1 ->4 Mise en œuvre et suivi',
  8: 'Etape1 ->5 Révision et amélioration continue',
  9: 'Types de  la maintenance préventive',
  10: 'Quels sont les avantages de la maintenance préventive ?',
  11: 'Mini-évaluation',
};



}
