import { Component, OnInit } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';



export const maCol = [
  {title: 'un titre', subtitle: 'un sous-titre', comment: 'un commentaire'},
  {title: 'un autre titre', subtitle: 'un autre sous-titre', comment: 'un autre commentaire'},
  {title: 'encore un autre titre', subtitle: 'encore un autre sous-titre', comment: 'encore un autre commentaire'}
];


@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent implements OnInit {

  public collection: any;

  public obs = new Observable((subscribers) => {
    subscribers.next(maCol);
  });

  public obsR = new Observable((subscribers) => {
    subscribers.next(Math.random());
  });

  public monSubject = new Subject();
  public monSubject2 = new Subject();

  public monBSubject = new BehaviorSubject("default");
  public monBSubject2 = new BehaviorSubject(Math.random());

  constructor() { }

  ngOnInit(): void {
    // Observable
    this.obs.subscribe((col) => {
      console.log(col);
      this.collection = col;
    });
    this.obsR.subscribe((col) => {
      console.log(col);
    });
    this.obsR.subscribe((col) => {
      console.log(col);
    });

    // Subject
    this.monSubject.subscribe((res) =>{
      console.log('flux Subject : ' + res)
    });

    this.monSubject.next(2);
    this.monSubject.next(3);

    // Subject
    this.monSubject2.subscribe((res) =>{
      console.log('flux Subject2 1ere : ' + res)
    });
    this.monSubject2.subscribe((res) =>{
      console.log('flux Subject2 2nd : ' + res)
    });

    this.monSubject2.next(Math.random());

    // BehaviorSubject
    this.monBSubject.next("Init juste avant le subscribe");

    this.monBSubject.subscribe((res) => {
      console.log(res);
    });

    this.monBSubject.next("next post-subscribe");

    this.monBSubject2.subscribe((res) => {
      console.log(res);
    });

    this.monBSubject2.subscribe((res) => {
      console.log(res);
    });

    console.log(`dernier flux stocké : ${this.monBSubject2.value}`);

  }

}
