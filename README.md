# 소소한 할인
- 2021.04~2021.11 / 팀프로젝트(개발4명) <br/>
- 2021 한이음 프로젝트
- 영수증을 인식하면 연계된 매장의 할인 쿠폰을 발급하는 모바일 앱 + 소상공인끼리 간편하게 연계 맺을 수 있는 웹 플랫폼

## 주요 기능
### 소비자 앱
- 영수증 인식하여 쿠폰 다운로드
- 할인 쿠폰 사용

### 소상공인 플랫폼
- 상점간 연계
- 할인 쿠폰 등록

## 구조
- **shh_server**: RESTful API 서버

- **shh_web**: 소상공인 연계 플랫폼

- **shh_app**: 소비자 쿠폰 앱

## 사용 기술
- **Spring framework**: RESTful API 서버 구현
    - Spring Data JPA
- **React**, **React-Native**
    - React Bootstrap, Native Base 등 UI 라이브러리 적극 활용
- **MyBatis**
- **MySQL**
