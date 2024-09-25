import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/contry';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: []
})
export class ByCapitalPageComponent {

  public countries: Country[] = [];

  constructor(private countriesService:CountriesService) {}

  searchByCapital(term: string):void {
    // Es obligatorio suscribirse, sino no funcionara. subscribe()
    this.countriesService.searchCapital(term)
    .subscribe(countries => {
      this.countries = countries;
    });

    console.log('Desde BycapitalPage');
    console.log({term})
  }

}
