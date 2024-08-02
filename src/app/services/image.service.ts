import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private apiUrl = 'https://localhost:7257/api/Image';

  constructor(private http: HttpClient) { }

  getImages(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getImageById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }  

  addImage(imageData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, imageData);
  }

  deleteImage(event: any): Observable<void> {
    const id = event.id; 
    const deleteUrl = `${this.apiUrl}/${id}`; 
    return this.http.delete<void>(deleteUrl); 
  }
  

  updateImage(id: number, imageData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, imageData);
  }
}
