export class ShoppingCart {
  private readonly products: Product[] = [];

  addProducts(...products: Product[]): void {
    // Adiciona 1 ou + produtos
    for (const product of products) {
      this.products.push(product);
    }
  }

  qtyProducts(): number {
    return this.products.length;
  }

  totalValue(): number {
    return this.products.reduce((sum, product) => sum + product.prodPrice, 0);
  }
}

export class Product {
  constructor(public _prodName: string, public prodPrice: number) {}

  get prodNome(): string {
    return this._prodName;
  }
}

const prod1 = new Product('Camisa', 24.9);
const prod2 = new Product('Camisa', 24.9);
const prod3 = new Product('Camisa', 24.9);

const shoppingCart = new ShoppingCart();

shoppingCart.addProducts(prod1, prod2, prod3);
console.log(shoppingCart.totalValue().toFixed(1));
console.log(shoppingCart.qtyProducts());
