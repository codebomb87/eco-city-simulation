# EcoCity Simulator 설정 가이드

## 🚀 빠른 시작

### 1. 의존성 설치
```bash
npm install
```

### 2. 개발 서버 실행
```bash
npm run dev
```

### 3. 브라우저에서 확인
http://localhost:3000 에서 애플리케이션을 확인할 수 있습니다.

## 📦 주요 의존성

### 프로덕션 의존성
- **React 18**: UI 라이브러리
- **Redux Toolkit**: 상태 관리
- **Three.js**: 3D 시각화
- **@react-three/fiber**: React용 Three.js 래퍼
- **@react-three/drei**: Three.js용 헬퍼 컴포넌트
- **Recharts**: 차트 라이브러리
- **Tailwind CSS**: 스타일링
- **Lucide React**: 아이콘

### 개발 의존성
- **TypeScript**: 타입 안전성
- **Vite**: 빌드 도구
- **ESLint**: 코드 품질

## 🏗️ 프로젝트 구조

```
src/
├── components/          # UI 컴포넌트
│   ├── Dashboard/      # 대시보드 관련 컴포넌트
│   ├── Analysis/       # 분석 뷰 컴포넌트
│   ├── Policy/         # 정책 패널 컴포넌트
│   └── Layout/         # 레이아웃 컴포넌트
├── store/              # Redux 스토어
│   └── slices/         # Redux 슬라이스
├── types/              # TypeScript 타입 정의
├── App.tsx             # 메인 앱 컴포넌트
├── main.tsx            # 엔트리 포인트
└── index.css           # 글로벌 스타일
```

## ✨ 주요 기능

### 1. 3D 도시 시각화
- Three.js를 사용한 인터랙티브 3D 도시 모델
- 실시간 에너지 소비 시각화
- 건물별 에너지 효율성 표시

### 2. 실시간 대시보드
- 에너지 소비/생산 메트릭
- 환경 변수 제어 (온도, 일조량, 풍속)
- 실시간 차트 및 그래프

### 3. 분석 도구
- 시간대별 에너지 사용 패턴
- 지역별 소비 분석
- 효율성 비교 및 예측

### 4. 정책 시뮬레이션
- 에너지 요금 정책 시뮬레이션
- 정책 효과 분석
- 실시간 영향도 계산

## 🎨 디자인 시스템

### 색상 팔레트
- **다크 테마**: 기본 배경 (#0A0F17)
- **에너지 그린**: #4ADE80 (효율성)
- **에너지 블루**: #3B82F6 (생산량)
- **에너지 옐로우**: #FACC15 (효율성)
- **에너지 레드**: #EF4444 (CO₂ 배출)

### 컴포넌트
- 카드 레이아웃
- 반응형 차트
- 인터랙티브 슬라이더
- 상태 표시 메트릭

## 🔧 개발 명령어

```bash
# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 미리보기
npm run preview

# 타입 체크
npm run type-check

# 린트 실행
npm run lint
```

## 📱 브라우저 지원

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## ⚡ 성능 최적화

- Vite를 사용한 빠른 개발 서버
- Tree-shaking을 통한 번들 크기 최적화
- Three.js 최적화된 렌더링
- Redux Toolkit을 통한 상태 관리 최적화

## 🚀 배포

### Vercel 배포
```bash
npm run build
# dist 폴더를 Vercel에 배포
```

### Netlify 배포
```bash
npm run build
# dist 폴더를 Netlify에 배포
```

## 📄 라이선스

MIT License - 자세한 내용은 LICENSE 파일을 참조하세요. 