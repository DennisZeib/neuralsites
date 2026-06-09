
import type { MenuItem } from '../types';

interface MenuCardProps {
  item: MenuItem;
}

export default function MenuCard({ item }: MenuCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-stone-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-52 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {item.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-amber-500 px-3 py-1 text-xs font-bold text-white shadow">
            {item.badge}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base font-bold leading-snug text-stone-900">{item.name}</h3>
          <span className="shrink-0 rounded-lg bg-amber-50 px-3 py-1 text-sm font-black text-amber-700">
            £{item.price.toFixed(2)}
          </span>
        </div>
        <p className="mt-2 flex-1 text-sm leading-6 text-stone-500">{item.description}</p>
      </div>
    </article>
  );
}
  