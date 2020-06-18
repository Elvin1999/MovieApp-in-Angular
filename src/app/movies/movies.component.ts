import { MovieService } from './../movie.service';
import { Movie } from './../movie';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-movies',
  templateUrl: 'movies.component.html',
  styleUrls: ['movies.component.css'],
})
export class MoviesComponent {
  movie: Movie;
  title = 'Movie List';
  movies: Movie[];
  selectedMovie: Movie;
  movieService: MovieService;
  constructor(
    private service: MovieService,
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.movieService = service;
  }
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void {
    this.movieService.getMovies().subscribe((movies) => {
      this.movies = movies;
    });
  }
  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
  }
  add(name: string, imageUrl: string, description: string): void {
    this.movieService
      .add({
        name,
        imageUrl,
        description,
      } as Movie)
      .subscribe((movie) => this.movies.push(movie));
  }
  getMovie(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.movieService.getMovie(id).subscribe((movie) => (this.movie = movie));
  }
  delete(movie: Movie): void {
    this.movies = this.movies.filter((m) => m !== movie);
    this.movieService.delete(movie).subscribe();
  }
  // getEquality(movie): string {
  //   if (movie === this.selectedMovie) {
  //     return 'active';
  //   }
  //   return '';
  // }
}
