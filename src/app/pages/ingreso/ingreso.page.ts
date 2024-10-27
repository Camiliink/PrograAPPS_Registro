import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonTabButton, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.page.html',
  styleUrls: ['./ingreso.page.scss'],
  standalone: true,
  imports: [IonButton, IonTabButton, IonInput, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class IngresoPage {

  cuenta: string = 'atorres';
  password: string = '1234';

  constructor(private authservice: AuthService) { }

  ingresar(){
    this.authservice.login(this.cuenta,this.password);
  }
}
