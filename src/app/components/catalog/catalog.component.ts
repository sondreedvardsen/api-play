import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../../services/catalog.service';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

	categories;
	cat;
	errorMessage: string;

  constructor(
		private catalogService: CatalogService,
		public snackBar: MdSnackBar
	) { }

  ngOnInit() {
		this.getCategories();
  }

	getCategories() {
  	this.catalogService.getCategories()
			.subscribe(
				categories => {
					this.categories = categories;
					this.buildCategories();
				},
				error => {
					this.errorMessage = <any>error;
					this.snackBar.open(this.errorMessage, '',
						{
							duration: 5000
						}
					)
				}
			);
	}

	buildCategories() {
		for(let category of this.categories) {
			let parentId = category.attributes.parent_id;
			if(parentId != 0) {
				let parent = this.categories.findIndex(x => x.id == parentId);
				this.categories[parent].attributes.children.push(category.id);
			}
		}
		this.cat = this.categories;
	}
}
