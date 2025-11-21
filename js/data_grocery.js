// js/data_grocery.js
// 가공식품 (파스타, 오일, 소스, 향신료 등) 데이터

const groceryData = [
    // --- DIVELLA: Pasta (Long) ---
    { id: 30001, name: '디벨라 스파게티 1.75mm', brand: 'Divella', category: 'grocery', spec: '500g', image: 'https://via.placeholder.com/150?text=Spaghetti', tag: 'BEST' },
    { id: 30002, name: '디벨라 스파게티 1.75mm (대용량)', brand: 'Divella', category: 'grocery', spec: '5kg', image: 'https://via.placeholder.com/150?text=Spaghetti+5kg', tag: '업소용' },
    { id: 30003, name: '디벨라 스파게티니 1.55mm', brand: 'Divella', category: 'grocery', spec: '500g', image: 'https://via.placeholder.com/150?text=Spaghettini', tag: '' },
    { id: 30004, name: '디벨라 링귀네', brand: 'Divella', category: 'grocery', spec: '500g', image: 'https://via.placeholder.com/150?text=Linguine', tag: '오일파스타' },
    { id: 30005, name: '디벨라 페투치네', brand: 'Divella', category: 'grocery', spec: '500g', image: 'https://via.placeholder.com/150?text=Fettuccine', tag: '크림파스타' },
    { id: 30006, name: '디벨라 까펠리니 (엔젤헤어)', brand: 'Divella', category: 'grocery', spec: '500g', image: 'https://via.placeholder.com/150?text=Capellini', tag: '냉파스타' },
    { id: 30007, name: '디벨라 베르미첼리', brand: 'Divella', category: 'grocery', spec: '500g', image: 'https://via.placeholder.com/150?text=Vermicelli', tag: '' },
    { id: 30008, name: '디벨라 부까띠니', brand: 'Divella', category: 'grocery', spec: '500g', image: 'https://via.placeholder.com/150?text=Bucatini', tag: '' },
    { id: 30009, name: '디벨라 마팔디네', brand: 'Divella', category: 'grocery', spec: '500g', image: 'https://via.placeholder.com/150?text=Mafaldine', tag: '' },
    
    // --- DIVELLA: Pasta (Short/Special) ---
    { id: 30010, name: '디벨라 펜네 지티 리가테', brand: 'Divella', category: 'grocery', spec: '500g', image: 'https://via.placeholder.com/150?text=Penne', tag: 'BEST' },
    { id: 30011, name: '디벨라 푸질리', brand: 'Divella', category: 'grocery', spec: '500g', image: 'https://via.placeholder.com/150?text=Fusilli', tag: '샐러드용' },
    { id: 30012, name: '디벨라 파르팔레 (나비모양)', brand: 'Divella', category: 'grocery', spec: '500g', image: 'https://via.placeholder.com/150?text=Farfalle', tag: '' },
    { id: 30013, name: '디벨라 뇨끼 (쉘)', brand: 'Divella', category: 'grocery', spec: '500g', image: 'https://via.placeholder.com/150?text=Gnocchi', tag: '' },
    { id: 30014, name: '디벨라 리가토니', brand: 'Divella', category: 'grocery', spec: '500g', image: 'https://via.placeholder.com/150?text=Rigatoni', tag: '' },
    { id: 30015, name: '디벨라 오레끼에떼', brand: 'Divella', category: 'grocery', spec: '500g', image: 'https://via.placeholder.com/150?text=Orecchiette', tag: '수제비식감' },
    { id: 30016, name: '디벨라 라자냐 (세몰리나)', brand: 'Divella', category: 'grocery', spec: '500g', image: 'https://via.placeholder.com/150?text=Lasagne', tag: '오븐용' },
    { id: 30017, name: '디벨라 깐넬로니', brand: 'Divella', category: 'grocery', spec: '250g', image: 'https://via.placeholder.com/150?text=Cannelloni', tag: '' },
    { id: 30018, name: '디벨라 파케리', brand: 'Divella', category: 'grocery', spec: '500g', image: 'https://via.placeholder.com/150?text=Paccheri', tag: '나폴리' },
    { id: 30019, name: '디벨라 콘킬리오니', brand: 'Divella', category: 'grocery', spec: '500g', image: 'https://via.placeholder.com/150?text=Conchiglioni', tag: '대형쉘' },

    // --- DIVELLA: Special Line ---
    { id: 30020, name: '디벨라 통밀 스파게티', brand: 'Divella', category: 'grocery', spec: '500g', image: 'https://via.placeholder.com/150?text=Whole+Wheat', tag: '건강식' },
    { id: 30021, name: '디벨라 통밀 펜네', brand: 'Divella', category: 'grocery', spec: '500g', image: 'https://via.placeholder.com/150?text=Whole+Penne', tag: '' },
    { id: 30022, name: '디벨라 삼색 푸질리 (토마토/시금치)', brand: 'Divella', category: 'grocery', spec: '500g', image: 'https://via.placeholder.com/150?text=Tricolore', tag: '' },
    { id: 30023, name: '디벨라 에그 탈리아텔레', brand: 'Divella', category: 'grocery', spec: '500g', image: 'https://via.placeholder.com/150?text=Egg+Pasta', tag: '계란함유' },

    // --- DIVELLA: Tomato & Sauce ---
    { id: 30024, name: '디벨라 홀 토마토 (캔)', brand: 'Divella', category: 'grocery', spec: '2.5kg', image: 'https://via.placeholder.com/150?text=Whole+Tomato', tag: '업소용' },
    { id: 30025, name: '디벨라 홀 토마토 (소)', brand: 'Divella', category: 'grocery', spec: '400g', image: 'https://via.placeholder.com/150?text=Whole+Tomato+S', tag: '' },
    { id: 30026, name: '디벨라 꾸베띠 (다이스) 토마토', brand: 'Divella', category: 'grocery', spec: '2.5kg', image: 'https://via.placeholder.com/150?text=Cubetti', tag: '업소용' },
    { id: 30027, name: '디벨라 토마토 퓨레 (파사타)', brand: 'Divella', category: 'grocery', spec: '680g', image: 'https://via.placeholder.com/150?text=Passata', tag: '' },
    { id: 30028, name: '디벨라 제노베제 바질 페스토', brand: 'Divella', category: 'grocery', spec: '190g', image: 'https://via.placeholder.com/150?text=Basil+Pesto', tag: '' },
    { id: 30029, name: '디벨라 시칠리안 페스토', brand: 'Divella', category: 'grocery', spec: '190g', image: 'https://via.placeholder.com/150?text=Sicilian+Pesto', tag: '' },

    // --- DIVELLA: Oil & Vinegar & Flour ---
    { id: 30030, name: '디벨라 엑스트라 버진 올리브오일', brand: 'Divella', category: 'grocery', spec: '1L', image: 'https://via.placeholder.com/150?text=EVOO', tag: '이탈리아' },
    { id: 30031, name: '디벨라 포마스 올리브오일 (조리용)', brand: 'Divella', category: 'grocery', spec: '1L', image: 'https://via.placeholder.com/150?text=Pomace+Oil', tag: '튀김용' },
    { id: 30032, name: '디벨라 발사믹 식초', brand: 'Divella', category: 'grocery', spec: '500ml', image: 'https://via.placeholder.com/150?text=Balsamic', tag: '' },
    { id: 30033, name: '디벨라 세몰리나 밀가루', brand: 'Divella', category: 'grocery', spec: '1kg', image: 'https://via.placeholder.com/150?text=Semolina', tag: '파스타용' },
    { id: 30034, name: '디벨라 피자용 밀가루 (00)', brand: 'Divella', category: 'grocery', spec: '25kg', image: 'https://via.placeholder.com/150?text=Pizza+Flour', tag: '업소용' },
    
    // --- STAR (스타) ---
    { id: 30101, name: '스타 다도 클래식 (비프 스톡)', brand: 'Star', category: 'grocery', spec: '100g (10ea)', image: 'https://via.placeholder.com/150?text=Dado+Beef', tag: '육수' },
    { id: 30102, name: '스타 다도 베지탈레 (야채 스톡)', brand: 'Star', category: 'grocery', spec: '100g (10ea)', image: 'https://via.placeholder.com/150?text=Dado+Veg', tag: '채수' },
    { id: 30103, name: '스타 다도 델리카토 (치킨 스톡)', brand: 'Star', category: 'grocery', spec: '100g (10ea)', image: 'https://via.placeholder.com/150?text=Dado+Chicken', tag: '치킨스톡' },
    { id: 30104, name: '스타 구스토 포르치니 (버섯 스톡)', brand: 'Star', category: 'grocery', spec: '500g', image: 'https://via.placeholder.com/150?text=Porcini+Stock', tag: '리조또용' },
    { id: 30105, name: '스타 구스토 마레 (해산물 스톡)', brand: 'Star', category: 'grocery', spec: '500g', image: 'https://via.placeholder.com/150?text=Mare+Stock', tag: '해물육수' },
    { id: 30106, name: '스타 라구 소스 (볼로네제)', brand: 'Star', category: 'grocery', spec: '180g x 2', image: 'https://via.placeholder.com/150?text=Ragu', tag: '' },

    // --- POLLI (폴리) ---
    { id: 30201, name: '폴리 씨없는 블랙 올리브', brand: 'Polli', category: 'grocery', spec: '130g', image: 'https://via.placeholder.com/150?text=Black+Olive', tag: '슬라이스' },
    { id: 30202, name: '폴리 씨없는 그린 올리브', brand: 'Polli', category: 'grocery', spec: '290g', image: 'https://via.placeholder.com/150?text=Green+Olive', tag: '' },
    { id: 30203, name: '폴리 케이퍼 (식초 절임)', brand: 'Polli', category: 'grocery', spec: '100g', image: 'https://via.placeholder.com/150?text=Caper', tag: '' },
    { id: 30204, name: '폴리 아티초크 오일 절임', brand: 'Polli', category: 'grocery', spec: '285g', image: 'https://via.placeholder.com/150?text=Artichoke', tag: '안티파스토' },
    { id: 30205, name: '폴리 선드라이 토마토', brand: 'Polli', category: 'grocery', spec: '285g', image: 'https://via.placeholder.com/150?text=Sundried', tag: '' },
    { id: 30206, name: '폴리 바질 페스토', brand: 'Polli', category: 'grocery', spec: '190g', image: 'https://via.placeholder.com/150?text=Basil+Pesto', tag: '인기' },
    { id: 30207, name: '폴리 오이피클 (코니숑 스타일)', brand: 'Polli', category: 'grocery', spec: '300g', image: 'https://via.placeholder.com/150?text=Pickles', tag: '' },

    // --- CANNAMELA (칸나멜라) ---
    { id: 30301, name: '칸나멜라 흑후추 그라인더', brand: 'Cannamela', category: 'grocery', spec: '28g', image: 'https://via.placeholder.com/150?text=Black+Pepper', tag: '그라인더' },
    { id: 30302, name: '칸나멜라 핑크 히말라야 소금', brand: 'Cannamela', category: 'grocery', spec: '60g', image: 'https://via.placeholder.com/150?text=Pink+Salt', tag: '그라인더' },
    { id: 30303, name: '칸나멜라 페페론치노 (홀)', brand: 'Cannamela', category: 'grocery', spec: '21g', image: 'https://via.placeholder.com/150?text=Peperoncino', tag: '매운맛' },
    { id: 30304, name: '칸나멜라 유기농 오레가노', brand: 'Cannamela', category: 'grocery', spec: '10g', image: 'https://via.placeholder.com/150?text=Oregano', tag: '유기농' },
    { id: 30305, name: '칸나멜라 유기농 로즈마리', brand: 'Cannamela', category: 'grocery', spec: '30g', image: 'https://via.placeholder.com/150?text=Rosemary', tag: '유기농' },
    { id: 30306, name: '칸나멜라 파슬리', brand: 'Cannamela', category: 'grocery', spec: '8g', image: 'https://via.placeholder.com/150?text=Parsley', tag: '' },
    { id: 30307, name: '칸나멜라 바질', brand: 'Cannamela', category: 'grocery', spec: '8g', image: 'https://via.placeholder.com/150?text=Basil', tag: '' },
    { id: 30308, name: '칸나멜라 시나몬 스틱', brand: 'Cannamela', category: 'grocery', spec: '10g', image: 'https://via.placeholder.com/150?text=Cinnamon', tag: '' },
    { id: 30309, name: '칸나멜라 넛맥 (홀)', brand: 'Cannamela', category: 'grocery', spec: '14g', image: 'https://via.placeholder.com/150?text=Nutmeg', tag: '' },
    { id: 30310, name: '칸나멜라 블루 페르시아 소금', brand: 'Cannamela', category: 'grocery', spec: '55g', image: 'https://via.placeholder.com/150?text=Blue+Salt', tag: '프리미엄' },

    // --- Premium & Specialty (기타 프리미엄) ---
    { id: 30401, name: '셀렉티아 화이트 트러플 오일', brand: 'Selektia Tartufi', category: 'grocery', spec: '250ml', image: 'https://via.placeholder.com/150?text=Truffle+Oil', tag: '트러플' },
    { id: 30402, name: '셀렉티아 트러플 소스 (타르투파타)', brand: 'Selektia Tartufi', category: 'grocery', spec: '500g', image: 'https://via.placeholder.com/150?text=Truffle+Sauce', tag: '업소용' },
    { id: 30403, name: '셀렉티아 트러플 소금', brand: 'Selektia Tartufi', category: 'grocery', spec: '100g', image: 'https://via.placeholder.com/150?text=Truffle+Salt', tag: '' },
    { id: 30404, name: '데니그리스 발사믹 식초', brand: 'De Nigris', category: 'grocery', spec: '500ml', image: 'https://via.placeholder.com/150?text=Balsamic', tag: '이탈리아' },
    { id: 30405, name: '빌라모데나 화이트 발사믹', brand: 'Villa Modena', category: 'grocery', spec: '250ml', image: 'https://via.placeholder.com/150?text=White+Balsamic', tag: '드레싱용' },
    { id: 30406, name: '프란토이오 비안코 바질페스토', brand: 'Frantoio Bianco', category: 'grocery', spec: '500g', image: 'https://via.placeholder.com/150?text=Genovese+Pesto', tag: '프리미엄' },
    { id: 30407, name: '에밀레 노엘 유기농 아보카도 오일', brand: 'Emile Noel', category: 'grocery', spec: '250ml', image: 'https://via.placeholder.com/150?text=Avocado+Oil', tag: '유기농' },
    { id: 30408, name: '에드몬드 팔롯 홀그레인 머스타드', brand: 'Edmond Fallot', category: 'grocery', spec: '205g', image: 'https://via.placeholder.com/150?text=Whole+Mustard', tag: '프랑스' },
    { id: 30409, name: '에드몬드 팔롯 디종 머스타드', brand: 'Edmond Fallot', category: 'grocery', spec: '210g', image: 'https://via.placeholder.com/150?text=Dijon+Mustard', tag: '프랑스' },
    { id: 30410, name: '리우니오네 오징어 먹물', brand: 'Riunione', category: 'grocery', spec: '500g', image: 'https://via.placeholder.com/150?text=Squid+Ink', tag: '' },
    { id: 30411, name: '비아 쿠스쿠스', brand: 'Bia', category: 'grocery', spec: '500g', image: 'https://via.placeholder.com/150?text=Couscous', tag: '' },
    { id: 30412, name: '페스캐비어 아브루가 (캐비어 대용)', brand: 'Pescaviar', category: 'grocery', spec: '55g', image: 'https://via.placeholder.com/150?text=Avruga', tag: '가니쉬' },
    { id: 30413, name: '코시마르 앤초비 필레', brand: 'Cosimar', category: 'grocery', spec: '700g', image: 'https://via.placeholder.com/150?text=Anchovy', tag: '대용량' },
    { id: 30414, name: '메를리니 건조 포르치니 버섯', brand: 'Merlini', category: 'grocery', spec: '453g', image: 'https://via.placeholder.com/150?text=Dried+Porcini', tag: '고급' }
];