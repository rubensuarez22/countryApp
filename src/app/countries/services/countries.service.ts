
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { Country } from '../interfaces/contry';

@Injectable({providedIn: 'root'})

export class CountriesService {

  private apiUrl:string = 'https://restcountries.com/v3.1'
  constructor(private http: HttpClient) { }

  searchCountryByAlphaCode(code:string):Observable <Country| null>{

    const url = `${ this.apiUrl }/alpha/${code}`

    return this.http.get<Country[]>(url)
    .pipe(
      map(countries => countries.length > 0 ? countries [0]: null),
      catchError( error =>   of(null)) //Nos sirve para que cuando escriba algo sin sentido, se borre la busqueda anterior.
    );
  }

  searchCapital( term:string ):Observable <Country[]>{
    const url = `${ this.apiUrl }/capital/${term}`
    return this.http.get<Country[]>( url )//OBSERVABLE
    .pipe(
      catchError( error =>   of([])) //Nos sirve para que cuando escriba algo sin sentido, se borre la busqueda anterior.
    );
    //El pipe sirve para especificar diferentes observadors de rxjs.
  }


  searchCountry(term:string):Observable <Country[]>{
    const url = `${ this.apiUrl }/name/${term}`
    return this.http.get<Country[]>(url)
    .pipe(
      catchError( error =>   of([])) //Nos sirve para que cuando escriba algo sin sentido, se borre la busqueda anterior.
    );
  }
  searchRegion(region:string):Observable <Country[]>{
    const url = `${ this.apiUrl }/region/${region}`
    return this.http.get<Country[]>(url)
    .pipe(
      catchError( error =>   of([])) //Nos sirve para que cuando escriba algo sin sentido, se borre la busqueda anterior.
    );
  }
}
