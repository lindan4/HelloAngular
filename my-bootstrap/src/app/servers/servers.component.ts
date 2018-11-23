import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;

  serverCreationStatus  = 'No server has been created. To add a new server, input its name above and press \"Add Server\"';
  serverName = '';


  constructor() {

    setTimeout(() => {
      this.allowNewServer = true;

    }, 3000);
  }

  ngOnInit() {
  }


  onCreateServer() {
    if (this.serverCreationStatus.length === 0) {
      this.serverCreationStatus = 'The server does not have a name. Please try again.';
    } else {
      this.serverCreationStatus = 'The server' + this.serverName + 'was created';
    }

  }

  onUpdateServerName(event: Event) {

    this.serverName = ((<HTMLInputElement>event.target).value.length === 0) ? '' : 'New server name: ' + (<HTMLInputElement>event.target).value;

  }
}
