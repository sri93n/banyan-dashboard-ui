import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { TvShow } from '../model/TvShow.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TvShowService {
  private baseUrl = 'http://localhost:8080/api/tv';
  constructor(private http: HttpClient) {}

  getAllShows(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl+"/shows").pipe(
      map(values => values.map(value => {
        value.showDetails = JSON.parse(value.showDetails);
        return value;
      }))
    )
  }

  getShowDetails(id:string): Observable<any> {
    return this.http.get<any[]>(this.baseUrl+"/show/"+id);
  }
  // getAllShows(): Observable<any> {
  //   return this.http.get<any>(this.baseUrl).pipe(
  //     map(items =>{
  //       // items.map(item => {
  //         try {
  //           items.showDetails = JSON.parse(items.showDetails);
  //         } catch (e) {
  //           console.error('Invalid JSON:', items.data);
  //           items.data = {}; // or keep as string, based on use case
  //         }
  //         return items;
  //       // })
  //   })
  // )
  // }

}
