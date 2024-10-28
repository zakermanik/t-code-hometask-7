export interface Category {
    id: number;
    name: string;
  }
  
  export interface Product {
    id: number;
    name: string;
    price: number;
    category: number;
  }
  
  export interface Purchase {
    id: number
    product: Product;
    count: number;
  }