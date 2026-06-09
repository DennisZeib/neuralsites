
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Users, Flame, Globe } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionHeading from '../components/SectionHeading';

const stats = [
  { value: '15+', label: 'Years of Excellence' },
  { value: '80+', label: 'Dishes on the Menu' },
  { value: '4.9★', label: 'Average Rating' },
  { value: '50k+', label: 'Happy Guests' },
];

const team = [
  {
    name: 'Marco Ferretti',
    role: 'Head Chef & Founder',
    bio: 'Born in Bologna, Marco trained under Michelin-starred chefs before bringing his craft to London in 2009.',
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&auto=format&fit=crop&q=80',
  },
  {
    name: 'Sofia Bianchi',
    role: 'Pastry Chef',
    bio: "Sofia's desserts are legendary. Her tiramisù has appeared in Time Out's Top 10 London Desserts three years running.",
    image: 'https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=400&auto=format&fit=crop&q=80',
  },
  {
    name: 'Luca Romano',
    role: 'Sommelier',
    bio: 'With over 200 labels on our wine list, Luca ensures every bottle is a perfect match for your meal.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80',
  },
];

const values = [
  {
    icon: Heart,
    title: 'Passion',
    desc: 'Every plate is an act of love — for food, for Italy, and for our guests.',
  },
  {
    icon: Flame,
    title: 'Tradition',
    desc: 'We honour centuries-old recipes while embracing the best of modern technique.',
  },
  {
    icon: Globe,
    title: 'Provenance',
    desc: 'Ingredients sourced directly from Italian producers and trusted local farms.',
  },
  {
    icon: Users,
    title: 'Community',
    desc: 'We are proud to be a gathering place for families, friends, and food lovers.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />

      {/* Hero */}
      <section
        className="relative flex items-end overflow-hidden pb-16 pt-40"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1600&auto=format&fit=crop&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/50 to-stone-950/85" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-12">
          <SectionHeading
            eyebrow="Our Story"
            title="A Labour of Love"
            subtitle="From a small trattoria in Bologna to the heart of London — this is our journey."
            light
          />
        </div>
      </section>

      {/* Story section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Since 2009"
                title="Where It All Began"
                subtitle=""
              />
              <div className="mt-6 space-y-5 text-base leading-8 text-stone-600">
                <p>
                  La Bella Cucina was born from a simple dream: to share the warmth, flavour, and
                  tradition of Italian home cooking with the world. Our founder, Marco Ferretti, grew
                  up watching his grandmother coax magic from the simplest ingredients in her Bologna
                  kitchen. That memory never left him.
                </p>
                <p>
                  After training under some of Italy's most celebrated chefs and earning his stripes
                  in the kitchens of Florence, Rome, and Milan, Marco arrived in London in 2009 with
                  a handful of family recipes and a burning desire to create something authentic.
                </p>
                <p>
                  Today, La Bella Cucina is recognised as one of London's finest Italian restaurants
                  — but we haven't forgotten where we came from. Every dish is still made from
                  scratch, every pasta hand-rolled, and every sauce slow-cooked with the same love
                  and patience Marco learned as a boy.
                </p>
              </div>
              <Link
                to="/menu"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-amber-500 px-7 py-3.5 text-sm font-bold text-white shadow transition-all hover:bg-amber-400"
              >
                Explore Our Menu <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop&q=80"
                alt="Inside La Bella Cucina"
                className="h-[520px] w-full rounded-2xl object-cover shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 rounded-2xl bg-amber-500 p-5 shadow-xl">
                <p className="text-3xl font-black text-white">15+</p>
                <p className="text-xs font-bold uppercase tracking-wider text-amber-100">
                  Years of Excellence
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-stone-900 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="text-4xl font-black text-amber-400">{value}</p>
                <p className="mt-2 text-sm font-semibold text-stone-400">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <SectionHeading
            eyebrow="What drives us"
            title="Our Values"
            subtitle="The principles behind every dish we serve."
            centered
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl border border-stone-100 bg-white p-6 text-center shadow-sm"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-amber-50">
                  <Icon className="h-7 w-7 text-amber-500" />
                </div>
                <h3 className="mt-4 font-bold text-stone-900">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-stone-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-stone-100 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <SectionHeading
            eyebrow="The people behind the food"
            title="Meet the Team"
            subtitle="Passionate professionals who pour their hearts into every service."
            centered
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {team.map(({ name, role, bio, image }) => (
              <div
                key={name}
                className="overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-lg"
              >
                <img
                  src={image}
                  alt={name}
                  className="h-64 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-stone-900">{name}</h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-amber-600">
                    {role}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-stone-500">{bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-500 py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-black text-white">Come Dine With Us</h2>
          <p className="mt-3 text-amber-100">
            Whether it's a romantic dinner, a family celebration, or a business lunch — we have the
            perfect table waiting for you.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-sm font-bold text-amber-600 shadow transition-all hover:bg-amber-50"
          >
            Reserve a Table <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
  