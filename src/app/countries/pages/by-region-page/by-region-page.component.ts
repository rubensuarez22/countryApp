import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/contry';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent implements OnInit{
  public countries: Country[] = [];
  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
  public selectedRegion?:Region;
  public initialValue:string = '';

  constructor(private countriesService:CountriesService) {}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byRegion.countries;
    this.selectedRegion = this.countriesService.cacheStore.byRegion.region;
  }

  searchByRegion(region: Region):void {

    this.selectedRegion = region;
    // Es obligatorio suscribirse, sino no funcionara. subscribe()
    this.countriesService.searchRegion(region)
    .subscribe(countries => {
      this.countries = countries;
    });

    console.log('Desde ByRegionPage');
    console.log({region})
  }
}
