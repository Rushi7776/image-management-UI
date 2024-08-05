import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ImageService } from '../services/image.service';
import { filter } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images: any[] = [];
  filteredImages: any[] = [];
  searchQuery: string = '';
  page: number = 1;
  pageSize: number = 5; 

  constructor(
    private imageService: ImageService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadImages();

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.loadImages(); 
    });
  }

  loadImages(): void {
    this.imageService.getImages().subscribe(
      data => {
        this.images = data;
        this.filteredImages = data; 
        this.filterImages(); 
      },
      error => {
        console.error('Error fetching images:', error);
      }
    );
  }

  onSearch(): void {
    this.filterImages();
  }

  filterImages(): void {
    if (this.searchQuery) {
      this.filteredImages = this.images.filter(image =>
        image.user.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        image.description.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.filteredImages = [...this.images];
    }
  }

  onEdit(image: any) {
    this.router.navigate(['/edit', image.id]);
  }

  onDelete(image: any) {
    if (image && image.id !== undefined) {
      const confirmed = confirm('Are you sure you want to delete this image?');

      if (confirmed) {
        this.imageService.deleteImage(image).subscribe(
          () => {
            this.snackBar.open('Image deleted successfully.', 'Close', {
              duration: 3000,
            });
            this.loadImages(); 
          },
          (error) => {
            console.error('Error deleting image:', error);
            this.snackBar.open('Error deleting image. Please try again later.', 'Close', {
              duration: 3000,
            });
          }
        );
      } else {
        console.log('Image deletion was canceled.');
      }
    } else {
      console.error('Image ID is not available or undefined for deletion.');
    }
  }
  
  
}
