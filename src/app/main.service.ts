import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class MainService {
    constructor(private _http:HttpClient, ) { }
    getData() { 
     return this._http.get(environment.basePath+"exchanges")
    }
    searchData(value:string) { 
        return this._http.get(environment.basePath+`exchanges?search=${value}`)
       }
}