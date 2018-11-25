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
  serverName = 'Ditto';
  inputServerName = 'Gee';
  serverCreated = false;


  constructor() {

    setTimeout(() => {
      this.allowNewServer = true;

    }, 3000);
  }

  ngOnInit() {
  }


  onCreateServer() {
    if (this.serverName.length === 0) {
      this.serverCreationStatus = 'The server does not have a name. Please try again.';
    } else {
      this.serverCreated = true;
      this.serverCreationStatus = 'The server \"' + this.inputServerName + '\" has been created.';
    }

  }

  onUpdateServerName(event: Event) {
    this.inputServerName = (<HTMLInputElement>event.target).value;
    this.serverName = ((<HTMLInputElement>event.target).value.length === 0) ? '' : 'New server name: ' + this.inputServerName;

  }
}
