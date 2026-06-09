
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ChefHat, Leaf, Award } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionHeading from '../components/SectionHeading';
import MenuCard from '../components/MenuCard';
import { menuItems } from '../data/menuData';

const featured = menuItems.filter((item) => [1, 5, 7, 10].includes(item.id));

const testimonials = [
  {
    id: 1,
    name: 'Sophie M.',
    text: 'Absolutely stunning food. The tagliatelle ragù transported me straight to Bologna. We\'ll be back every month.',
    rating: 5,
  },
  {
    id: 2,
    name: 'James R.',
    text: 'The best Italian outside of Italy. The burrata was divine and the service was impeccable. Highly recommended.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Elena K.',
    text: 'A gem in the heart of London. The ambiance, the wine list, and above all the tiramisù — perfection.',
    rating: 5,
  },
];

const values = [
  {
    icon: ChefHat,
    title: 'Artisan Craft',
    desc: 'Every dish is prepared from scratch by our team of Italian-trained chefs.',
  },
  {
    icon: Leaf,
    title: 'Seasonal Ingredients',
    desc: 'We source the finest seasonal produce from trusted local and Italian suppliers.',
  },
  {
    icon: Award,
    title: 'Award-Winning',
    desc: 'Recognised by the Good Food Guide and holder of a Michelin Bib Gourmand.',
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />

      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1800&auto=format&fit=crop&q=85')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/70 via-stone-950/50 to-stone-950/80" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 py-32 text-center">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-amber-400">
            Est. 2009 · London, EC3
          </p>
          <h1 className="mt-5 text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-8xl">
            La Bella <br />
            <span className="text-amber-400">Cucina</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-stone-300">
            Authentic Italian flavours, lovingly prepared with the finest seasonal ingredients and
            served in the heart of London.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/menu"
              className="flex items-center gap-2 rounded-xl bg-amber-500 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-amber-500/30 transition-all hover:bg-amber-400 hover:shadow-amber-400/40"
            >
              View Our Menu <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-8 py-4 text-sm font-bold text-white backdrop-blur transition-all hover:bg-white/20"
            >
              Reserve a Table
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/40 pt-2">
            <div className="h-2 w-0.5 rounded-full bg-white/60" />
          </div>
        </div>
      </section>

      {/* Values strip */}
      <section className="bg-stone-950 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-8 sm:grid-cols-3">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-500/20">
                  <Icon className="h-6 w-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-stone-400">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured dishes */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="From our kitchen"
              title="Featured Dishes"
              subtitle="A taste of what awaits you — crafted fresh every day."
            />
            <Link
              to="/menu"
              className="flex shrink-0 items-center gap-1.5 text-sm font-bold text-amber-600 transition-colors hover:text-amber-500"
            >
              Full menu <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-stone-900 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <SectionHeading
            eyebrow="What guests say"
            title="Loved by Londoners"
            centered
            light
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-7 text-stone-300">"{t.text}"</p>
                <p className="mt-4 text-xs font-bold text-amber-400">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section
        className="relative overflow-hidden bg-cover bg-center py-24"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=1400&auto=format&fit=crop&q=80')" }}
      >
        <div className="absolute inset-0 bg-stone-950/75" />
        <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
          <SectionHeading
            eyebrow="Reservations"
            title="Join Us for an Unforgettable Evening"
            subtitle="Book your table now and let us take care of everything else."
            centered
            light
          />
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-amber-500 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-amber-500/30 transition-all hover:bg-amber-400"
          >
            Book a Table <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
  