import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/contry';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: []
})
export class ByCountryPageComponent implements OnInit{

  public countries: Country[] = [];
  public initialValue:string =''

  constructor(private countriesService:CountriesService){} //Constructor.

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCountries.countries;
    this.initialValue = this.countriesService.cacheStore.byCountries.term;
  }
  SearchByCountry(term:string):void{
    this.countriesService.searchCountry(term)
    .subscribe(countries => {
      this.countries = countries
      console.log('Desde Bycountry');
    console.log({term})
    });
  }
}
