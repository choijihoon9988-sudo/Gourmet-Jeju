// js/data_meat.js
// 육가공 (샤퀴테리, 하몽, 살라미) 데이터베이스
// Source: 미국치즈_부라타 외.pdf (Beretta, Espuna 섹션)

const meatData = [
    // --- BERETTA (이탈리아) ---
    { id: 40001, name: '베레타 밀라노 살라미', brand: 'Beretta', category: 'meat', spec: '227g', image: 'images/logos/beretta.png', tag: '살라미' },
    { id: 40002, name: '베레타 소프레사타', brand: 'Beretta', category: 'meat', spec: '227g', image: 'images/logos/beretta.png', tag: '매콤' },
    { id: 40003, name: '베레타 프로슈토 슬라이스', brand: 'Beretta', category: 'meat', spec: '85g', image: 'images/logos/beretta.png', tag: '안주용' },
    { id: 40004, name: '베레타 판체타 슬라이스', brand: 'Beretta', category: 'meat', spec: '85g', image: 'images/logos/beretta.png', tag: '베이컨' },
    { id: 40005, name: '베레타 꼬빠 슬라이스', brand: 'Beretta', category: 'meat', spec: '85g', image: 'images/logos/beretta.png', tag: '' },
    { id: 40010, name: '베레타 모르타델라', brand: 'Beretta', category: 'meat', spec: '150g', image: 'images/logos/beretta.png', tag: '샌드위치' },

    // --- ESPUNA (스페인) ---
    { id: 40006, name: '에스푸나 하몽 세라노 슬라이스', brand: 'Espuna', category: 'meat', spec: '100g', image: 'https://via.placeholder.com/150?text=Serrano', tag: '하몽' },
    { id: 40007, name: '에스푸나 초리조 엑스트라', brand: 'Espuna', category: 'meat', spec: '100g', image: 'https://via.placeholder.com/150?text=Chorizo', tag: '매콤' },
    { id: 40008, name: '에스푸나 살치촌 엑스트라', brand: 'Espuna', category: 'meat', spec: '100g', image: 'https://via.placeholder.com/150?text=Salchichon', tag: '살라미' },
    { id: 40011, name: '에스푸나 하몽 큐브', brand: 'Espuna', category: 'meat', spec: '50g', image: 'https://via.placeholder.com/150?text=Ham+Cube', tag: '토핑' },

    // --- TORREON (이베리코) ---
    { id: 40009, name: '토레온 이베리코 베요타 하몽', brand: 'Torreon', category: 'meat', spec: '80g', image: 'https://via.placeholder.com/150?text=Iberico', tag: '최고급' },
    { id: 40012, name: '토레온 이베리코 초리조', brand: 'Torreon', category: 'meat', spec: '80g', image: 'https://via.placeholder.com/150?text=Iberico+Chorizo', tag: '' },
    
    // --- ROUGIE (푸아그라/오리) ---
    { id: 40013, name: '루지에 덕 리예트', brand: 'Rougie', category: 'meat', spec: '180g', image: 'images/logos/rougie.png', tag: '스프레드' },
    { id: 40014, name: '루지에 오리 테린', brand: 'Rougie', category: 'meat', spec: '180g', image: 'images/logos/rougie.png', tag: '전채요리' }
];