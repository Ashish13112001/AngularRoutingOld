import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    // snapshot use when component is loaded
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name'],
    };

    /*
    we need to use this when we are in the same component and want to access the params value dynamically without reloading the whole component
    */
    this.route.params.subscribe((params: Params) => {
      this.user = {
        id: params['id'],
        name: params['name'],
      };
    });
    console.log(this.user);
  }

}
