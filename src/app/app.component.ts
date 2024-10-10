import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstName: string = '';
  lastName: string = '';
  inputPassword: string = '';
  showModal: boolean = false;
  showAlert: boolean = false;

  // Función para abrir el modal de la contraseña
  openPasswordModal() {
    this.showModal = true;
  }

  // Función para cerrar el modal
  closeModal() {
    this.showModal = false;
    this.inputPassword = '';  // Reiniciar el campo de la contraseña
  }

  // Función para verificar la contraseña
  checkPassword() {
    const correctPassword = this.firstName.toLowerCase() + '123'; // Generar la contraseña correcta

    if (this.inputPassword === correctPassword) {
      this.showAlert = true;  // Mostrar alerta si la contraseña es correcta
      this.showModal = false; // Cerrar el modal
    } else {
      alert('Contraseña incorrecta, intenta de nuevo.');
    }
  }
}
