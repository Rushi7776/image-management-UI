import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ImageService } from '../services/image.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-image-form',
  templateUrl: './image-form.component.html',
  styleUrls: ['./image-form.component.css']
})
export class ImageFormComponent implements OnInit {
  imageForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private imageService: ImageService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.imageForm = this.fb.group({
      user: ['', Validators.required],
      description: ['', Validators.required],
      url: ['', [Validators.required, Validators.pattern(/https?:\/\/.+/)]]
    });
    this.setDateCreated();
  }

  private setDateCreated(): void {
    this.imageForm.addControl('dateCreated', this.fb.control(new Date().toISOString(), Validators.required));
  }

  onSubmit(): void {
    if (this.imageForm.valid) {
      this.imageService.addImage(this.imageForm.value).subscribe(
        response => {
          console.log('Image added:', response);
          this.snackBar.open('Image added successfully!', 'Close', {
            duration: 3000,
          });
          this.router.navigate(['/']);
        },
        error => {
          console.error('Error adding image:', error);
          this.snackBar.open('Error adding image. Please try again later.', 'Close', {
            duration: 3000,
          });
        }
      );
    } else {
      this.snackBar.open('Form is invalid. Please check your input.', 'Close', {
        duration: 3000,
      });
    }
  }
}
