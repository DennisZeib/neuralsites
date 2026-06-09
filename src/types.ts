
export type Category = 'Starters' | 'Mains' | 'Desserts' | 'Drinks';

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: Category;
  image: string;
  badge?: string;
}
  