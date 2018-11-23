import { Component } from '@angular/core';

@Component({
  'selector': 'app-server',
  'templateUrl': './server.component.html'
})
export class ServerComponent {

  serverID = 4200;
  serverStatus = 'Offline';

  getServerStatus() {
    return this.serverStatus
  }



}
