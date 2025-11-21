// js/data_dairy.js
// 유제품 (치즈, 버터, 크림, 요거트) 데이터베이스
// Source: 미국치즈_부라타 외.pdf, 유럽치즈외.pdf

const dairyData = [
    // --- ISIGNY STE-MERE (프랑스) ---
    { id: 10001, name: '이즈니 AOP 버터 롤 (가염)', brand: 'Isigny Ste-Mère', category: 'dairy', spec: '250g', image: 'images/logos/isigny.png', tag: 'AOP' },
    { id: 10002, name: '이즈니 AOP 버터 롤 (무염)', brand: 'Isigny Ste-Mère', category: 'dairy', spec: '250g', image: 'images/logos/isigny.png', tag: 'AOP' },
    { id: 10003, name: '이즈니 포션 버터 (컵)', brand: 'Isigny Ste-Mère', category: 'dairy', spec: '10g x 60ea', image: 'images/logos/isigny.png', tag: '호텔납품' },
    { id: 10004, name: '이즈니 생메르 크렘 프레쉬 AOP', brand: 'Isigny Ste-Mère', category: 'dairy', spec: '200ml', image: 'images/logos/isigny.png', tag: '소스용' },
    { id: 10005, name: '이즈니 브리 치즈', brand: 'Isigny Ste-Mère', category: 'dairy', spec: '1kg', image: 'images/logos/isigny.png', tag: '업소용' },
    { id: 10006, name: '이즈니 까망베르 노르망디', brand: 'Isigny Ste-Mère', category: 'dairy', spec: '250g', image: 'images/logos/isigny.png', tag: 'AOP' },
    { id: 10007, name: '이즈니 미몰레뜨 (6개월)', brand: 'Isigny Ste-Mère', category: 'dairy', spec: '210g', image: 'images/logos/isigny.png', tag: '숙성치즈' },
    { id: 10008, name: '이즈니 AOP 버터 브릭', brand: 'Isigny Ste-Mère', category: 'dairy', spec: '250g', image: 'images/logos/isigny.png', tag: 'AOP' },
    { id: 10009, name: '이즈니 오가닉 버터 브릭', brand: 'Isigny Ste-Mère', category: 'dairy', spec: '200g', image: 'images/logos/isigny.png', tag: '유기농' },
    { id: 10010, name: '이즈니 냉동 버터 벌크', brand: 'Isigny Ste-Mère', category: 'dairy', spec: '10kg', image: 'images/logos/isigny.png', tag: '대용량' },
    { id: 10057, name: '이즈니 브리 60%', brand: 'Isigny Ste-Mère', category: 'dairy', spec: '1kg', image: 'images/logos/isigny.png', tag: '더블크림' },
    { id: 10058, name: '이즈니 트러플 까망베르', brand: 'Isigny Ste-Mère', category: 'dairy', spec: '150g', image: 'images/logos/isigny.png', tag: '트러플' },

    // --- BELGIOIOSO (미국/이탈리아 스타일) ---
    { id: 10011, name: '벨지오 모짜렐라 로그 슬라이스', brand: 'BelGioioso', category: 'dairy', spec: '907g', image: 'images/logos/belgioioso.png', tag: '카프레제' },
    { id: 10012, name: '벨지오 부라타 (4 balls)', brand: 'BelGioioso', category: 'dairy', spec: '226g', image: 'images/logos/belgioioso.png', tag: 'BEST' },
    { id: 10013, name: '벨지오 마스카포네', brand: 'BelGioioso', category: 'dairy', spec: '226g', image: 'images/logos/belgioioso.png', tag: '티라미수' },
    { id: 10014, name: '벨지오 리코타 미니 컵', brand: 'BelGioioso', category: 'dairy', spec: '142g', image: 'images/logos/belgioioso.png', tag: '미니' },
    { id: 10015, name: '벨지오 스트라치아렐라', brand: 'BelGioioso', category: 'dairy', spec: '226g', image: 'images/logos/belgioioso.png', tag: '부라타속' },
    { id: 10016, name: '벨지오 파마산 쉐이브드 컵', brand: 'BelGioioso', category: 'dairy', spec: '113g', image: 'images/logos/belgioioso.png', tag: '토핑용' },
    { id: 10070, name: '벨지오 후레쉬 모짜렐라 볼 (펄)', brand: 'BelGioioso', category: 'dairy', spec: '226g', image: 'images/logos/belgioioso.png', tag: '샐러드' },

    // --- AMBROSI (이탈리아) ---
    { id: 10017, name: '암브로시 마스카포네', brand: 'Ambrosi', category: 'dairy', spec: '500g', image: 'images/logos/ambrosi.png', tag: '이탈리아' },
    { id: 10018, name: '암브로시 고르곤졸라 피칸테', brand: 'Ambrosi', category: 'dairy', spec: '150g', image: 'images/logos/ambrosi.png', tag: '블루치즈' },
    { id: 10019, name: '암브로시 그라나 파다노', brand: 'Ambrosi', category: 'dairy', spec: '1kg', image: 'images/logos/ambrosi.png', tag: '경성치즈' },
    { id: 10020, name: '암브로시 파르미지아노 레지아노', brand: 'Ambrosi', category: 'dairy', spec: '150g', image: 'images/logos/ambrosi.png', tag: 'DOP' },

    // --- EMBORG (유럽) ---
    { id: 10021, name: '엠보그 모짜렐라 슬라이스', brand: 'Emborg', category: 'dairy', spec: '150g', image: 'https://via.placeholder.com/150?text=Emborg', tag: '슬라이스' },
    { id: 10022, name: '엠보그 에멘탈 슬라이스', brand: 'Emborg', category: 'dairy', spec: '150g', image: 'https://via.placeholder.com/150?text=Emborg', tag: '슬라이스' },
    { id: 10023, name: '엠보그 크림치즈', brand: 'Emborg', category: 'dairy', spec: '1.36kg', image: 'https://via.placeholder.com/150?text=Emborg', tag: '대용량' },
    { id: 10024, name: '엠보그 휘핑크림', brand: 'Emborg', category: 'dairy', spec: '1L', image: 'https://via.placeholder.com/150?text=Emborg', tag: '제과용' },
    { id: 10025, name: '엠보그 사우어 크림', brand: 'Emborg', category: 'dairy', spec: '1L', image: 'https://via.placeholder.com/150?text=Emborg', tag: '업소용' },

    // --- OTHERS (미국/유럽) ---
    { id: 10026, name: '오가닉밸리 유기농 기 버터', brand: 'Organic Valley', category: 'dairy', spec: '212g', image: 'https://via.placeholder.com/150?text=Organic+Valley', tag: '유기농' },
    { id: 10027, name: '오가닉밸리 유기농 스트링 치즈', brand: 'Organic Valley', category: 'dairy', spec: '170g', image: 'https://via.placeholder.com/150?text=String+Cheese', tag: '키즈' },
    { id: 10029, name: '퍼시픽 콜비잭 치즈', brand: 'Pacific Cheese', category: 'dairy', spec: '227g', image: 'https://via.placeholder.com/150?text=Pacific', tag: '미국' },
    { id: 10030, name: '퍼시픽 마일드 체다 치즈', brand: 'Pacific Cheese', category: 'dairy', spec: '227g', image: 'https://via.placeholder.com/150?text=Pacific', tag: '미국' },
    { id: 10031, name: '퍼시픽 몬테레이 잭', brand: 'Pacific Cheese', category: 'dairy', spec: '226g', image: 'https://via.placeholder.com/150?text=Pacific', tag: '미국' },
    { id: 10032, name: '조트 바이에른탈러 에멘탈', brand: 'Zott', category: 'dairy', spec: '200g', image: 'https://via.placeholder.com/150?text=Zott', tag: '독일' },
    { id: 10033, name: '조트 모짜렐라 슬라이스', brand: 'Zott', category: 'dairy', spec: '200g', image: 'https://via.placeholder.com/150?text=Zott', tag: '슬라이스' },
    { id: 10035, name: '올덴버거 멸균 우유', brand: 'Oldenburger', category: 'dairy', spec: '1L', image: 'https://via.placeholder.com/150?text=Oldenburger', tag: '멸균' },
    { id: 10036, name: '올덴버거 휘핑크림', brand: 'Oldenburger', category: 'dairy', spec: '1L', image: 'https://via.placeholder.com/150?text=Oldenburger', tag: '가성비' },
    { id: 10040, name: '브리미 모짜렐라 블록', brand: 'Brimi', category: 'dairy', spec: '1kg', image: 'https://via.placeholder.com/150?text=Brimi', tag: '피자용' },
    { id: 10041, name: '브리미 리코타', brand: 'Brimi', category: 'dairy', spec: '250g', image: 'https://via.placeholder.com/150?text=Brimi', tag: '프레쉬' },
    { id: 10043, name: '파예 클래식 그릭 요거트', brand: 'Fage', category: 'dairy', spec: '450g', image: 'https://via.placeholder.com/150?text=Fage', tag: '꾸덕함' },
    { id: 10046, name: '크리크리 그릭 프로즌 요거트', brand: 'Kri Kri', category: 'dairy', spec: '320g', image: 'https://via.placeholder.com/150?text=KriKri', tag: '아이스크림' },
    { id: 10047, name: '티에스씨 오레오 밀크 스낵', brand: 'TSC', category: 'dairy', spec: '30g', image: 'images/logos/tsc.png', tag: '냉장디저트' },
    { id: 10049, name: '달몰리스 냉동 부라타', brand: 'Dal Molise', category: 'dairy', spec: '125g', image: 'https://via.placeholder.com/150?text=Dal+Molise', tag: '냉동' },
    { id: 10052, name: '쁘띠구르망 그라나파다노 눈꽃 슈레드', brand: 'Petit Gourmand', category: 'dairy', spec: '200g', image: 'https://via.placeholder.com/150?text=Shred', tag: '토핑용' },
    { id: 10054, name: '브라잘레 알프스 버터 포션', brand: 'Brazzale', category: 'dairy', spec: '10g', image: 'https://via.placeholder.com/150?text=Brazzale', tag: '호텔납품' },
    { id: 10055, name: '에푸아스', brand: 'Germain', category: 'dairy', spec: '250g', image: 'https://via.placeholder.com/150?text=Germain', tag: '워시치즈' },
    { id: 10059, name: '일드 프랑스 미니 브리', brand: 'Ile De France', category: 'dairy', spec: '125g', image: 'https://via.placeholder.com/150?text=IDF', tag: '스낵' },
    { id: 10060, name: '생 앙드레', brand: 'Savencia', category: 'dairy', spec: '200g', image: 'https://via.placeholder.com/150?text=Saint+Andre', tag: '트리플크림' },
    { id: 10062, name: '엘르&비르 고메 버터 (무염)', brand: 'Elle & Vire', category: 'dairy', spec: '200g', image: 'https://via.placeholder.com/150?text=Elle', tag: '프랑스' },
    { id: 10063, name: '르 갈 크림치즈', brand: 'Le Gall', category: 'dairy', spec: '1kg', image: 'https://via.placeholder.com/150?text=Le+Gall', tag: '대용량' },
    { id: 10064, name: '알미토 페타치즈 허브', brand: 'Almito', category: 'dairy', spec: '280g', image: 'https://via.placeholder.com/150?text=Almito', tag: '오일절임' },
    { id: 10065, name: '알미토 체리페퍼 크림치즈', brand: 'Almito', category: 'dairy', spec: '280g', image: 'https://via.placeholder.com/150?text=Almito', tag: '안주' }
];