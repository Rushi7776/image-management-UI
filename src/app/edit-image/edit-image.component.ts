// edit-image.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-edit-image',
  templateUrl: './edit-image.component.html',
  styleUrls: ['./edit-image.component.css']
})
export class EditImageComponent implements OnInit {
  editForm: FormGroup;
  image: any;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private imageService: ImageService,
    private router: Router
  ) {
    this.editForm = this.fb.group({
      user: ['', Validators.required],
      description: ['', Validators.required],
      url: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      const id = Number(idParam);
      if (!isNaN(id)) {
        this.imageService.getImageById(id).subscribe(
          (data) => {
            this.image = data;
            this.createForm();
          },
          (error) => {
            console.error('Error fetching image data:', error);
            alert('Failed to load image data. Please try again later.');
          }
        );
      } else {
        console.error('Invalid ID parameter');
        alert('Invalid ID parameter.');
      }
    } else {
      console.error('ID parameter is null');
      alert('ID parameter is missing.');
    }
  }

  createForm() {
    if (this.image) {
      this.editForm.patchValue({
        user: this.image.user,
        description: this.image.description,
        url: this.image.url
      });
    } else {
      console.error('Image data is undefined');
      alert('Image data is not available.');
    }
  }

  onSubmit() {
    if (this.editForm.valid) {
      this.imageService.updateImage(this.image.id, this.editForm.value).subscribe(
        () => {
          alert('Image updated successfully.');
          this.router.navigate(['/home']);
        },
        (error) => {
          console.error('Error updating image:', error);
          alert('Failed to update image. Please try again later.');
        }
      );
    } else {
      alert('Please fill in all required fields.');
    }
  }
}
