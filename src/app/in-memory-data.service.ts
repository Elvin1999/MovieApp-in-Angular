import { Movie } from './movie';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const movies = [
      new Movie(1, 'Interstellar', 'Movie Description', '1.jpeg'),
      new Movie(2, 'Intern', 'Movie Description', '2.jpg'),
      new Movie(3, 'The Edge Of Tomorrow', 'Movie Description', '3.jpg'),
      new Movie(4, 'The Martian', 'Movie Description', '4.jpg'),
      new Movie(5, 'The Scuide Squad', 'Movie Description', '5.jpg'),
      new Movie(6, 'Inception', 'Movie Description', '6.jpg'),
    ];
    return { movies };
  }
  constructor() {}
}
