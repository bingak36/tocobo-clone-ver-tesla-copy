
const img = (path) => `/tesla-image/${path}`

export const headerData = {

    logo: {
        src: img('Logo.svg'),
        alt: 'TESLA',
        href: '/'
    },
    menus: [
        {
            id: 'hero',
            label: 'Hero',
            href: '#hero',
            type: 'section'
        },
        {
            id: 'follow',
            label: 'Follow',
            href: '#follow',
            type: 'section'
        },
        {
            id: 'collection',
            label: 'Collection',
            href: '#collection',
            type: 'section'
        },
        {
            id: 'skincare',
            label: 'Introduction',
            href: '#skincare',
            type: 'section'
        },
        {
            id: 'instargram',
            label: 'SNS',
            href: '#instargram',
            type: 'section'
        },
    ],
    utils: [
        { id: "search", label: "검색", icon: img("header-icon-1.svg"), href: "#" },
        { id: "account", label: "마이", icon: img("header-icon-2.svg"), href: "#" },
        { id: "cart", label: "장바", icon: img("header-icon-3.svg"), href: "#" },
    ],
    // 상단 공지/배너 (TopBanner용)
   topBanner: {
        enabled: true,
        height: 64,
        items: [
            { id: "tb-1", text: "테슬라를 타고 어디든 다녀보세요", href: "#"},
            { id: "tb-2", text: "테슬라 소프트웨어 업데이트", href: "#"},
            { id: "tb-3", text: "이벤트 진행 중 !", href: "#"},
        ],
        closeIcon: img("btn_aside_close.png"),
        background: "#DC272D",
        color: "#fff",
    },
}