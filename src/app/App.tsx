import { useState } from 'react';
import { Phone, Mail, Truck, Trash2, Sofa, Hammer, Boxes, CheckCircle, MapPin, Clock, Star, ArrowRight, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

const galleryProjects = [
  {
    title: 'Basement Cleanout',
    before: '/trash1before.jpg',
    after: '/trash1after.jpg',
    beforeAlt: 'Basement before junk removal cleanout in Massachusetts',
    afterAlt: 'Basement after Frates junk removal cleanout in Massachusetts'
  },
  {
    title: 'Garage Cleanout',
    before: '/trash2before.jpg',
    after: '/trash2after.jpg',
    beforeAlt: 'Garage before junk removal service in Lakeville MA',
    afterAlt: 'Garage after junk removal service in Lakeville MA'
  },
  {
    title: 'Property Cleanup',
    before: '/trash3before.jpg',
    after: '/trash3after.jpg',
    beforeAlt: 'Property before trash hauling and cleanup',
    afterAlt: 'Property after trash hauling and cleanup'
  },
  {
    title: 'Home Junk Removal',
    before: '/trash4before.jpg',
    after: '/trash4after.jpg',
    beforeAlt: 'Home before junk removal appointment',
    afterAlt: 'Home after junk removal appointment'
  },
  {
    title: 'Debris Hauling',
    before: '/trash5before.jpg',
    after: '/trash5after.jpg',
    beforeAlt: 'Debris before hauling service',
    afterAlt: 'Debris cleared after hauling service'
  },
  {
    title: 'Full Cleanout',
    before: '/trash6before.jpg',
    after: '/trash6after.jpg',
    beforeAlt: 'Space before full junk cleanout',
    afterAlt: 'Space after full junk cleanout'
  }
];

const reviews = [
  {
    text: "I highly recommend Ronnie for any junk or trash removal you have to have done around your home. His communication is excellent. Making an appointment was easy, and he came when he said he was going to. He is also so extremely friendly and polite. I showed him to my cellar, told him what I wanted gone, next thing I knew it was gone. Use no one else.",
    name: "Margret Russell",
    source: "Facebook recommendation",
    service: "Home cleanout"
  },
  {
    text: "Frates junk and trash removal is reasonably priced, efficient and easy to do business with. Ronnie delivered the dumpster promptly as promised and was right on time for the pick up. Life made easy. I'm planning on using his service again in the near future!! Highly recommend!!",
    name: "Michelle Blaton-Cook",
    source: "Facebook recommendation",
    service: "Dumpster service"
  },
  {
    text: "Frates Junk and trash removal is the only company I will use going forward. I called on a Tuesday and he was here the next day. I expected him to cancel as it was pouring but he showed up and loaded up in the pouring rain. Frates customer service and commitment to do a great job is what's lacking in so many businesses today. If you need junk or trash removed, call them, I'm positive you'll be as impressed with his service as I am.",
    name: "Barbara Tripp",
    source: "Facebook recommendation",
    service: "Junk removal"
  }
];

const serviceAreas = [
  'Lakeville, MA',
  'Cape Cod, MA',
  'Plymouth, MA',
  'Middleboro, MA',
  'Carver, MA',
  'Taunton, MA'
];

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(data as any).toString()
    });

    alert('Thank you! We\'ll get back to you ASAP.');

    setFormData({
      name: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Call Button - Mobile */}
      <a
        href="tel:5087284555"
        className="fixed bottom-8 right-8 z-50 flex items-center gap-3 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white px-6 py-4 rounded-full shadow-2xl hover:shadow-[#FF6B35]/50 hover:scale-105 transition-all duration-300 md:hidden"
      >
        <Phone className="w-5 h-5" />
        <span>Call Now</span>
      </a>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70 z-10" />
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1746730089001-c7c5ce13aad9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxqdW5rJTIwcmVtb3ZhbCUyMHRydWNrfGVufDF8fHx8MTc3NzA0ODQ1NHww&ixlib=rb-4.1.0&q=80&w=1920"
          alt="Junk removal truck"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center px-6 max-w-5xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-[#FF6B35]" />
            <span className="text-white/90 text-sm">Trusted by 100+ Local Customers</span>
          </div>
          <h1 className="text-6xl md:text-8xl mb-6 text-white tracking-tight">
            Junk Removal<br />
            <span className="bg-gradient-to-r from-[#FF6B35] to-[#F7931E] bg-clip-text text-transparent">in Lakeville, MA</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-2xl mx-auto leading-relaxed">
            Serving Lakeville, MA and surrounding areas with professional junk removal, trash hauling, and demo services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="tel:5087284555"
              className="group bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white px-10 py-5 rounded-xl hover:shadow-2xl hover:shadow-[#FF6B35]/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call or Text Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              onClick={scrollToForm}
              className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-10 py-5 rounded-xl hover:bg-white/20 transition-all duration-300"
            >
              Get a Free Quote
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-white/90">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
                <Clock className="w-5 h-5 text-[#FF6B35]" />
              </div>
              <span>Always Open</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-[#FF6B35]" />
              </div>
              <span>Fast Response</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
                <MapPin className="w-5 h-5 text-[#FF6B35]" />
              </div>
              <span>Local Service</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[#FF6B35] tracking-wider uppercase text-sm mb-4 block">What We Do</span>
            <h2 className="text-5xl md:text-6xl mb-6 text-black">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Professional solutions for all your junk removal needs</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Truck, title: 'Junk Removal', desc: 'Fast removal of unwanted items from your home or business' },
              { icon: Trash2, title: 'Trash Hauling', desc: 'Reliable hauling services for all your waste disposal needs' },
              { icon: Sofa, title: 'Furniture Removal', desc: 'Safe and efficient removal of old furniture and appliances' },
              { icon: Hammer, title: 'Small Demo Projects', desc: 'Professional demolition services for small to medium projects' },
              { icon: Boxes, title: 'Dumpster Services', desc: 'Dumpster rental and pickup for your convenience' },
              { icon: Sparkles, title: 'Estate Cleanouts', desc: 'Complete estate and property cleanout services' }
            ].map((service, idx) => (
              <div
                key={idx}
                className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#FF6B35]/20 hover:-translate-y-1"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FF6B35] to-[#F7931E] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl mb-3 text-black">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-32 px-6 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/10 to-transparent" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <span className="text-[#FF6B35] tracking-wider uppercase text-sm mb-4 block">Why Us</span>
            <h2 className="text-5xl md:text-6xl mb-6">Why Choose Frates</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">We're committed to providing exceptional service every time</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { text: 'Shows up on time' },
              { text: 'Fast & efficient' },
              { text: 'Friendly & professional' },
              { text: 'Easy scheduling' },
              { text: 'Local & reliable' },
              { text: 'Competitive pricing' }
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-[#FF6B35]/50 transition-all duration-300 hover:bg-white/10"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF6B35] to-[#F7931E] flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <span className="text-lg">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[#FF6B35] tracking-wider uppercase text-sm mb-4 block">Testimonials</span>
            <h2 className="text-5xl md:text-6xl mb-6 text-black">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Don't just take our word for it</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#FF6B35] to-[#F7931E] flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-lg">
                        {review.name
                          .split(' ')
                          .map((part) => part[0])
                          .join('')
                          .slice(0, 2)}
                      </span>
                    </div>
                    <div>
                      <p className="text-black text-lg">{review.name}</p>
                      <p className="text-sm text-gray-500">{review.source}</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-[#1877F2]/10 px-3 py-1 text-sm text-[#1877F2]">
                    Facebook
                  </span>
                </div>
                <div className="mb-5 flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#FF6B35] text-[#FF6B35]" />
                  ))}
                  <span className="ml-2 text-sm text-gray-500">{review.service}</span>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{review.text}"
                </p>
                <div className="border-t border-gray-100 pt-5">
                  <p className="text-sm text-gray-500">Recommends Frates Junk and Trash Removal</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <a
              href="https://www.facebook.com/profile.php?id=61579067311115&sk=reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#1877F2] px-8 py-4 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#1877F2]/30"
            >
              <span>Leave a Facebook Review</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#FF6B35] tracking-wider uppercase text-sm mb-4 block">Coverage</span>
            <h2 className="text-5xl md:text-6xl mb-6 text-black">Junk Removal Service Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Based in Lakeville and serving nearby South Shore, South Coast, and Cape Cod communities.
            </p>
          </div>

          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-stretch">
            <div className="bg-black text-white rounded-2xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/20 to-transparent" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FF6B35] to-[#F7931E] flex items-center justify-center mb-8">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <span className="text-[#FF6B35] tracking-wider uppercase text-sm mb-4 block">Home Base</span>
                <h3 className="text-4xl mb-5">Lakeville, MA</h3>
                <p className="text-lg text-white/75 leading-relaxed mb-8">
                  Fast local junk removal, trash hauling, cleanouts, furniture removal, dumpster service, and small demo support throughout the area.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 rounded-xl bg-white/10 p-4 border border-white/10">
                    <Clock className="w-5 h-5 text-[#FF6B35]" />
                    <span>Always Open</span>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl bg-white/10 p-4 border border-white/10">
                    <CheckCircle className="w-5 h-5 text-[#FF6B35]" />
                    <span>Free Quotes</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {serviceAreas.map((area) => (
                <div
                  key={area}
                  className="group flex items-center gap-4 bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-200 hover:border-[#FF6B35]/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF6B35] to-[#F7931E] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xl text-black">{area}</p>
                    <p className="text-sm text-gray-500">Junk removal & hauling</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-5 rounded-2xl bg-gradient-to-r from-gray-50 to-white border border-gray-200 p-6 md:p-8">
            <p className="text-lg text-gray-700 text-center md:text-left">
              Nearby town not listed? Reach out anyway. Frates often handles jobs across surrounding Massachusetts communities.
            </p>
            <button
              onClick={scrollToForm}
              className="group flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#FF6B35] to-[#F7931E] px-7 py-4 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/30"
            >
              <span>Check Availability</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[#FF6B35] tracking-wider uppercase text-sm mb-4 block">Portfolio</span>
            <h2 className="text-5xl md:text-6xl mb-6 text-black">Our Work</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">See the difference we make</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {galleryProjects.map((project, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#FF6B35]/20"
              >
                <div className="relative">
                  <div className="grid grid-cols-2">
                    <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                      <ImageWithFallback
                        src={project.before}
                        alt={project.beforeAlt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/55 to-transparent" />
                      <span className="absolute left-4 top-4 rounded-full bg-black/75 px-4 py-2 text-sm text-white backdrop-blur-sm">
                        Before
                      </span>
                    </div>
                    <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                      <ImageWithFallback
                        src={project.after}
                        alt={project.afterAlt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/45 to-transparent" />
                      <span className="absolute right-4 top-4 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#F7931E] px-4 py-2 text-sm text-white shadow-lg">
                        After
                      </span>
                    </div>
                  </div>
                  <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-white/80 shadow-[0_0_16px_rgba(0,0,0,0.35)]" />
                  <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#FF6B35] shadow-xl ring-4 ring-white/40">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                </div>
                <div className="flex items-center justify-between gap-4 p-6">
                  <h3 className="text-2xl text-black">{project.title}</h3>
                  <span className="hidden sm:inline-flex rounded-full bg-[#FF6B35]/10 px-4 py-2 text-sm text-[#FF6B35]">
                    Cleared out
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 overflow-hidden rounded-2xl bg-black text-white shadow-2xl">
            <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
              <div className="grid grid-cols-2">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src="/trash1before.jpg"
                    alt="Before junk removal cleanup"
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-black/75 px-4 py-2 text-sm text-white backdrop-blur-sm">
                    Before
                  </span>
                </div>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src="/trash1after.jpg"
                    alt="After junk removal cleanup"
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute right-4 top-4 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#F7931E] px-4 py-2 text-sm text-white shadow-lg">
                    After
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-center p-8 lg:p-10">
                <span className="mb-4 text-sm uppercase tracking-wider text-[#FF6B35]">Before & After</span>
                <h3 className="mb-4 text-4xl text-white">Real spaces, cleared fast.</h3>
                <p className="text-lg leading-relaxed text-white/75">
                  Every photo pair shows the same job from start to finish, so visitors can see the kind of difference Frates makes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-gradient-to-br from-[#FF6B35] to-[#F7931E] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl mb-8">Ready to Clear Out Your Space?</h2>
          <p className="text-2xl mb-12 text-white/90">Get started today with a free quote</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="tel:5087284555"
              className="group bg-white text-[#FF6B35] px-12 py-6 rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              <Phone className="w-6 h-6" />
              <span className="text-xl">Call Now</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              onClick={scrollToForm}
              className="bg-black/20 backdrop-blur-md border-2 border-white/30 text-white px-12 py-6 rounded-xl hover:bg-black/30 transition-all duration-300 flex items-center justify-center gap-2 text-xl"
            >
              Get Free Quote
            </button>
          </div>
        </div>
      </section>

{/* Contact Form Section */}
<section id="contact-form" className="py-32 px-6 bg-gradient-to-b from-white to-gray-50">
  <div className="max-w-3xl mx-auto">
    <div className="text-center mb-16">
      <span className="text-[#FF6B35] tracking-wider uppercase text-sm mb-4 block">
        Get In Touch
      </span>
      <h2 className="text-5xl md:text-6xl mb-6 text-black">Get a Free Quote</h2>
      <p className="text-xl text-gray-600">We'll respond within 24 hours</p>
    </div>

    <form
      name="quote"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100"
    >
      <input type="hidden" name="form-name" value="quote" />

      <p className="hidden">
        <label>
          Don’t fill this out: <input name="bot-field" />
        </label>
      </p>

      <div className="mb-8">
        <label className="block text-black mb-3 text-lg">Name *</label>
        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-[#FF6B35] bg-white transition-all text-lg"
          placeholder="Your name"
        />
      </div>

      <div className="mb-8">
        <label className="block text-black mb-3 text-lg">Phone Number *</label>
        <input
          type="tel"
          name="phone"
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-[#FF6B35] bg-white transition-all text-lg"
          placeholder="(123) 456-7890"
        />
      </div>

      <div className="mb-8">
        <label className="block text-black mb-3 text-lg">Service Needed *</label>
        <select
          name="service"
          required
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-[#FF6B35] bg-white transition-all text-lg"
        >
          <option value="">Select a service</option>
          <option value="Junk Removal">Junk Removal</option>
          <option value="Trash Hauling">Trash Hauling</option>
          <option value="Furniture Removal">Furniture Removal</option>
          <option value="Small Demo Projects">Small Demo Projects</option>
          <option value="Dumpster Services">Dumpster Services</option>
          <option value="Estate Cleanout">Estate Cleanout</option>
        </select>
      </div>

      <div className="mb-8">
        <label className="block text-black mb-3 text-lg">Message</label>
        <textarea
          name="message"
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-[#FF6B35] bg-white resize-none transition-all text-lg"
          placeholder="Tell us about your project..."
        />
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white px-10 py-6 rounded-xl hover:shadow-2xl hover:shadow-[#FF6B35]/50 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-3 text-xl"
      >
        <span>Send Request</span>
        <ArrowRight className="w-6 h-6" />
      </button>
    </form>
  </div>
</section>

      {/* Footer */}
      <footer className="bg-black text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-3xl mb-4 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] bg-clip-text text-transparent">Frates</h3>
              <p className="text-gray-400 leading-relaxed">Fast, reliable junk removal service you can count on.</p>
            </div>
            <div>
              <h4 className="text-xl mb-6">Contact</h4>
              <div className="space-y-3 text-gray-400">
                <p className="hover:text-white transition-colors">(508) 728-4555</p>
                <p className="hover:text-white transition-colors">rfrates4755@gmail.com</p>
                <p className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#FF6B35]" />
                  Always Open
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-xl mb-6">Service Areas</h4>
              <p className="text-gray-400 leading-relaxed">
                Lakeville, Cape Cod, Plymouth, Middleboro, Carver, Taunton, MA
              </p>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 text-center text-gray-500">
            <p>
              © 2026 Frates Junk and Trash Removal. All rights reserved. |{' '}
              <a
                href="https://lulldigital.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FF6B35] hover:text-[#F7931E] transition-colors"
              >
                Website by Lull Digital
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
