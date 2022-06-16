import { StorageService } from './../../services/storage.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements OnInit {
  constructor(private route: Router, private storage: StorageService) {}

  ngOnInit(): void {}

  doLogOut() {
    //Gestionar el borrado de token

    this.storage.removeToken();
    this.route.navigate(['/login']);
  }
}
