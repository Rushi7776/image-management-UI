import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.css']
})
export class ImageCardComponent {

  @Input() image: any;
  @Output() edit = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();

  constructor(private router: Router, private imageService: ImageService) {} 

  onEdit() {
    this.edit.emit(this.image);
    console.log('Image data before navigation:', this.image);
    if (this.image && this.image.id !== undefined) {
      console.log('Navigating to edit with ID:', this.image.id);
      this.router.navigate(['/edit', this.image.id]);
    } else {
      console.error('Image ID is not available or undefined.');
    }
  }

  onDelete() {
    if (this.image && this.image.id !== undefined) {
      this.imageService.deleteImage(this.image).subscribe(
        () => {
          console.log('Image deleted successfully.');
          this.router.navigate([''], { queryParams: { reload: true } });
        },
        (error) => {
          console.error('Error deleting image:', error);
        }
      );
    } else {
      console.error('Image ID is not available or undefined for deletion.');
    }
  }
  
}
