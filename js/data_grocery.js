// js/data_grocery.js
// 가공식품 세분화: pasta(파스타), oil(오일/식초), sauce(소스/스톡), spice(향신료), preserved(절임/캔)

const groceryData = [
    // --- PASTA ---
    { id: 30001, name: '디벨라 스파게티 1.75mm', brand: 'Divella', category: 'pasta', spec: '500g', image: 'images/logos/divella.png', tag: 'BEST' },
    { id: 30002, name: '디벨라 스파게티니 1.55mm', brand: 'Divella', category: 'pasta', spec: '1kg', image: 'images/logos/divella.png', tag: '' },
    { id: 30003, name: '디벨라 링귀네', brand: 'Divella', category: 'pasta', spec: '500g', image: 'images/logos/divella.png', tag: '오일파스타' },
    { id: 30004, name: '디벨라 페투치네', brand: 'Divella', category: 'pasta', spec: '500g', image: 'images/logos/divella.png', tag: '크림파스타' },
    { id: 30005, name: '디벨라 펜네 리가테', brand: 'Divella', category: 'pasta', spec: '500g', image: 'images/logos/divella.png', tag: '숏파스타' },
    { id: 30006, name: '디벨라 푸질리', brand: 'Divella', category: 'pasta', spec: '500g', image: 'images/logos/divella.png', tag: '샐러드용' },
    { id: 30033, name: '디벨라 세몰리나 밀가루', brand: 'Divella', category: 'pasta', spec: '1kg', image: 'images/logos/divella.png', tag: '파스타용' },
    { id: 30026, name: '비아 쿠스쿠스', brand: 'Bia', category: 'pasta', spec: '500g', image: 'https://via.placeholder.com/150?text=Couscous', tag: '' },
    { id: 30411, name: '라나 라비올리 포르치니', brand: 'Rana', category: 'pasta', spec: '250g', image: 'https://via.placeholder.com/150?text=Rana', tag: '생면' },

    // --- OIL & VINEGAR ---
    { id: 30007, name: '디벨라 엑스트라 버진 올리브오일', brand: 'Divella', category: 'oil', spec: '1L', image: 'images/logos/divella.png', tag: 'EVOO' },
    { id: 30034, name: '디벨라 포마스 오일', brand: 'Divella', category: 'oil', spec: '1L', image: 'images/logos/divella.png', tag: '조리용' },
    { id: 30029, name: '데니그리스 발사믹 식초', brand: 'De Nigris', category: 'oil', spec: '500ml', image: 'https://via.placeholder.com/150?text=Balsamic', tag: '이탈리아' },
    { id: 30030, name: '빌라모데나 화이트 발사믹', brand: 'Villa Modena', category: 'oil', spec: '250ml', image: 'https://via.placeholder.com/150?text=White+Balsamic', tag: '드레싱용' },
    { id: 30033, name: '에밀레 노엘 유기농 아보카도 오일', brand: 'Emile Noel', category: 'oil', spec: '250ml', image: 'https://via.placeholder.com/150?text=Avocado+Oil', tag: '유기농' },
    { id: 30401, name: '셀렉티아 화이트 트러플 오일', brand: 'Selektia Tartufi', category: 'oil', spec: '250ml', image: 'https://via.placeholder.com/150?text=Truffle', tag: '트러플' },

    // --- SAUCE, STOCK, PESTO ---
    { id: 30010, name: '디벨라 토마토 퓨레', brand: 'Divella', category: 'sauce', spec: '680g', image: 'images/logos/divella.png', tag: '소스용' },
    { id: 30011, name: '디벨라 바질 페스토', brand: 'Divella', category: 'sauce', spec: '190g', image: 'images/logos/divella.png', tag: '' },
    { id: 30012, name: '스타 다도 비프 스톡', brand: 'Star', category: 'sauce', spec: '100g', image: 'https://via.placeholder.com/150?text=Star+Beef', tag: '육수' },
    { id: 30013, name: '스타 다도 치킨 스톡', brand: 'Star', category: 'sauce', spec: '100g', image: 'https://via.placeholder.com/150?text=Star+Chicken', tag: '치킨' },
    { id: 30104, name: '스타 구스토 포르치니 스톡', brand: 'Star', category: 'sauce', spec: '500g', image: 'https://via.placeholder.com/150?text=Porcini', tag: '버섯' },
    { id: 30106, name: '스타 라구 소스', brand: 'Star', category: 'sauce', spec: '180g', image: 'https://via.placeholder.com/150?text=Ragu', tag: '볼로네제' },
    { id: 30206, name: '폴리 바질 페스토', brand: 'Polli', category: 'sauce', spec: '190g', image: 'https://via.placeholder.com/150?text=Polli+Pesto', tag: '' },
    { id: 30402, name: '셀렉티아 트러플 소스 (타르투파타)', brand: 'Selektia Tartufi', category: 'sauce', spec: '500g', image: 'https://via.placeholder.com/150?text=Truffle+Sauce', tag: '업소용' },
    { id: 30406, name: '프란토이오 비안코 바질페스토', brand: 'Frantoio Bianco', category: 'sauce', spec: '500g', image: 'https://via.placeholder.com/150?text=Genovese+Pesto', tag: '프리미엄' },
    { id: 30027, name: '에드몬드 팔롯 홀그레인 머스타드', brand: 'Edmond Fallot', category: 'sauce', spec: '205g', image: 'https://via.placeholder.com/150?text=Whole+Mustard', tag: '' },
    { id: 30028, name: '에드몬드 팔롯 디종 머스타드', brand: 'Edmond Fallot', category: 'sauce', spec: '210g', image: 'https://via.placeholder.com/150?text=Dijon+Mustard', tag: '' },

    // --- SPICE (SALT, PEPPER, TRUFFLE) ---
    { id: 30019, name: '칸나멜라 흑후추 그라인더', brand: 'Cannamela', category: 'spice', spec: '28g', image: 'images/logos/cannamela.png', tag: '그라인더' },
    { id: 30020, name: '칸나멜라 핑크 히말라야 소금', brand: 'Cannamela', category: 'spice', spec: '60g', image: 'images/logos/cannamela.png', tag: '그라인더' },
    { id: 30021, name: '칸나멜라 페페론치노 홀', brand: 'Cannamela', category: 'spice', spec: '21g', image: 'images/logos/cannamela.png', tag: '매콤' },
    { id: 30304, name: '칸나멜라 유기농 오레가노', brand: 'Cannamela', category: 'spice', spec: '10g', image: 'images/logos/cannamela.png', tag: '유기농' },
    { id: 30310, name: '칸나멜라 블루 페르시아 소금', brand: 'Cannamela', category: 'spice', spec: '55g', image: 'images/logos/cannamela.png', tag: '프리미엄' },
    { id: 30403, name: '셀렉티아 트러플 소금', brand: 'Selektia Tartufi', category: 'spice', spec: '100g', image: 'https://via.placeholder.com/150?text=Truffle+Salt', tag: '' },

    // --- PRESERVED (OLIVE, PICKLE, CANNED) ---
    { id: 30008, name: '디벨라 홀 토마토 (캔)', brand: 'Divella', category: 'preserved', spec: '2.5kg', image: 'images/logos/divella.png', tag: '업소용' },
    { id: 30009, name: '디벨라 꾸베띠 토마토', brand: 'Divella', category: 'preserved', spec: '2.5kg', image: 'images/logos/divella.png', tag: '다이스' },
    { id: 30016, name: '폴리 아티초크 오일 절임', brand: 'Polli', category: 'preserved', spec: '285g', image: 'https://via.placeholder.com/150?text=Artichoke', tag: '' },
    { id: 30017, name: '폴리 씨없는 블랙 올리브', brand: 'Polli', category: 'preserved', spec: '130g', image: 'https://via.placeholder.com/150?text=Black+Olive', tag: '' },
    { id: 30018, name: '폴리 케이퍼', brand: 'Polli', category: 'preserved', spec: '100g', image: 'https://via.placeholder.com/150?text=Caper', tag: '' },
    { id: 30205, name: '폴리 선드라이 토마토', brand: 'Polli', category: 'preserved', spec: '285g', image: 'https://via.placeholder.com/150?text=Sundried', tag: '파스타용' },
    { id: 30031, name: '페트루젤리 그린 올리브', brand: 'Petruzzelli', category: 'preserved', spec: '560g', image: 'https://via.placeholder.com/150?text=Green+Olive', tag: '' },
    { id: 30035, name: '미치오 그린 올리브', brand: 'Miccio', category: 'preserved', spec: '530g', image: 'https://via.placeholder.com/150?text=Miccio+Olive', tag: '' },
    { id: 30025, name: '리우니오네 오징어 먹물', brand: 'Riunione', category: 'preserved', spec: '500g', image: 'https://via.placeholder.com/150?text=Squid+Ink', tag: '' },
    { id: 30036, name: '페스캐비어 아브루가', brand: 'Pescaviar', category: 'preserved', spec: '55g', image: 'https://via.placeholder.com/150?text=Avruga', tag: '캐비어대용' },
    { id: 30037, name: '코시마르 앤초비 필레', brand: 'Cosimar', category: 'preserved', spec: '700g', image: 'https://via.placeholder.com/150?text=Anchovy', tag: '대용량' },
    { id: 30414, name: '메를리니 건조 포르치니 버섯', brand: 'Merlini', category: 'preserved', spec: '453g', image: 'https://via.placeholder.com/150?text=Dried+Porcini', tag: '고급' }
];