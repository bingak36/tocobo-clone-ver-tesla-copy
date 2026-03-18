const img = (path) => `/tesla-image/${path}`
export const helloData = {

  media: {
    type: "image",                     // "image" | "video"
    src: img("Hello-img.png"),   // public 폴더 기준
    alt: "Pink square demo image",
    radius: 24                         // 이미지 둥근 모서리(px)
  },

  eyebrow: "Experience the Future with Tesla",
  title: "미래를 향한 <br/>가장 직관적인 움직임",
  description:
    "기술은 인간의 감각을 확장하고 여정을 자유롭게 해야 합니다. Tesla의 지능형 시스템이 선사하는 여유로움 속에서, 오직 드라이빙의 즐거움과 풍경에만 집중하는 시간을 가지세요.",
  cta: {
    label: "MEET TESLA",
    href: "/about"
  }
};


