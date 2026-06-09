
import { useState } from 'react';
import type { Category } from '../types';
import { menuItems } from '../data/menuData';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionHeading from '../components/SectionHeading';
import MenuCard from '../components/MenuCard';

const categories: Category[] = ['Starters', 'Mains', 'Desserts', 'Drinks'];

const categoryDescriptions: Record<Category, string> = {
  Starters: 'Light, flavourful bites to begin your journey.',
  Mains: 'Hearty, soul-warming dishes at the heart of Italian tradition.',
  Desserts: 'Sweet endings crafted with love and the finest ingredients.',
  Drinks: 'Italian wines, classic cocktails, and refreshing non-alcoholic options.',
};

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('Starters');

  const filtered = menuItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />

      {/* Page hero */}
      <section
        className="relative flex items-end overflow-hidden pb-16 pt-40"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600&auto=format&fit=crop&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/60 to-stone-950/90" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-12">
          <SectionHeading
            eyebrow="La Bella Cucina"
            title="Our Menu"
            subtitle="Seasonal ingredients, traditional techniques, and a whole lot of love."
            light
          />
        </div>
      </section>

      {/* Category tabs */}
      <div className="sticky top-[72px] z-40 border-b border-stone-200 bg-white/95 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex gap-1 overflow-x-auto py-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 rounded-lg px-5 py-2.5 text-sm font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-amber-500 text-white shadow'
                    : 'text-stone-600 hover:bg-stone-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu grid */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-10">
            <h2 className="text-2xl font-black text-stone-900">{activeCategory}</h2>
            <p className="mt-1 text-stone-500">{categoryDescriptions[activeCategory]}</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="py-20 text-center text-stone-400">No items in this category yet.</p>
          )}
        </div>
      </section>

      {/* Allergen note */}
      <div className="border-t border-stone-200 bg-amber-50 py-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <p className="text-xs leading-6 text-stone-500">
            <strong className="text-stone-700">Allergen information:</strong> Our dishes may contain
            nuts, gluten, dairy, eggs, shellfish, and other allergens. Please inform your server of
            any dietary requirements before ordering. All prices include VAT.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
  