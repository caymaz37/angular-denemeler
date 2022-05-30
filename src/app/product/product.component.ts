import { Component, OnInit } from '@angular/core';

interface List {
  productName: string;
  productText: string;
  imgUrl: string;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  constructor() {}
  lists: List[] = [
    {
      productName: 'Elma',
      productText:
        'Türkiyenin neresinde olursanız olun, eğer mevsimiyse, mutlaka Misket elması "Amasya Elması" olarak karşınıza çıkar. Kışın yenilen önemli bir çeşittir. Meyvesi orta irilikte, sap tarafı biraz genişçedir.',
      imgUrl:
        'https://reimg-carrefour.mncdn.com/mnresize/600/600/productimage/30056606/30056606_0_MC/8796653944882_1530714400351.jpg',
    },
    {
      productName: 'Armut',
      productText:
        'Armut dünya çapında üretilen ve tüketilen, ağaçta yetişen ve yazın sonundan ekim ayına kadar hasat edilen meyvedir.Bazı armut türleri, yenilebilir meyveleri ve meyve suları için değerlenirken, diğerleri ağaç olarak yetiştirilmektedir.',
      imgUrl: 'https://images.marul.com/thumbs/009/0097170_armut_320.jpeg',
    },
    {
      productName: 'Çilek',
      productText:
        'Tohumları meyvenin üzerinde (dışarıda) bulunan birkaç meyveden biridir. Bu yönüyle, çilek bir istisnadır, çünkü çoğu meyvenin tohumları meyvenin içinde bulunur.',
      imgUrl:
        'https://www.mevsimgida.com.tr/Uploads/UrunResimleri/buyuk/cilek-bursa-9b9f.jpg',
    },
    {
      productName: 'Karpuz',
      productText:
        'Bitkinin kolları toprak yüzeyinde 100 – 200 m kadar uzayabilir. Normal şartlar altında ağırlığı 1,5-2 kilo ile 6,5-7 kilo arasında değişir. Susuz tarım şartlarında kökler oldukça derine inse de sulu tarım şartlarında saçak kökler daha çok 40–50 cm derinlikte yoğunlaşır.',
      imgUrl:
        'https://reimg-carrefour.mncdn.com/mnresize/600/600/productimage/30049276/30049276_0_MC/8796603285554_1528879528256.jpg',
    },
  ];

  ngOnInit() {}
}
