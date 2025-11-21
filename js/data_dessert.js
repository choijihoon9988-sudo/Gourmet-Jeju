// js/data_dessert.js
// 디저트 (베이커리, 잼, 음료, 스낵) 데이터베이스
// Source: 미국치즈_부라타 외.pdf

const dessertData = [
    // --- VANDEMOORTELE (베이커리 생지) ---
    { id: 50001, name: '반데모르텔 버터 크루아상 생지', brand: 'Vandemoortele', category: 'dessert', spec: '60g x 76ea', image: 'https://via.placeholder.com/150?text=Croissant', tag: '냉동생지' },
    { id: 50002, name: '반데모르텔 미니 애플 턴오버', brand: 'Vandemoortele', category: 'dessert', spec: '40g x 150ea', image: 'https://via.placeholder.com/150?text=Apple+Turnover', tag: '뷔페용' },
    { id: 50015, name: '반데모르텔 뺑 오 쇼콜라', brand: 'Vandemoortele', category: 'dessert', spec: '70g x 60ea', image: 'https://via.placeholder.com/150?text=Choco', tag: '냉동생지' },

    // --- SNACKS & COOKIES ---
    { id: 50003, name: '보노미 사보이아르디', brand: 'Bonomi', category: 'dessert', spec: '400g', image: 'https://via.placeholder.com/150?text=Savoiardi', tag: '티라미수' },
    { id: 50004, name: '렉산드 크리스프 브레드', brand: 'Leksands', category: 'dessert', spec: '200g', image: 'https://via.placeholder.com/150?text=Crisp+Bread', tag: '건강식' },
    { id: 50009, name: '스페라리 무설탕 캔디', brand: 'Sperlari', category: 'dessert', spec: '70g', image: 'https://via.placeholder.com/150?text=Candy', tag: '무설탕' },
    { id: 50008, name: '카라멜 디즈니 솔티드 버터 카라멜', brand: 'Caramels d\'Isigny', category: 'dessert', spec: '150g', image: 'https://via.placeholder.com/150?text=Caramels', tag: '이즈니' },

    // --- JAM (잼) ---
    { id: 50005, name: '알랭 밀리아 딸기잼', brand: 'Alain Milliat', category: 'dessert', spec: '300g', image: 'https://via.placeholder.com/150?text=Strawberry', tag: '프리미엄' },
    { id: 50006, name: '알랭 밀리아 살구잼', brand: 'Alain Milliat', category: 'dessert', spec: '300g', image: 'https://via.placeholder.com/150?text=Apricot', tag: '호텔조식' },
    { id: 50007, name: '벨베리 라즈베리 잼', brand: 'Belberry', category: 'dessert', spec: '215g', image: 'https://via.placeholder.com/150?text=Raspberry', tag: '벨기에' },

    // --- BEVERAGE (음료) ---
    { id: 50010, name: '타코 수박 주스', brand: 'Tako', category: 'dessert', spec: '330ml', image: 'https://via.placeholder.com/150?text=Tako', tag: '태국' },
    { id: 50011, name: '타코 망고스틴 주스', brand: 'Tako', category: 'dessert', spec: '330ml', image: 'https://via.placeholder.com/150?text=Mangosteen', tag: '열대과일' },
    { id: 50012, name: '로리나 스파클링 레모네이드', brand: 'Lorina', category: 'dessert', spec: '330ml', image: 'https://via.placeholder.com/150?text=Lorina', tag: '프랑스' },
    { id: 50013, name: '톰아치오 유기농 소다', brand: 'Tomarchio', category: 'dessert', spec: '275ml', image: 'https://via.placeholder.com/150?text=Soda', tag: '유기농' },
    { id: 50014, name: '니피스 오렌지 주스', brand: 'Nippy\'s', category: 'dessert', spec: '1L', image: 'https://via.placeholder.com/150?text=Nippys', tag: '무가당' }
];