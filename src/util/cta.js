const img = (path) => `/tesla-image/${path}`
export const categories = [
  {
    id: 61,
    slug: "make-up",
    name: "메이크업",
    href: "/category/make-up/61/",
    img: {
      src: img("Cta-car-1.png"),
      alt: "메이크업",
    },
  },
  {
    id: 42,
    slug: "sun",
    name: "선케어",
    href: "/category/sun/42/",
    img: {
      src: img("Cta-car-2.png"),

      alt: "선케어",
    },
  },
  {
    id: 52,
    slug: "lip",
    name: "립케어",
    href: "/category/lip/52/",
    img: {
      src: img("Cta-car-3.png"),

      alt: "립케어",
    },
  },
  {
    id: 50,
    slug: "skincare",
    name: "스킨케어",
    href: "/category/skincare/50/",
    img: {
      src: img("Cta-car-4.png"),

      alt: "스킨케어",
    },
  },
  {
    id: 47,
    slug: "cleansing",
    name: "클렌징",
    href: "/category/cleansing/47/",
    img: {
      src: img("Cta-car-5.png"),

      alt: "클렌징",
    },
  },
];

export default categories;