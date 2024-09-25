import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/contry';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: []
})
export class ByCountryPageComponent {

  public countries: Country[] = [];

  constructor(private countriesService:CountriesService){} //Constructor.
  SearchByCountry(term:string):void{
    this.countriesService.searchCountry(term)
    .subscribe(countries => {
      this.countries = countries
      console.log('Desde Bycountry');
    console.log({term})
    });
  }
}
