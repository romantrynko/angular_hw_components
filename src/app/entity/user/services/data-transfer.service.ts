import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  xxx: BehaviorSubject<any> = new BehaviorSubject<any>('start value');

  constructor() { }
}
