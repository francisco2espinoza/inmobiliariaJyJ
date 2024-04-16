import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent {
  constructor(private fb:FormBuilder){}

  contactusForm = this.fb.group({
      persona: this.fb.group({
        nombre: ['', Validators.required],
        apellido: ['', Validators.required]
      }),
      correo: ['', Validators.email],
      comentarios: ['']
  })
  
}
