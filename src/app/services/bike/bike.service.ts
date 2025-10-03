import { Injectable, signal } from '@angular/core';
import type { Bike } from '../../models/product.models';

@Injectable({
  providedIn: 'root',
})
export class BikeService {
  bikes = signal<Bike[]>([
    {
      id: 1,
      name: 'Ninja ZX-6R',
      brand: 'Kawasaki',
      price: 52000,
      image:
        'https://storage.kawasaki.eu/public/kawasaki.eu/en-EU/model/24MY_Ninja_ZX-6R_GY1_STU__1_.png',
      stock: 5,
    },
    {
      id: 2,
      name: 'CB 650R',
      brand: 'Honda',
      price: 47000,
      image:
        'https://production.autoforce.com/uploads/version/profile_image/7517/model_main_webp_comprar-vermelho_7b37d19739.png.webp',
      stock: 3,
    },
    {
      id: 3,
      name: 'MT-09',
      brand: 'Yamaha',
      price: 49000,
      image:
        'https://mobilidade.estadao.com.br/wp-content/uploads/2020/10/Yamaha_MT09_2021.jpg',
      stock: 0,
    },
    {
      id: 4,
      name: 'Street Triple RS',
      brand: 'Triumph',
      price: 56000,
      image:
        'https://media.triumphmotorcycles.co.uk/image/upload/f_auto/q_auto:eco/sitecoremedialibrary/media-library/images/motorcycles/roadsters-supersports/my25/my25%20colours/step%20carousel_features/hj8/cornering-abs-step-carousel-street-triple-rs_my25_l.jpg',
      stock: 2,
    },
    {
      id: 5,
      name: 'Panigale V2',
      brand: 'Ducati',
      price: 87000,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF4dGwPGVMvMMGNCxAgyKTMBQeZrOjL5A18Q&s',
    },
    {
      id: 6,
      name: 'GSX-R750',
      brand: 'Suzuki',
      price: 51000,
      image:
        'https://quatrorodas.abril.com.br/wp-content/uploads/2016/11/130411-gsxr750-04.jpeg?quality=70&strip=info&w=928&w=636',
      stock: 1,
    },
  ]);

  bikeById(id: number) {
    return this.bikes().find((bike) => bike.id === id);
  }

  bikeInStock(id: number): boolean {
    const bike = this.bikeById(id);
    return !!bike?.stock;
  }

  reduceStock(id: number) {
    this.bikes.update((bikes) =>
      bikes.map((bike) => {
        if (bike.id === id && bike.stock && bike.stock > 0) {
          return { ...bike, stock: bike.stock - 1 };
        }
        return bike;
      })
    );
  }

  increaseStock(id: number) {
    this.bikes.update((bikes) =>
      bikes.map((bike) => {
        if (bike.id === id) {
          return { ...bike, stock: (bike.stock ?? 0) + 1 };
        }
        return bike;
      })
    );
  }

  constructor() {}
}
