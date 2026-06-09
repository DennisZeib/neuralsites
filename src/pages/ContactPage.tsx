
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { MapPin, Phone, Mail, Clock, CheckCircle2, Send } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionHeading from '../components/SectionHeading';

const schema = z.object({
  name: z.string().min(2, 'Please enter your full name.'),
  email: z.string().email('Please enter a valid email address.'),
  phone: z.string().optional(),
  partySize: z.string().min(1, 'Please select a party size.'),
  date: z.string().min(1, 'Please select a preferred date.'),
  message: z.string().min(10, 'Please tell us a little more (at least 10 characters).'),
});

type FormData = z.infer<typeof schema>;

const contactDetails = [
  {
    icon: MapPin,
    label: 'Address',
    value: '14 Vine Street, London, EC3N 2PX',
    href: 'https://maps.google.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+44 (0)20 7123 4567',
    href: 'tel:+442071234567',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@labellacucina.co.uk',
    href: 'mailto:hello@labellacucina.co.uk',
  },
];

const hours = [
  { days: 'Monday – Thursday', time: '12:00 – 22:00' },
  { days: 'Friday – Saturday', time: '12:00 – 23:00' },
  { days: 'Sunday', time: '13:00 – 21:00' },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (_data: FormData) => {
    await new Promise((res) => setTimeout(res, 800));
    setSubmitted(true);
    reset();
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />

      {/* Hero */}
      <section
        className="relative flex items-end overflow-hidden pb-16 pt-40"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&auto=format&fit=crop&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/50 to-stone-950/85" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-12">
          <SectionHeading
            eyebrow="Get in touch"
            title="Reserve Your Table"
            subtitle="We'd love to have you. Fill in the form and we'll confirm your reservation within 24 hours."
            light
          />
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr]">
            {/* Left — contact info */}
            <div>
              <h3 className="text-xl font-bold text-stone-900">Find Us</h3>

              <ul className="mt-6 space-y-5">
                {contactDetails.map(({ icon: Icon, label, value, href }) => (
                  <li key={label} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50">
                      <Icon className="h-5 w-5 text-amber-500" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-stone-400">
                        {label}
                      </p>
                      <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel="noreferrer"
                        className="mt-0.5 text-sm font-semibold text-stone-800 transition-colors hover:text-amber-600"
                      >
                        {value}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Hours */}
              <div className="mt-10">
                <h3 className="flex items-center gap-2 text-xl font-bold text-stone-900">
                  <Clock className="h-5 w-5 text-amber-500" /> Opening Hours
                </h3>
                <ul className="mt-4 space-y-2">
                  {hours.map(({ days, time }) => (
                    <li key={days} className="flex justify-between text-sm">
                      <span className="font-medium text-stone-700">{days}</span>
                      <span className="text-stone-500">{time}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Map placeholder */}
              <div className="mt-10 overflow-hidden rounded-2xl border border-stone-200 shadow-sm">
                <iframe
                  title="Restaurant location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.0!2d-0.0754!3d51.5127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDMwJzQ1LjciTiAwwrAwNCczMi42Ilc!5e0!3m2!1sen!2suk!4v1700000000000"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Right — form */}
            <div className="rounded-2xl border border-stone-100 bg-white p-8 shadow-lg lg:p-10">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <CheckCircle2 className="h-16 w-16 text-amber-500" />
                  <h3 className="mt-5 text-2xl font-black text-stone-900">
                    Reservation Received!
                  </h3>
                  <p className="mt-3 max-w-sm text-stone-500">
                    Thank you! We've received your request and will confirm your table within 24
                    hours. We look forward to welcoming you.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 rounded-xl bg-amber-500 px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-amber-400"
                  >
                    Make Another Reservation
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-stone-900">Reservation Request</h3>
                  <p className="mt-1 text-sm text-stone-500">
                    All fields marked <span className="text-red-500">*</span> are required.
                  </p>

                  <form onSubmit={handleSubmit(onSubmit)} className="mt-7 space-y-5" noValidate>
                    {/* Name + Email */}
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-stone-600">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Jane Smith"
                          {...register('name')}
                          className={`w-full rounded-xl border px-4 py-3 text-sm text-stone-900 placeholder-stone-400 outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 ${
                            errors.name ? 'border-red-400 bg-red-50' : 'border-stone-200 bg-stone-50'
                          }`}
                        />
                        {errors.name && (
                          <p className="mt-1.5 text-xs text-red-500">{errors.name.message}</p>
                        )}
                      </div>
                      <div>
                        <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-stone-600">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          placeholder="jane@example.com"
                          {...register('email')}
                          className={`w-full rounded-xl border px-4 py-3 text-sm text-stone-900 placeholder-stone-400 outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 ${
                            errors.email ? 'border-red-400 bg-red-50' : 'border-stone-200 bg-stone-50'
                          }`}
                        />
                        {errors.email && (
                          <p className="mt-1.5 text-xs text-red-500">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-stone-600">
                        Phone <span className="text-stone-400">(optional)</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="+44 7700 900000"
                        {...register('phone')}
                        className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-900 placeholder-stone-400 outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20"
                      />
                    </div>

                    {/* Party size + Date */}
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-stone-600">
                          Party Size <span className="text-red-500">*</span>
                        </label>
                        <select
                          {...register('partySize')}
                          defaultValue=""
                          className={`w-full rounded-xl border px-4 py-3 text-sm text-stone-900 outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 ${
                            errors.partySize ? 'border-red-400 bg-red-50' : 'border-stone-200 bg-stone-50'
                          }`}
                        >
                          <option value="" disabled>
                            Select…
                          </option>
                          {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                            <option key={n} value={n}>
                              {n} {n === 1 ? 'Guest' : 'Guests'}
                            </option>
                          ))}
                          <option value="9+">9+ Guests</option>
                        </select>
                        {errors.partySize && (
                          <p className="mt-1.5 text-xs text-red-500">{errors.partySize.message}</p>
                        )}
                      </div>
                      <div>
                        <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-stone-600">
                          Preferred Date <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="date"
                          {...register('date')}
                          min={new Date().toISOString().split('T')[0]}
                          className={`w-full rounded-xl border px-4 py-3 text-sm text-stone-900 outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 ${
                            errors.date ? 'border-red-400 bg-red-50' : 'border-stone-200 bg-stone-50'
                          }`}
                        />
                        {errors.date && (
                          <p className="mt-1.5 text-xs text-red-500">{errors.date.message}</p>
                        )}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-stone-600">
                        Message / Special Requests <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Let us know about any dietary requirements, special occasions, or preferred seating…"
                        {...register('message')}
                        className={`w-full resize-none rounded-xl border px-4 py-3 text-sm text-stone-900 placeholder-stone-400 outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 ${
                          errors.message ? 'border-red-400 bg-red-50' : 'border-stone-200 bg-stone-50'
                        }`}
                      />
                      {errors.message && (
                        <p className="mt-1.5 text-xs text-red-500">{errors.message.message}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-amber-500 py-4 text-sm font-bold text-white shadow transition-all hover:bg-amber-400 disabled:opacity-60"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8v8H4z"
                            />
                          </svg>
                          Sending…
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" /> Send Reservation Request
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
  