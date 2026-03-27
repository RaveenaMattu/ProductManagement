import { Injectable , signal, inject} from '@angular/core';
import { ProductInterface } from '../interface/ProductInterface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products = signal<ProductInterface[]>([]);
  loading = signal(false);
  private httpClient = inject(HttpClient);
  private api = 'api/products';

  getAll() {
    return this.httpClient.get<ProductInterface[]>('/api/products');
  }
}
