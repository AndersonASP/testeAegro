import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FazendasService} from "../fazendas.service";
import {Fazendas, Talhoes} from "../../shared/models/fazendas";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Utils} from "../../shared/utils";

@Component({
  selector: 'app-talhoes',
  templateUrl: './talhoes.component.html',
  styleUrls: ['./talhoes.component.css']
})
export class TalhoesComponent extends Utils implements OnInit {
  public idFarm: any;
  public plots: Talhoes;
  form: FormGroup;

  constructor(private route: ActivatedRoute, private farmsService: FazendasService) {
    super()
  }

  ngOnInit(): void {
    this.form = this.createForm();
    this.route.params.subscribe(parametros => {
      if (parametros['idFarm']) {
        this.idFarm = parametros['idFarm'];
      }
    });
    this.getFarmById();

  }

  getFarmById() {
    this.plots = this.farmsService.get(this.idFarm);
  }

  save() {
    this.plots[0].plots = [...this.plots[0].plots, ...[this.generatePlots()]];
    this.farmsService.remove(this.idFarm);
    this.farmsService.set(this.idFarm, JSON.stringify(this.plots))
    this.updatePlots();
  }

  generatePlots(): Talhoes {
    return {
      idPlots: this.randomInteger(0, 60),
      namePlots: this.form.get('namePlots')?.value,
      image: `talhao${this.randomInteger(1, 5)}.jpg`,
      tillage: "milho",
      productivityRegisters: [{
        varieties: '',
        area: this.form.get('areaPlots')?.value,
        productivity: this.form.get('areaPlots')?.value,
      }]
    }
  }

  createForm(): FormGroup {
    return new FormGroup({
      namePlots: new FormControl('', Validators.required),
      areaPlots: new FormControl(null, [Validators.required]),
      varieties: new FormControl('', [Validators.required]),
      productivity: new FormControl(null, [Validators.required])
    });
  }

  removePlots(plots: any) {
    const index = this.plots[0].plots.indexOf(plots);
    if (index > -1) {
      this.plots[0].plots.splice(index, 1);
    }
    this.updatePlots();
  }

  updatePlots() {
    this.farmsService.remove(this.idFarm);
    this.farmsService.set(this.idFarm, JSON.stringify(this.plots));
  }

  addProductivityRegisters(index) {
    this.plots[0].plots[index].productivityRegisters.push(this.generateProductivityRegisters());
    this.farmsService.remove(this.idFarm);
    this.farmsService.set(this.idFarm, JSON.stringify(this.plots))
    this.updatePlots();
  }

  generateProductivityRegisters() {
    return {
      varieties: '',
      area: this.form.get('areaPlots')?.value,
      productivity: this.form.get('productivity')?.value,
    }
  }
}
