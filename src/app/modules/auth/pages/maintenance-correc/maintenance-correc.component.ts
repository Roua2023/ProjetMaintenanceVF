import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-maintenance-correc',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './maintenance-correc.component.html',
  styleUrls: ['./maintenance-correc.component.css']
})
export class MaintenanceCorrecComponent {
 currentChapter = 1;
showAnswer = false;
  nextChapter() {
    if (this.currentChapter < 6) {
      this.currentChapter++;
    }
  }

  previousChapter() {
  if (this.currentChapter > 1) {
    this.currentChapter--;
  }
}
 chapterTitles: { [key: number]: string } = {
  1:  "Introduction – L'histoire de Louis, le technicien pressé",
   2: " Qu’est-ce que la maintenance corrective ?",
    3: "Les méthodes et outils de la maintenance corrective",
   4: "Retour d’expérience – Louis passe à l’action",
    5: "Maintenance corrective ou préventive ? Choisir une stratégie",
    6: "Vers une culture de la maintenance intelligente",
  
};


}
