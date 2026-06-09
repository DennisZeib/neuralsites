
import type { MenuItem } from '../types';

export const menuItems: MenuItem[] = [
  // Starters
  {
    id: 1,
    name: 'Bruschetta al Pomodoro',
    description: 'Toasted sourdough topped with vine-ripened tomatoes, fresh basil, garlic, and a drizzle of extra-virgin olive oil.',
    price: 9.5,
    category: 'Starters',
    image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=600&auto=format&fit=crop&q=80',
    badge: 'Popular',
  },
  {
    id: 2,
    name: 'Burrata e Prosciutto',
    description: 'Creamy burrata served with aged Parma ham, cherry tomatoes, rocket, and aged balsamic glaze.',
    price: 14,
    category: 'Starters',
    image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    name: 'Zuppa di Funghi',
    description: 'Wild mushroom soup with truffle oil, crème fraîche, and toasted ciabatta.',
    price: 11,
    category: 'Starters',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 4,
    name: 'Calamari Fritti',
    description: 'Lightly battered calamari rings, fried golden and served with lemon aioli and marinara sauce.',
    price: 13,
    category: 'Starters',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&auto=format&fit=crop&q=80',
    badge: 'Chef\'s Pick',
  },

  // Mains
  {
    id: 5,
    name: 'Tagliatelle al Ragù',
    description: 'Hand-rolled egg tagliatelle with slow-braised Bolognese ragù, Parmigiano-Reggiano, and fresh herbs.',
    price: 22,
    category: 'Mains',
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&auto=format&fit=crop&q=80',
    badge: 'Signature',
  },
  {
    id: 6,
    name: 'Risotto ai Frutti di Mare',
    description: 'Arborio risotto with king prawns, scallops, mussels, white wine, and saffron butter.',
    price: 28,
    category: 'Mains',
    image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 7,
    name: 'Bistecca alla Fiorentina',
    description: '400g Florentine T-bone steak, grilled over charcoal, with rosemary roasted potatoes and seasonal greens.',
    price: 42,
    category: 'Mains',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80',
    badge: 'Chef\'s Pick',
  },
  {
    id: 8,
    name: 'Pappardelle al Tartufo',
    description: 'Wide ribbon pasta with black truffle cream, wild mushrooms, and aged Pecorino.',
    price: 26,
    category: 'Mains',
    image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 9,
    name: 'Branzino al Forno',
    description: 'Whole sea bass baked with lemon, capers, olives, and cherry tomatoes. Served with sautéed spinach.',
    price: 32,
    category: 'Mains',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&auto=format&fit=crop&q=80',
  },

  // Desserts
  {
    id: 10,
    name: 'Tiramisù della Casa',
    description: 'Our classic house tiramisù — espresso-soaked ladyfingers, mascarpone cream, and a dusting of cocoa.',
    price: 9,
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&auto=format&fit=crop&q=80',
    badge: 'Signature',
  },
  {
    id: 11,
    name: 'Panna Cotta ai Frutti Rossi',
    description: 'Silky vanilla panna cotta with a mixed berry compote and fresh mint.',
    price: 8,
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 12,
    name: 'Cannolo Siciliano',
    description: 'Crispy pastry shell filled with sweet ricotta, candied orange peel, and dark chocolate chips.',
    price: 8.5,
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&auto=format&fit=crop&q=80',
  },

  // Drinks
  {
    id: 13,
    name: 'Aperol Spritz',
    description: 'Aperol, Prosecco, and a splash of soda water. Garnished with a fresh orange slice.',
    price: 11,
    category: 'Drinks',
    image: 'https://images.unsplash.com/photo-1560508180-03f285f67ded?w=600&auto=format&fit=crop&q=80',
    badge: 'Popular',
  },
  {
    id: 14,
    name: 'Negroni',
    description: 'Gin, Campari, and sweet vermouth stirred over ice with an orange peel twist.',
    price: 13,
    category: 'Drinks',
    image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 15,
    name: 'San Pellegrino Limonata',
    description: 'Sparkling Italian lemonade — light, refreshing, and perfectly tart.',
    price: 5,
    category: 'Drinks',
    image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 16,
    name: 'Barolo DOCG 2019',
    description: 'Glass of full-bodied Barolo from Piedmont — dark fruit, leather, and a long finish.',
    price: 18,
    category: 'Drinks',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&auto=format&fit=crop&q=80',
    badge: 'Sommelier\'s Choice',
  },
];
  