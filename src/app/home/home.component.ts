import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { ImageService } from '../services/image.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images: any[] = [];

  constructor(
    private imageService: ImageService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadImages();

    // Listen for route changes and reload images if 'reload' is in query params
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd && this.route.snapshot.queryParams['reload'])
    ).subscribe(() => {
      this.loadImages(); // Reload images
    });
  }

  loadImages(): void {
    this.imageService.getImages().subscribe(
      data => {
        this.images = data;
      },
      error => {
        console.error('Error fetching images:', error);
      }
    );
  }
  onImageDelete(deletedImage: any) {
    this.loadImages();
  }
}
