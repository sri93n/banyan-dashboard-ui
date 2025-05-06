import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TvShow } from '../model/TvShow.model';
import { TvShowDetailComponent } from '../tv-show-detail/tv-show-detail.component';
import { TvShowService } from '../service/tv-show.service';
import { Router } from '@angular/router';
import { map } from 'rxjs';
@Component({
  selector: 'app-tv-show-list',
  templateUrl: './tv-show-list.component.html',
  styleUrl: './tv-show-list.component.css'
})
export class TvShowListComponent {
  shows: any[] = [];
  // [
  //   {
  //       title: 'The Shawshank Redemption',
  //       poster: 'https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg',
  //       year: 1994,
  //       director: 'Frank Darabont',
  //       description:
  //           'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
  //   },
  //   {
  //       title: 'The Godfather',
  //       poster: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  //       year: 1972,
  //       director: 'Francis Ford Coppola',
  //       description:
  //           'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
  //   },
  //   {
  //       title: 'The Dark Knight',
  //       poster: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',
  //       year: 2008,
  //       director: 'Christopher Nolan',
  //       description:
  //           'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
  //   },
  //   {
  //       title: 'Pulp Fiction',
  //       poster: 'https://m.media-amazon.com/images/M/MV5BZmJmOWY0MjMtZDMyMy00NmZkLWI3ZjMtZTc0ZTQ0YTM0ZGJkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  //       year: 1994,
  //       director: 'Quentin Tarantino',
  //       description:
  //           'The lives of several individuals in Los Angeles intertwine in a tale of violence and redemption.',
  //   },
  //   {
  //       title: "Schindler's List",
  //       poster:
  //           'https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmY3M2MtOTFlNC1kNjYyZDE5NDVmNmNhXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg',
  //       year: 1993,
  //       director: 'Steven Spielberg',
  //       description:
  //           "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
  //   },
  // ];
  filteredShows: [] = []; // Array to hold filtered shows
  searchTerm: string = '';

  constructor(public dialog: MatDialog, private tvShowService: TvShowService, private router: Router) {}

  ngOnInit(): void {
    this.tvShowService.getAllShows().subscribe((data:any[]) => {
      // const details = JSON.parse(data.showDetails);
      console.log(data);
      this.shows = data
      // this
    });
  }

  goToShow(show: any): void {
    this.router.navigate(['show', show.id]);
  }

  applyFilter(event: Event): void {
    // this.searchTerm = (event.target as HTMLInputElement).value.toLowerCase();
    // this.filteredShows = this.shows.filter((show) =>
    //     show.title.toLowerCase().includes(this.searchTerm)
    // );
  }
}
