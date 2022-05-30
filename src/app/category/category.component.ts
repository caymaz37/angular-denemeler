import { Component, OnInit } from '@angular/core';

interface Kategori {
  categoryName: string;
}

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  constructor() {}
  categories: Kategori[] = [
    { categoryName: 'Ana Sayfa' },
    { categoryName: 'Hakkımızda' },
    { categoryName: 'Ürünlerimiz' },
    { categoryName: 'Referanslar' },
    { categoryName: 'İletişim' },
  ];

  ngOnInit() {}
}
