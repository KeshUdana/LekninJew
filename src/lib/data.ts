export type Product = {
  slug: string;
  name: string;
  category: "Rings" | "Necklaces" | "Earrings";
  gemstone: "Sapphire" | "Ruby" | "Cat's Eye" | "Alexandrite";
  metal: "Yellow Gold" | "White Gold" | "Rose Gold" | "Platinum";
  priceFromUsd: number;
  description: string;
  image: string;
  gallery: string[];
  certificate: string;
  dimensions: string;
};

export type Gemstone = {
  slug: string;
  name: Product["gemstone"];
  color: string;
  description: string;
  image: string;
};

export const heroSlides = [
  {
    title: "Ceylon Gems, Handcrafted in Sri Lanka",
    subtitle:
      "From raw gemstone to heirloom jewelry, every piece is designed and crafted in-house for global clients.",
    image:
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1800&q=80",
  },
  {
    title: "Traditional Craft, Modern Luxury",
    subtitle:
      "Leknin Jewels blends Sri Lankan artistry with contemporary silhouettes and clean detailing.",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1800&q=80",
  },
  {
    title: "Bespoke Jewelry for International Clients",
    subtitle:
      "Personalized design consultations, certified gems, and secure worldwide shipping.",
    image:
      "https://images.unsplash.com/photo-1601121141332-45f8f3cf4df6?auto=format&fit=crop&w=1800&q=80",
  },
];

export const products: Product[] = [
  {
    slug: "kandy-blue-halo-ring",
    name: "Kandy Blue Halo Ring",
    category: "Rings",
    gemstone: "Sapphire",
    metal: "White Gold",
    priceFromUsd: 2400,
    description:
      "A vivid Ceylon blue sapphire centerpiece with a delicate halo and hand-polished white gold setting.",
    image:
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1602752250015-52934bc45613?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1200&q=80",
    ],
    certificate: "GIA / Ceylon origin verified",
    dimensions: "Center stone: 2.1 ct, Ring size customizable",
  },
  {
    slug: "sigiriya-ruby-pendant",
    name: "Sigiriya Ruby Pendant",
    category: "Necklaces",
    gemstone: "Ruby",
    metal: "Yellow Gold",
    priceFromUsd: 1800,
    description:
      "A deep ruby pendant inspired by royal Sri Lankan motifs, crafted in warm yellow gold.",
    image:
      "https://images.unsplash.com/photo-1543295204-8e6d3f26cd8c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1543295204-8e6d3f26cd8c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=1200&q=80",
    ],
    certificate: "AIGS certified natural ruby",
    dimensions: "Pendant drop: 2.8 cm, Chain: 18 in",
  },
  {
    slug: "ceylon-dawn-earrings",
    name: "Ceylon Dawn Earrings",
    category: "Earrings",
    gemstone: "Alexandrite",
    metal: "Rose Gold",
    priceFromUsd: 2100,
    description:
      "Alexandrite earrings with subtle color change brilliance in a sculpted rose gold frame.",
    image:
      "https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?auto=format&fit=crop&w=1200&q=80",
    ],
    certificate: "Lab verified alexandrite",
    dimensions: "Drop length: 2.3 cm",
  },
  {
    slug: "temple-light-cats-eye-ring",
    name: "Temple Light Cat's Eye Ring",
    category: "Rings",
    gemstone: "Cat's Eye",
    metal: "Platinum",
    priceFromUsd: 2700,
    description:
      "A rare cat's eye gemstone ring with a high-polish platinum silhouette and bold artisan setting.",
    image:
      "https://images.unsplash.com/photo-1612690112053-adfd6f4966ab?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1612690112053-adfd6f4966ab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=80",
    ],
    certificate: "Sri Lankan gem authority certified",
    dimensions: "Center stone: 2.4 ct",
  },
];

export const gemstones: Gemstone[] = [
  {
    slug: "sapphire",
    name: "Sapphire",
    color: "Blue",
    description:
      "Sri Lankan sapphires are globally renowned for clarity, cornflower blues, and exceptional brilliance.",
    image:
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "ruby",
    name: "Ruby",
    color: "Red",
    description:
      "Our rubies are selected for saturation and fire, and transformed into heirloom-ready designs.",
    image:
      "https://images.unsplash.com/photo-1622202096863-9ff56b1f9d6a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "cats-eye",
    name: "Cat's Eye",
    color: "Honey Green",
    description:
      "Rare and mystical, cat's eye gems from Sri Lanka are prized for their moving luminous band.",
    image:
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "alexandrite",
    name: "Alexandrite",
    color: "Green to Purple",
    description:
      "Known for dramatic color change, alexandrite offers one of the most unique visual journeys in jewelry.",
    image:
      "https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=1200&q=80",
  },
];

export const testimonials = [
  {
    name: "Elena, Italy",
    quote:
      "The detailing is extraordinary. Leknin translated my vision into a ring that feels deeply personal.",
  },
  {
    name: "Ahmed, UAE",
    quote:
      "Clear communication, certified stones, and flawless craftsmanship. International delivery was smooth.",
  },
  {
    name: "Maya, UK",
    quote:
      "I loved seeing the gem-to-jewel process. It felt authentic and luxurious at the same time.",
  },
];

export const blogPosts = [
  {
    slug: "how-to-choose-ceylon-sapphire",
    title: "How to Choose a Ceylon Sapphire",
    excerpt:
      "Understand hue, clarity, and cut to pick a sapphire that fits your design and budget.",
  },
  {
    slug: "bespoke-jewellery-process",
    title: "Inside Our Bespoke Jewellery Process",
    excerpt:
      "From consultation to final polish, discover how we shape one-of-a-kind pieces in-house.",
  },
];
