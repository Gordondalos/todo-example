import { Component, inject } from '@angular/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatCheckbox } from '@angular/material/checkbox';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-todo-item-form',
  standalone: true,
  imports: [
    MatFormField,
    MatInput,
    MatCheckbox,
    ReactiveFormsModule,
    MatButton,
    MatLabel
  ],
  templateUrl: './add-todo-item-form.component.html',
  styleUrl: './add-todo-item-form.component.scss'
})
export class AddTodoItemFormComponent {

  readonly dialogRef = inject(MatDialogRef<AddTodoItemFormComponent>);

  form = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    completed: new FormControl(false, []),
  });

  save() {
    this.dialogRef.close(this.form.value);
  }
}
