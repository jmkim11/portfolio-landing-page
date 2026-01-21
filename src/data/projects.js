import EcommerceDemo from '../components/demos/EcommerceDemo';
import TaskAppDemo from '../components/demos/TaskAppDemo';
import WeatherDemo from '../components/demos/WeatherDemo';

export const projects = [
    {
        id: 1,
        title: '이커머스 대시보드',
        description: '온라인 스토어 관리를 위한 종합 대시보드로, 실시간 분석 및 재고 관리 기능을 제공합니다.',
        tags: ['Python', 'Streamlit', 'Pandas', 'Altair'],
        github: '#',
        demo: '#',
        demoComponent: EcommerceDemo,
        longDescription: '가상의 쇼핑몰 데이터를 생성하여 시각화한 대시보드입니다. Python Streamlit을 사용하여 데이터 분석 결과를 빠르게 웹앱으로 구현했으며, Pandas와 Altair를 활용해 매출 추이 및 고객 데이터를 직관적인 차트로 표현했습니다.'
    },
    {
        id: 2,
        title: '업무 관리 앱',
        description: '팀이 거대한 프로젝트를 쉽게 정리하고 협업할 수 있도록 돕는 태스크 매니저입니다.',
        tags: ['Java', 'Spring Boot', 'JPA', 'H2'],
        github: '#',
        demo: '#',
        demoComponent: TaskAppDemo,
        longDescription: 'Spring Boot 기반의 RESTful API로 구축된 업무 관리 시스템입니다. JPA를 사용하여 데이터베이스와 객체 간의 매핑을 효율적으로 처리했으며, 엔터프라이즈급 아키텍처를 고려하여 설계되었습니다.'
    },
    {
        id: 3,
        title: '날씨 시각화',
        description: '공공 API와 WebGL을 활용하여 전 세계 날씨 패턴을 아름답게 시각화했습니다.',
        tags: ['Python', 'Flask', 'HTML/CSS', 'Requests'],
        github: '#',
        demo: '#',
        demoComponent: WeatherDemo,
        longDescription: 'Python Flask를 백엔드 서버로 사용하여 OpenWeatherMap API와 통신합니다. 경량화된 웹 서버 구조로 빠른 응답 속도를 보장하며, 사용자 요청에 따라 실시간 기상 데이터를 파싱하여 프론트엔드에 전달합니다.'
    },
    {
        id: 4,
        title: '포트폴리오 랜딩 페이지',
        description: 'React와 Vite를 사용하여 제작한 현재 보고 계신 포트폴리오 사이트입니다.',
        tags: ['React', 'Vite', 'CSS3', 'Lucide Icons'],
        github: '#',
        demo: '#',
        longDescription: '모던한 디자인과 반응형 웹 기술을 적용하여 제작된 개인 포트폴리오 사이트입니다. CSS Variables를 활용한 디자인 시스템을 구축하여 유지보수성을 높였습니다.'
    }
];
