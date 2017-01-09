import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../../services/catalog.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

	categories;
	errorMessage: string;

  constructor(private catalogService: CatalogService) { }

  ngOnInit() {
		this.getCategories();
  }
	getCategories() {
  	this.catalogService.categories()
									     .subscribe(
													categories => this.categories = categories,
													error =>  this.errorMessage = <any>error);
	}
}
