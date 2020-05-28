import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { Btn } from 'src/app/shared/interfaces/btn';
import { Client } from 'src/app/shared/models/client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss']
})
export class PageListClientsComponent implements OnInit {

  public title: string;
  public subtitle: string;
  public collection$: Observable<Client[]>;
  public headers: string[];
  public btnRoute: Btn;
  public btnHref: Btn;
  public btnAction: Btn;
  public states = Object.values(StateClient);
  constructor(private cs: ClientsService) { }

  ngOnInit(): void {
    this.title = 'Clients';
    this.subtitle = 'All clients';
    this.btnRoute = {
      label: 'Add a client',
      route: 'add'
    };
    this.btnHref = {
      label: 'Go to Google',
      href: 'http://www.google.fr'
    };
    this.btnAction = {
      label: 'Open dialogue',
      action: true
    };
    this.collection$ = this.cs.collection;

    this.headers = [
      'Nom',
      'CA HT',
      'CA TTC',
      'Commentaire',
      'State'
    ];
  }

  public changeState(item: Client, event) {
    this.cs.changeState(item, event.target.value).subscribe((res) => {
      // traiter la res de l'api, codes erreur etc...
      item.state = res.state;
    });
  }
  public openPopUp() {
    console.log('open popup');
  }

}
