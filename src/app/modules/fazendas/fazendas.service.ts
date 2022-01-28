import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FazendasService {
  private storage: Storage;
  constructor(private http: HttpClient) {
    this.storage = window.localStorage;
  }

  getFarms(): Observable<any> {
    return this.http.get<any>('assets/fazendas.json');
  }

  set(key: string, value: string) {
    this.storage.setItem(key, value);
  }

  get(key: string): any {
    if (this.storage) {
      return JSON.parse(this.storage.getItem(key));
    }
    return null;
  }

  remove(key: string): boolean {
    if (this.storage) {
      this.storage.removeItem(key);
      return true;
    }
    return false;
  }
}
