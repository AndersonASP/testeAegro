import { Component, OnInit } from '@angular/core';
import {FazendasService} from "../fazendas.service";
import {Fazendas} from "../../shared/models/fazendas";
import {Utils} from "../../shared/utils";

@Component({
  selector: 'app-fazenda',
  templateUrl: './fazenda.component.html',
  styleUrls: ['./fazenda.component.css']
})
export class FazendaComponent extends Utils implements OnInit {
  farms: Fazendas[] = [];

  responsiveOptions;

  constructor(private farmsService: FazendasService) {
    super();
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnInit() {
    this.getFarms();
  }

  getFarms() {
    this.farmsService.getFarms().subscribe(farms => {
      this.farms = farms.data;
      this.setFarmsLocalStorage()
    });
  }

  setFarmsLocalStorage(): void {
    this.farms.forEach((e: Fazendas) => {
      e.image = `fazenda${this.randomInteger(1,6)}.jpg`;
      this.farmsService.set(e.id, JSON.stringify([e]))
    });

  }
}
