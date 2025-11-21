// js/data_grocery.js
// 가공식품 (파스타, 오일, 소스, 향신료) 데이터베이스
// Source: 파스타,오일,향신료 외.pdf

const groceryData = [
    // --- DIVELLA (파스타/소스/오일) ---
    { id: 30001, name: '디벨라 스파게티 1.75mm', brand: 'Divella', category: 'grocery', spec: '500g', image: 'images/logos/divella.png', tag: 'BEST' },
    { id: 30002, name: '디벨라 스파게티니 1.55mm', brand: 'Divella', category: 'grocery', spec: '500g', image: 'images/logos/divella.png', tag: '' },
    { id: 30003, name: '디벨라 링귀네', brand: 'Divella', category: 'grocery', spec: '500g', image: 'images/logos/divella.png', tag: '오일파스타' },
    { id: 30004, name: '디벨라 페투치네', brand: 'Divella', category: 'grocery', spec: '500g', image: 'images/logos/divella.png', tag: '크림파스타' },
    { id: 30005, name: '디벨라 펜네 리가테', brand: 'Divella', category: 'grocery', spec: '500g', image: 'images/logos/divella.png', tag: '숏파스타' },
    { id: 30006, name: '디벨라 푸질리', brand: 'Divella', category: 'grocery', spec: '500g', image: 'images/logos/divella.png', tag: '샐러드용' },
    { id: 30007, name: '디벨라 엑스트라 버진 올리브오일', brand: 'Divella', category: 'grocery', spec: '1L', image: 'images/logos/divella.png', tag: 'EVOO' },
    { id: 30008, name: '디벨라 홀 토마토 (캔)', brand: 'Divella', category: 'grocery', spec: '2.5kg', image: 'images/logos/divella.png', tag: '업소용' },
    { id: 30009, name: '디벨라 꾸베띠 토마토', brand: 'Divella', category: 'grocery', spec: '2.5kg', image: 'images/logos/divella.png', tag: '다이스' },
    { id: 30010, name: '디벨라 토마토 퓨레', brand: 'Divella', category: 'grocery', spec: '680g', image: 'images/logos/divella.png', tag: '소스용' },
    { id: 30011, name: '디벨라 바질 페스토', brand: 'Divella', category: 'grocery', spec: '190g', image: 'images/logos/divella.png', tag: '' },
    { id: 30033, name: '디벨라 세몰리나 밀가루', brand: 'Divella', category: 'grocery', spec: '1kg', image: 'images/logos/divella.png', tag: '파스타용' },
    { id: 30034, name: '디벨라 포마스 오일', brand: 'Divella', category: 'grocery', spec: '1L', image: 'images/logos/divella.png', tag: '조리용' },

    // --- STAR (스톡/소스) ---
    { id: 30101, name: '스타 다도 비프 스톡', brand: 'Star', category: 'grocery', spec: '100g', image: 'https://via.placeholder.com/150?text=Star+Beef', tag: '육수' },
    { id: 30102, name: '스타 다도 치킨 스톡', brand: 'Star', category: 'grocery', spec: '100g', image: 'https://via.placeholder.com/150?text=Star+Chicken', tag: '치킨' },
    { id: 30104, name: '스타 구스토 포르치니 스톡', brand: 'Star', category: 'grocery', spec: '500g', image: 'https://via.placeholder.com/150?text=Porcini', tag: '버섯' },
    { id: 30106, name: '스타 라구 소스', brand: 'Star', category: 'grocery', spec: '180g', image: 'https://via.placeholder.com/150?text=Ragu', tag: '볼로네제' },

    // --- POLLI (절임/페스토) ---
    { id: 30201, name: '폴리 씨없는 블랙 올리브', brand: 'Polli', category: 'grocery', spec: '130g', image: 'https://via.placeholder.com/150?text=Polli+Black', tag: '안주' },
    { id: 30204, name: '폴리 아티초크 오일 절임', brand: 'Polli', category: 'grocery', spec: '285g', image: 'https://via.placeholder.com/150?text=Artichoke', tag: '토핑' },
    { id: 30205, name: '폴리 선드라이 토마토', brand: 'Polli', category: 'grocery', spec: '285g', image: 'https://via.placeholder.com/150?text=Sundried', tag: '파스타용' },
    { id: 30206, name: '폴리 바질 페스토', brand: 'Polli', category: 'grocery', spec: '190g', image: 'https://via.placeholder.com/150?text=Polli+Pesto', tag: '' },

    // --- CANNAMELA (향신료) ---
    { id: 30301, name: '칸나멜라 흑후추 그라인더', brand: 'Cannamela', category: 'grocery', spec: '28g', image: 'images/logos/cannamela.png', tag: '그라인더' },
    { id: 30302, name: '칸나멜라 핑크 히말라야 소금', brand: 'Cannamela', category: 'grocery', spec: '60g', image: 'images/logos/cannamela.png', tag: '그라인더' },
    { id: 30303, name: '칸나멜라 페페론치노 홀', brand: 'Cannamela', category: 'grocery', spec: '21g', image: 'images/logos/cannamela.png', tag: '매콤' },
    { id: 30304, name: '칸나멜라 유기농 오레가노', brand: 'Cannamela', category: 'grocery', spec: '10g', image: 'images/logos/cannamela.png', tag: '유기농' },

    // --- PREMIUM OTHERS ---
    { id: 30401, name: '셀렉티아 화이트 트러플 오일', brand: 'Selektia Tartufi', category: 'grocery', spec: '250ml', image: 'https://via.placeholder.com/150?text=Truffle', tag: '트러플' },
    { id: 30404, name: '데니그리스 발사믹 식초', brand: 'De Nigris', category: 'grocery', spec: '500ml', image: 'https://via.placeholder.com/150?text=Balsamic', tag: '이탈리아' },
    { id: 30407, name: '에밀레 노엘 아보카도 오일', brand: 'Emile Noel', category: 'grocery', spec: '250ml', image: 'https://via.placeholder.com/150?text=Avocado', tag: '유기농' },
    { id: 30408, name: '에드몬드 팔롯 홀그레인 머스타드', brand: 'Edmond Fallot', category: 'grocery', spec: '205g', image: 'https://via.placeholder.com/150?text=Mustard', tag: '프랑스' },
    { id: 30413, name: '코시마르 앤초비 필레', brand: 'Cosimar', category: 'grocery', spec: '700g', image: 'https://via.placeholder.com/150?text=Anchovy', tag: '대용량' }
];