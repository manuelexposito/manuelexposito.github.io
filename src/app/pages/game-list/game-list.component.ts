import { GamesService } from './../../services/games.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Game } from './../../models/movie_dto';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css'],
})
export class GameListComponent implements OnInit {
  games: Game[] = [];

  displayedColumns: string[] = ['name', 'description', 'available', 'actions'];
  dataSource = new MatTableDataSource<Game>(this.games);

  page: number = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private router: Router, private gameService: GamesService) {}

  ngOnInit(): void {
    this.fetchGames(this.page);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  fetchGames(page: number) {
    return this.gameService.fetchGames(page).subscribe((e) => {
      console.log(e.content);
      this.games = e.content;
      this.dataSource = new MatTableDataSource<Game>(this.games);
    });
  }
}
