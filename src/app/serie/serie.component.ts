import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { dataSeries } from './dataSeries';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css'],
  imports: [NgFor,NgIf]
})
export class SerieComponent implements OnInit {

  series: Array<Serie> = [];
  promedio: number = 0;
  selectedSerie: Serie | null = null;


  constructor(private serieService: SerieService) { }

  getSeriesList(): Array<Serie> {
    return dataSeries;
  }

  selectSerie(serie: Serie): void {
    this.selectedSerie = serie;
  }

  calcularPromedio() {
    for(let i = 0; i < this.series.length; i++) {
      this.promedio += this.series[i].seasons;
    }
    this.promedio = this.promedio / this.series.length;
    console.log(this.promedio);
  }

  ngOnInit() {
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
      this.calcularPromedio()
    });
    
  }

}
