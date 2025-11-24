import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ServersService } from '../servers.service';

interface Server {
  id: number;
  name: string;
  status: string;
}

@Injectable({
  providedIn: 'root',
})
export class ServerResolver implements Resolve<Server> {
  constructor(private serverService: ServersService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Server | Observable<Server> | Promise<Server> {
    console.log('Resolver route parameteer --- ', route);
    return this.serverService.getServer(+route.params['id']);
  }
}
