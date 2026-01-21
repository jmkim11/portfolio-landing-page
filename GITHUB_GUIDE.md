# GitHub 업로드 가이드

각 프로젝트를 GitHub에 올리는 방법입니다.

## 1. GitHub에서 저장소(Repository) 만들기
1. [GitHub](https://github.com)에 로그인합니다.
2. 우측 상단의 **+** 아이콘을 클릭하고 **New repository**를 선택합니다.
3. **Repository name**을 입력합니다 (예: `portfolio-landing-page`).
4. **Create repository** 버튼을 클릭합니다.
5. 생성 후 나오는 화면에서 **URL**을 복사합니다. (예: `https://github.com/jmkim11/portfolio-landing-page.git`)

## 2. 각 프로젝트 연결 및 올리기 (터미널)

터미널(PowerShell 또는 CMD)을 열고 아래 명령어들을 차례로 입력하세요.
(URL 부분은 실제 생성한 레포지토리 주소로 변경해야 합니다)

### 1) 포트폴리오 랜딩 페이지 (landingPage)
```bash
cd c:\Users\김정민\landingPage
git remote add origin https://github.com/jmkim11/portfolio-landing-page.git
git branch -M main
git push -u origin main
```

### 2) 이커머스 대시보드 (ecommerce-dashboard)
```bash
cd c:\Users\김정민\ecommerce-dashboard
git remote add origin https://github.com/jmkim11/ecommerce-dashboard.git
git branch -M main
git push -u origin main
```

### 3) 업무 관리 앱 (task-management)
```bash
cd c:\Users\김정민\task-management
git remote add origin https://github.com/jmkim11/task-management.git
git branch -M main
git push -u origin main
```

### 4) 날씨 시각화 (weather-visualizer)
```bash
cd c:\Users\김정민\weather-visualizer
git remote add origin https://github.com/jmkim11/weather-visualizer.git
git branch -M main
git push -u origin main
```

## 참고사항
- 만약 로그인 창이 뜨면 GitHub 아이디와 비밀번호(또는 Token)를 입력하세요.
- `git remote add origin` 명령어가 실패한다면(이미 존재한다는 메시지), `git remote set-url origin [새 URL]`을 사용하세요.
