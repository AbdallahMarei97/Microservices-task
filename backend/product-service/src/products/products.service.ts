import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.model';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  createProduct(product: Product) {
    const newProduct = { ...product, id: Date.now().toString() };
    this.products.push(newProduct);
    return newProduct;
  }

  getAllProducts() {
    return this.products;
  }

  getProductById(id: string) {
    const product = this.products.find((p) => p.id === id);
    if (!product) throw new NotFoundException('Product not found');
    return product;
  }

  updateProduct(id: string, updatedProduct: Partial<Product>) {
    const index = this.products.findIndex((p) => p.id === id);
    if (index === -1) throw new NotFoundException('Product not found');

    // Do not overwrite the existing id
    const updatedEntity = { ...this.products[index], ...updatedProduct };
    this.products[index] = updatedEntity;
    return updatedEntity;
  }

  deleteProduct(id: string) {
    const index = this.products.findIndex((p) => p.id === id);
    if (index === -1) throw new NotFoundException('Product not found');
    const [deletedProduct] = this.products.splice(index, 1);
    return deletedProduct;
  }
}
