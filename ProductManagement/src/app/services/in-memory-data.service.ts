import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ProductInterface } from '../interface/ProductInterface';

export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const products: ProductInterface[] = [
      {
        id: 1,
        name: 'Nintendo Entertainment System (NES)',
        price: 89.99,
        image: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/NES-Console-Set.png',
        condition: 'Used'
      },
      {
        id: 2,
        name: 'Super Nintendo (SNES)',
        price: 120,
        image: 'https://upload.wikimedia.org/wikipedia/commons/3/31/SNES-Mod1-Console-Set.jpg',
        condition: 'Refurbished'
      },
      {
        id: 3,
        name: 'Sega Genesis',
        price: 95,
        image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Sega-Genesis-Mk2-6button.jpg',
        condition: 'Used'
      },
      {
        id: 4,
        name: 'PlayStation 1',
        price: 110,
        image: 'https://upload.wikimedia.org/wikipedia/commons/9/95/PSX-Console-wController.jpg',
        condition: 'Used'
      },
      {
        id: 5,
        name: 'Nintendo 64',
        price: 140,
        image: 'https://upload.wikimedia.org/wikipedia/commons/8/82/N64-Console-Set.jpg',
        condition: 'Refurbished'
      },
      {
        id: 6,
        name: 'Game Boy Color',
        price: 75,
        image: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Game-Boy-Color-FL.png',
        condition: 'Used'
      }
    ];

    return { products };
  }

  genId(products: ProductInterface[]): number {
    return products.length > 0
      ? Math.max(...products.map(p => p.id)) + 1
      : 1;
  }
}