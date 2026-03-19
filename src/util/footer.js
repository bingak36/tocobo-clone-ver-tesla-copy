// src/util/footer.js
const img = (path) => `/tesla-image/${path}`
import { FaInstagramSquare, FaYoutube } from "react-icons/fa";
import { RiKakaoTalkFill } from "react-icons/ri";

// 로고
export const logoData = {
  src: img("FooterLogo.svg"),
  alt: "TOCOBO 로고",
  href: "/",
};

// 회사 정보
export const companyData = [
  "테슬라 코리아 유한회사, 데이비드존파인스타인, 케네스어니스트무어",
    "주소 : 서울특별시 강남구 테헤란로 419,9층",
    "사업자등록번호 : 524-88-00237",
    "통신판매업신고 : 제2016-서울강남-02964호",
    "대표 전화 : 080-617-1388",
    "메일 : southkorea@tesla.com"
];
export const footerLegal = {
  
  links: [
    { label: "이용약관", href: "/terms" },
    { label: "개인정보처리방침", href: "/privacy" },
    { label: "이용안내", href: "/guide" }
  ]
};
// 고객센터
export const customerCenterData = {
  title: "Customer Center",
  tel: { value: "02-6352-2410", href: "tel:0263522410" },
  hours: "AM 10:00 - PM 5:00 (Lunch 12:00 - 13:00)",
  notice: "토, 일요일 및 공휴일 휴무",
  talk: { label: "1:1 TALK", href: "#" },
};

// 메뉴
export const footerMenus = [
  {
    title: "Model",
    items: [
      { label: "Model S", href: "/Model S" },
      { label: "Model 3", href: "/Model 3" },
      { label: "Model X", href: "/Model X" },
      { label: "MModel Y", href: "/Model Y" },
      { label: "Cybertruck", href: "/Cybertruck" },
    ],
  },
  {
    title: "Shop",
    items: [
      { label: "신차 재고 차량", href: "/shop/신차 재고 차량" },
      { label: "인증 중고 차량", href: "/shop/인증 중고 차량" },
      { label: "시승 신청", href: "/shop/시승 신청" },
      { label: "법인 구매", href: "/shop/법인 구매" },
      { label: "액세서리 쇼핑몰 (Shop)", href: "/shop/액세서리 쇼핑몰 (Shop)" },

    ],
  },
  {
    title: "Energy",
    items: [
      { label: "PSolar", href: "/Solar" },
      { label: "Powerwall", href: "/Powerwall" },
    ],
  },
  {
    title: "Support",
    items: [
      { label: "News", href: "/News" },
      { label: "FAQ", href: "/faq" },
      { label: "Find Us", href: "/Find Us" },
      { label: "Contact", href: "/Contact" },
    ],
  },
];

export const socialLinks = [
  {
    id: "kakao",
    label: "KakaoTalk 채널",
    href: "https://pf.kakao.com/your-channel",
    icon: RiKakaoTalkFill
  },
  {
    id: "instagram",
    abel: "Instagram",
    href: "https://www.instagram.com/your-instagram",
    icon: FaInstagramSquare
  },
  {
    id: "youtube", 
    label: "YouTube",
    href: "https://www.youtube.com/@your-youtube",
    icon: FaYoutube
  },
];
