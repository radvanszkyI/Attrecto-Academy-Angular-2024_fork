import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Badge } from '../../classes/Badge';

@Injectable({
  providedIn: 'root'
})
export class BadgeService {

  constructor(private httpClient: HttpClient) { }

  getBadges(): Observable<Badge[]> {
    return this.httpClient.get<Badge[]>(`${environment.apiUrl}/badges`)
  }


  getBadge(badgeId: number): Observable<Badge> {
    return this.httpClient.get<Badge>(`${environment.apiUrl}/badges/${badgeId}`)
  }
  createBadge(badge: Badge) {
    return this.httpClient.post(`${environment.apiUrl}/badges/`, badge)
  }
  updateBadge(id: number, badge: Badge) {
    return this.httpClient.put(`${environment.apiUrl}/badges/${id}`, badge)
  }

  deleteBadge(id: number) {
    return this.httpClient.delete(`${environment.apiUrl}/badges/${id}`)
  }
} 
