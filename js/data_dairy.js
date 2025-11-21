// js/data_dairy.js
// 유제품 세분화: cheese(치즈), butter(버터/크림), yogurt(요거트/간식)

const dairyData = [
    // --- BUTTER & CREAM ---
    { id: 10001, name: '이즈니 AOP 버터 롤 (가염)', brand: 'Isigny Ste-Mère', category: 'butter', spec: '250g', image: 'images/logos/isigny.png', tag: 'AOP' },
    { id: 10002, name: '이즈니 AOP 버터 롤 (무염)', brand: 'Isigny Ste-Mère', category: 'butter', spec: '250g', image: 'images/logos/isigny.png', tag: 'AOP' },
    { id: 10003, name: '이즈니 포션 버터 (컵)', brand: 'Isigny Ste-Mère', category: 'butter', spec: '10g x 60ea', image: 'images/logos/isigny.png', tag: '호텔납품' },
    { id: 10004, name: '이즈니 생메르 크렘 프레쉬 AOP', brand: 'Isigny Ste-Mère', category: 'butter', spec: '200ml', image: 'images/logos/isigny.png', tag: '소스용' },
    { id: 10008, name: '이즈니 AOP 버터 브릭', brand: 'Isigny Ste-Mère', category: 'butter', spec: '250g', image: 'images/logos/isigny.png', tag: 'AOP' },
    { id: 10009, name: '이즈니 오가닉 버터 브릭', brand: 'Isigny Ste-Mère', category: 'butter', spec: '200g', image: 'images/logos/isigny.png', tag: '유기농' },
    { id: 10010, name: '이즈니 냉동 버터 벌크', brand: 'Isigny Ste-Mère', category: 'butter', spec: '10kg', image: 'images/logos/isigny.png', tag: '대용량' },
    // [New] Butter & Cream
    { id: 10066, name: '이즈니 AOP 버터 시트', brand: 'Isigny Ste-Mère', category: 'butter', spec: '1kg', image: 'images/logos/isigny.png', tag: '베이킹' },
    { id: 10067, name: '이즈니 미니 버터 AOP (포션)', brand: 'Isigny Ste-Mère', category: 'butter', spec: '25g', image: 'images/logos/isigny.png', tag: '조식용' },
    { id: 10068, name: '레스큐어 UHT 휘핑크림', brand: 'Lescure', category: 'butter', spec: '1L', image: 'https://via.placeholder.com/150?text=Lescure', tag: '프랑스' },
    { id: 10069, name: '데본 클로티드 크림', brand: 'Devon Cream Company', category: 'butter', spec: '170g', image: 'https://via.placeholder.com/150?text=Clotted+Cream', tag: '스콘' },
    { id: 10070, name: '르 갈 브르타뉴 버터', brand: 'Le Gall', category: 'butter', spec: '250g', image: 'https://via.placeholder.com/150?text=Le+Gall', tag: '발효버터' },
    { id: 10071, name: '브리오이스 고메 버터 블럭', brand: 'Briois', category: 'butter', spec: '5kg', image: 'https://via.placeholder.com/150?text=Briois', tag: '업소용' },
    
    { id: 10024, name: '엠보그 휘핑크림', brand: 'Emborg', category: 'butter', spec: '1L', image: 'https://via.placeholder.com/150?text=Emborg', tag: '제과용' },
    { id: 10025, name: '엠보그 사우어 크림', brand: 'Emborg', category: 'butter', spec: '1L', image: 'https://via.placeholder.com/150?text=Emborg', tag: '업소용' },
    { id: 10026, name: '오가닉밸리 유기농 기 버터', brand: 'Organic Valley', category: 'butter', spec: '212g', image: 'https://via.placeholder.com/150?text=Organic+Valley', tag: '유기농' },
    { id: 10036, name: '올덴버거 휘핑크림', brand: 'Oldenburger', category: 'butter', spec: '1L', image: 'https://via.placeholder.com/150?text=Oldenburger', tag: '가성비' },
    { id: 10054, name: '브라잘레 알프스 버터 포션', brand: 'Brazzale', category: 'butter', spec: '10g', image: 'https://via.placeholder.com/150?text=Brazzale', tag: '호텔납품' },
    { id: 10062, name: '엘르&비르 고메 버터 (무염)', brand: 'Elle & Vire', category: 'butter', spec: '200g', image: 'https://via.placeholder.com/150?text=Elle', tag: '프랑스' },

    // --- CHEESE (FRESH) ---
    { id: 10011, name: '벨지오 모짜렐라 로그 슬라이스', brand: 'BelGioioso', category: 'cheese', spec: '907g', image: 'images/logos/belgioioso.png', tag: '카프레제' },
    { id: 10012, name: '벨지오 부라타 (4 balls)', brand: 'BelGioioso', category: 'cheese', spec: '226g', image: 'images/logos/belgioioso.png', tag: 'BEST' },
    { id: 10013, name: '벨지오 마스카포네', brand: 'BelGioioso', category: 'cheese', spec: '226g', image: 'images/logos/belgioioso.png', tag: '티라미수' },
    { id: 10014, name: '벨지오 리코타 미니 컵', brand: 'BelGioioso', category: 'cheese', spec: '142g', image: 'images/logos/belgioioso.png', tag: '미니' },
    { id: 10015, name: '벨지오 스트라치아렐라', brand: 'BelGioioso', category: 'cheese', spec: '226g', image: 'images/logos/belgioioso.png', tag: '부라타속' },
    { id: 10017, name: '암브로시 마스카포네', brand: 'Ambrosi', category: 'cheese', spec: '500g', image: 'images/logos/ambrosi.png', tag: '이탈리아' },
    { id: 10040, name: '브리미 모짜렐라 블록', brand: 'Brimi', category: 'cheese', spec: '1kg', image: 'https://via.placeholder.com/150?text=Brimi', tag: '피자용' },
    { id: 10041, name: '브리미 리코타', brand: 'Brimi', category: 'cheese', spec: '250g', image: 'https://via.placeholder.com/150?text=Brimi', tag: '프레쉬' },
    { id: 10042, name: '브리미 모짜렐라 락토스 프리', brand: 'Brimi', category: 'cheese', spec: '125g', image: 'https://via.placeholder.com/150?text=Lactose+Free', tag: '락토프리' },
    { id: 10049, name: '달몰리스 냉동 부라타', brand: 'Dal Molise', category: 'cheese', spec: '125g', image: 'https://via.placeholder.com/150?text=Frozen+Burrata', tag: '냉동' },
    
    // [New] Fresh Cheese
    { id: 10072, name: '이즈니 프로마쥬 블랑', brand: 'Isigny Ste-Mère', category: 'cheese', spec: '500g', image: 'images/logos/isigny.png', tag: '생치즈' },
    { id: 10073, name: '생 모레', brand: 'Savencia', category: 'cheese', spec: '150g', image: 'https://via.placeholder.com/150?text=St+Moret', tag: '크림치즈' },
    { id: 10074, name: '일드 프랑스 고트 치즈', brand: 'Ile De France', category: 'cheese', spec: '110g', image: 'https://via.placeholder.com/150?text=Goat+Cheese', tag: '염소치즈' },
    { id: 10075, name: '일드 프랑스 샤브루', brand: 'Ile De France', category: 'cheese', spec: '150g', image: 'https://via.placeholder.com/150?text=Chavroux', tag: '산양유' },
    { id: 10076, name: '밀라 마스카포네', brand: 'Mila', category: 'cheese', spec: '500g', image: 'https://via.placeholder.com/150?text=Mila', tag: '티라미수' },
    { id: 10077, name: '브리미 모짜렐라 큐브', brand: 'Brimi', category: 'cheese', spec: '150g', image: 'https://via.placeholder.com/150?text=Mozz+Cube', tag: '토핑용' },
    { id: 10078, name: '브리미 보콘치니 (모짜렐린)', brand: 'Brimi', category: 'cheese', spec: '125g', image: 'https://via.placeholder.com/150?text=Bocconcini', tag: '미니볼' },
    { id: 10079, name: '콘퀴스타 냉동 부라타', brand: 'Conquista', category: 'cheese', spec: '120g', image: 'https://via.placeholder.com/150?text=Conquista', tag: '냉동' },
    { id: 10080, name: '콜리오스 페타', brand: 'Kolios', category: 'cheese', spec: '150g', image: 'https://via.placeholder.com/150?text=Feta', tag: '그리스' },
    { id: 10081, name: '유로구뜨 모짜렐라 슈레드', brand: 'Euro Gout', category: 'cheese', spec: '280g', image: 'https://via.placeholder.com/150?text=Mozz+Shred', tag: '피자용' },
    { id: 10082, name: '유로구뜨 스트링 치즈', brand: 'Euro Gout', category: 'cheese', spec: '200g', image: 'https://via.placeholder.com/150?text=String+Cheese', tag: '간식' },
    
    // --- CHEESE (SOFT) ---
    { id: 10005, name: '이즈니 브리 치즈', brand: 'Isigny Ste-Mère', category: 'cheese', spec: '1kg', image: 'images/logos/isigny.png', tag: '업소용' },
    { id: 10006, name: '이즈니 까망베르 노르망디', brand: 'Isigny Ste-Mère', category: 'cheese', spec: '250g', image: 'images/logos/isigny.png', tag: 'AOP' },
    { id: 10057, name: '이즈니 브리 60%', brand: 'Isigny Ste-Mère', category: 'cheese', spec: '1kg', image: 'images/logos/isigny.png', tag: '더블크림' },
    { id: 10059, name: '일드 프랑스 미니 브리', brand: 'Ile De France', category: 'cheese', spec: '125g', image: 'https://via.placeholder.com/150?text=IDF', tag: '스낵' },
    { id: 10060, name: '생 앙드레', brand: 'Savencia', category: 'cheese', spec: '200g', image: 'https://via.placeholder.com/150?text=Saint+Andre', tag: '트리플크림' },
    { id: 10055, name: '에푸아스', brand: 'Germain', category: 'cheese', spec: '250g', image: 'https://via.placeholder.com/150?text=Germain', tag: '워시치즈' },
    
    // [New] Soft Cheese
    { id: 10083, name: '까망베르 르 루스띠끄', brand: 'Savencia', category: 'cheese', spec: '250g', image: 'https://via.placeholder.com/150?text=Le+Rustique', tag: '진한맛' },
    { id: 10084, name: '카프리스 데 디유', brand: 'Savencia', category: 'cheese', spec: '125g', image: 'https://via.placeholder.com/150?text=Caprice', tag: '천사치즈' },
    { id: 10085, name: '일드 프랑스 쁘띠 까망베르', brand: 'Ile De France', category: 'cheese', spec: '125g', image: 'https://via.placeholder.com/150?text=Petit+Camembert', tag: '프랑스' },
    { id: 10086, name: '본 마예네 브리', brand: 'Bons Mayennais', category: 'cheese', spec: '1kg', image: 'https://via.placeholder.com/150?text=Bons+Brie', tag: '가성비' },
    { id: 10087, name: '본 마예네 까망베르', brand: 'Bons Mayennais', category: 'cheese', spec: '250g', image: 'https://via.placeholder.com/150?text=Bons+Camembert', tag: '프랑스' },
    { id: 10088, name: '쁘띠 다피누아', brand: 'Fromager d\'Affinois', category: 'cheese', spec: '150g', image: 'https://via.placeholder.com/150?text=Affinois', tag: '더블크림' },
    { id: 10089, name: '브리에뜨 크리미 앤 마일드', brand: 'Briette', category: 'cheese', spec: '125g', image: 'https://via.placeholder.com/150?text=Briette', tag: '독일' },
    { id: 10090, name: '브리에뜨 스모키', brand: 'Briette', category: 'cheese', spec: '125g', image: 'https://via.placeholder.com/150?text=Briette+Smoky', tag: '훈제향' },

    // --- CHEESE (SEMI-HARD / HARD) ---
    { id: 10007, name: '이즈니 미몰레뜨 (6개월)', brand: 'Isigny Ste-Mère', category: 'cheese', spec: '210g', image: 'images/logos/isigny.png', tag: '숙성치즈' },
    { id: 10019, name: '암브로시 그라나 파다노', brand: 'Ambrosi', category: 'cheese', spec: '1kg', image: 'images/logos/ambrosi.png', tag: '경성치즈' },
    { id: 10020, name: '암브로시 파르미지아노 레지아노', brand: 'Ambrosi', category: 'cheese', spec: '150g', image: 'images/logos/ambrosi.png', tag: 'DOP' },
    { id: 10021, name: '엠보그 모짜렐라 슬라이스', brand: 'Emborg', category: 'cheese', spec: '150g', image: 'https://via.placeholder.com/150?text=Emborg', tag: '슬라이스' },
    { id: 10022, name: '엠보그 에멘탈 슬라이스', brand: 'Emborg', category: 'cheese', spec: '150g', image: 'https://via.placeholder.com/150?text=Emmental', tag: '슬라이스' },
    { id: 10037, name: '그랑도르 고다 미니', brand: 'Grand\'Or', category: 'cheese', spec: '100g', image: 'https://via.placeholder.com/150?text=Mini+Gouda', tag: '스낵' },
    { id: 10038, name: '그랑도르 스모크 치즈', brand: 'Grand\'Or', category: 'cheese', spec: '200g', image: 'https://via.placeholder.com/150?text=Smoked', tag: '안주' },
    
    // [New] Semi-Hard / Hard
    { id: 10091, name: '바뉴 꽁떼 6개월', brand: 'Vagne', category: 'cheese', spec: '200g', image: 'https://via.placeholder.com/150?text=Comte', tag: 'AOP' },
    { id: 10092, name: '일드 프랑스 노르망딸 슬라이스', brand: 'Ile De France', category: 'cheese', spec: '150g', image: 'https://via.placeholder.com/150?text=Normantal', tag: '슬라이스' },
    { id: 10093, name: '에미 라끌레뜨 슬라이스', brand: 'Emmi', category: 'cheese', spec: '200g', image: 'https://via.placeholder.com/150?text=Raclette', tag: '스위스' },
    { id: 10094, name: '에미 테트 드 무안', brand: 'Emmi', category: 'cheese', spec: '420g', image: 'https://via.placeholder.com/150?text=Tete+de+Moine', tag: '꽃치즈' },
    { id: 10095, name: '빔스터 로얄 그랑 크뤼', brand: 'Beemster', category: 'cheese', spec: '250g', image: 'https://via.placeholder.com/150?text=Beemster', tag: '네덜란드' },
    { id: 10096, name: '바시론 트러플', brand: 'Basiron', category: 'cheese', spec: '200g', image: 'https://via.placeholder.com/150?text=Basiron+Truffle', tag: '트러플' },
    { id: 10097, name: '바시론 페스토 로쏘', brand: 'Basiron', category: 'cheese', spec: '200g', image: 'https://via.placeholder.com/150?text=Basiron+Rosso', tag: '레드' },
    { id: 10098, name: '쿰캐슬 마일드 체다', brand: 'Coombe Castle', category: 'cheese', spec: '190g', image: 'https://via.placeholder.com/150?text=Cheddar', tag: '영국' },
    { id: 10099, name: '쿰캐슬 웬슬리데일 크랜베리', brand: 'Coombe Castle', category: 'cheese', spec: '190g', image: 'https://via.placeholder.com/150?text=Cranberry+Cheese', tag: '디저트' },
    { id: 10100, name: '만체고 슬라이스', brand: 'Garcia Baquero', category: 'cheese', spec: '110g', image: 'https://via.placeholder.com/150?text=Manchego', tag: '스페인' },
    { id: 10101, name: '허이두 파레니차', brand: 'Hajdu', category: 'cheese', spec: '190g', image: 'https://via.placeholder.com/150?text=Parenyica', tag: '헝가리' },

    // --- CHEESE (BLUE) ---
    { id: 10018, name: '암브로시 고르곤졸라 피칸테', brand: 'Ambrosi', category: 'cheese', spec: '150g', image: 'images/logos/ambrosi.png', tag: '블루치즈' },
    { id: 10061, name: '생 아구르 크림', brand: 'Savencia', category: 'cheese', spec: '150g', image: 'https://via.placeholder.com/150?text=Saint+Agur', tag: '블루크림' },
    
    // [New] Blue
    { id: 10102, name: '란젤로 고르곤졸라 돌체', brand: 'L\'angelo', category: 'cheese', spec: '150g', image: 'https://via.placeholder.com/150?text=Gorgonzola', tag: '부드러움' },
    { id: 10103, name: '쿰캐슬 블루 스틸턴', brand: 'Coombe Castle', category: 'cheese', spec: '150g', image: 'https://via.placeholder.com/150?text=Stilton', tag: '세계3대블루' },
    { id: 10104, name: '엠보그 다나 블루', brand: 'Emborg', category: 'cheese', spec: '100g', image: 'https://via.placeholder.com/150?text=Danablu', tag: '덴마크' },
    { id: 10105, name: '브레스 블루', brand: 'Savencia', category: 'cheese', spec: '140g', image: 'https://via.placeholder.com/150?text=Bresse+Bleu', tag: '크리미' },

    // --- CHEESE (PROCESSED / SPREAD) ---
    { id: 10023, name: '엠보그 크림치즈', brand: 'Emborg', category: 'cheese', spec: '1.36kg', image: 'https://via.placeholder.com/150?text=Cream+Cheese', tag: '대용량' },
    { id: 10063, name: '르 갈 크림치즈', brand: 'Le Gall', category: 'cheese', spec: '1kg', image: 'https://via.placeholder.com/150?text=Le+Gall', tag: '대용량' },
    { id: 10065, name: '알미토 체리페퍼 크림치즈', brand: 'Almito', category: 'cheese', spec: '280g', image: 'https://via.placeholder.com/150?text=Almito', tag: '안주' },
    
    // [New] Processed
    { id: 10106, name: '아페리프레 프로방스', brand: 'Ile De France', category: 'cheese', spec: '100g', image: 'https://via.placeholder.com/150?text=Aperifrais', tag: '핑거푸드' },
    { id: 10107, name: '람볼', brand: 'Savencia', category: 'cheese', spec: '125g', image: 'https://via.placeholder.com/150?text=Rambol', tag: '호두치즈' },
    { id: 10108, name: '따르따르 갈릭 앤 허브', brand: 'Savencia', category: 'cheese', spec: '150g', image: 'https://via.placeholder.com/150?text=Tartare', tag: '스프레드' },
    { id: 10109, name: '르 롤 크랜베리', brand: 'Rians', category: 'cheese', spec: '125g', image: 'https://via.placeholder.com/150?text=Le+Roule', tag: '디저트' },
    { id: 10110, name: '스모크 치즈 디스크', brand: 'Schipper', category: 'cheese', spec: '150g', image: 'https://via.placeholder.com/150?text=Smoked+Disc', tag: '네덜란드' },
    { id: 10111, name: '에루 스모크드 치즈 스프레드', brand: 'Eru', category: 'cheese', spec: '100g', image: 'https://via.placeholder.com/150?text=Eru+Spread', tag: '튜브형' },
    { id: 10112, name: '에미 퐁듀 오리지널', brand: 'Emmi', category: 'cheese', spec: '400g', image: 'https://via.placeholder.com/150?text=Fondue', tag: '간편식' },
    { id: 10113, name: '앙상블 치즈 초리조', brand: 'Fromage de Gourmet', category: 'cheese', spec: '126g', image: 'https://via.placeholder.com/150?text=Cube+Cheese', tag: '큐브' },

    // --- YOGURT ---
    { id: 10043, name: '파예 클래식 그릭 요거트', brand: 'Fage', category: 'yogurt', spec: '450g', image: 'https://via.placeholder.com/150?text=Fage+Classic', tag: '대용량' },
    { id: 10044, name: '파예 무지방 그릭 요거트', brand: 'Fage', category: 'yogurt', spec: '170g', image: 'https://via.placeholder.com/150?text=Fage+0', tag: '다이어트' },
    { id: 10045, name: '파예 그릭 요거트 (허니)', brand: 'Fage', category: 'yogurt', spec: '170g', image: 'https://via.placeholder.com/150?text=Fage+Honey', tag: '디저트' },
    { id: 10046, name: '크리크리 그릭 프로즌 요거트', brand: 'Kri Kri', category: 'yogurt', spec: '320g', image: 'https://via.placeholder.com/150?text=KriKri', tag: '아이스크림' },
    { id: 10047, name: '티에스씨 오레오 밀크 스낵', brand: 'TSC', category: 'yogurt', spec: '30g', image: 'images/logos/tsc.png', tag: '냉장디저트' },
    { id: 10048, name: '티에스씨 밀카 밀크 스낵', brand: 'TSC', category: 'yogurt', spec: '32g', image: 'https://via.placeholder.com/150?text=Milka+Snack', tag: '냉장디저트' }
];