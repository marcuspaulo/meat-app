import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/observable';
import { RestaurantsService } from './../../restaurants/restaurants.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  constructor(private restaurantsService: RestaurantsService,
              private route: ActivatedRoute) { }

  reviews: Observable<any>

  ngOnInit() {
    this.reviews = this.restaurantsService.reviewsOfRestaurant(this.route.parent.snapshot.params['id'])
  }

}
