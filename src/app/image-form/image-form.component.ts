import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ImageService } from '../services/image.service';

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
    private router: Router
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
    // You might want to set this field value when submitting the form
    // Alternatively, set this in onSubmit() method
    this.imageForm.addControl('dateCreated', this.fb.control(new Date().toISOString(), Validators.required));
  }

  onSubmit(): void {
    if (this.imageForm.valid) {
      this.imageService.addImage(this.imageForm.value).subscribe(
        response => {
          console.log('Image added:', response);
          this.router.navigate(['/']);
        },
        error => {
          console.error('Error adding image:', error);
        }
      );
    }
  }
}
