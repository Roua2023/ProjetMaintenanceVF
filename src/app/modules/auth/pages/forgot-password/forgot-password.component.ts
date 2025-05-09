import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
  imports: [CommonModule],
})
export class ForgotPasswordComponent {
  currentStep = 1;
  totalSteps = 4;  // Augmenté pour inclure la nouvelle étape
  quizResult: 'success' | 'failure' | null = null;  // Nouveau champ pour stocker le résultat du quiz

  nextStep() {
    if (this.currentStep < this.totalSteps) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  checkQuizAnswers() {
    const answers = [
      (document.getElementById('quiz-answer-1') as HTMLSelectElement)?.value,
      (document.getElementById('quiz-answer-2') as HTMLSelectElement)?.value,
      (document.getElementById('quiz-answer-3') as HTMLSelectElement)?.value,
    ];

    const correctAnswers = ["2", "2", "1"]; // Bonnes réponses
    let score = 0;

    answers.forEach((answer, index) => {
      if (answer === correctAnswers[index]) {
        score++;
      }
    });

    // Mise à jour du modèle de résultat basé sur le score
    if (score === answers.length) {
      this.quizResult = 'success';  // Toutes les réponses sont correctes
    } else {
      this.quizResult = 'failure';  // Certaines réponses sont incorrectes
    }

    const resultElement = document.getElementById('quiz-result');
    if (resultElement) {
      resultElement.textContent = `Vous avez ${score}/${answers.length} bonne(s) réponse(s).`;
      resultElement.style.color = score === answers.length ? "green" : "red";
    }
  }
}
