import { Component } from '@angular/core';
import { cardData } from 'src/app/data/CardData';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  shopData = cardData
}
