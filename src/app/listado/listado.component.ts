import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  public currentRoute!: string;

  constructor( private activatedRotue: ActivatedRoute){ }

  ngOnInit(): void {
    this.currentRoute = this.activatedRotue.snapshot?.data['uid'];
  }

}
