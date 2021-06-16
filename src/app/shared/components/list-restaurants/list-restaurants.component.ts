import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '@core/services/restaurant.service';

@Component({
  selector: 'app-list-restaurants',
  templateUrl: './list-restaurants.component.html',
  styleUrls: ['./list-restaurants.component.scss'],
})
export class ListRestaurantsComponent implements OnInit {
  list_restaurants: any = [];
  loading: boolean = true;


  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.getRestaurants();
  }

  getRestaurants() {
    this.restaurantService.getRestaurants().subscribe((rp) => {
      this.list_restaurants = rp["results"]["records"]
      this.loading = false
    });
  }
}
