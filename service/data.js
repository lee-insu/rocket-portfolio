const stacks = [
  {
    title: "JavaScript",
    img: "/images/stacks/js.png",
    article: `웹을 동적으로 움직이길 원한다면 꼭 배워야 하는 스크립트 언어이기에 배우게 되었습니다. JS를 통해 로그인과 회원가입, 서버와의 통신, 브라우저 제어 등 모든 동적인 기능을 활용하는 데 사용했습니다.제가 작업하면서 느낀 JS의 장점은 계발 속도가 빠르다는 점, 그리고 컴파일 과정이 없어서 즉시 실행하고 디버깅도 간편합니다.JS를 활용하면서 이해하는 데 여러 시행착오가 있었습니다. 한 가지 에로는, JS는  python과 달리 비동기 프로그래밍을 지원해 Python을 먼저 배운 저는 비동기 처리에 대해 헷갈렸지만, 충분한 공부를 통해 비동기와 동기 처리에 대해 이해하게 되었습니다.`,
    links: [
      {
        head: "JS의 동기와 비동기 그건 무엇일까?",
        link:
          "https://velog.io/@lamda/JS%EC%9D%98-%EB%8F%99%EA%B8%B0%EC%99%80-%EB%B9%84%EB%8F%99%EA%B8%B0-%EA%B7%B8%EA%B1%B4-%EB%AC%B4%EC%97%87%EC%9D%BC%EA%B9%8C",
      },
      {
        head: "this는 무엇일까?",
        link:
          "https://velog.io/@lamda/this%EB%8A%94-%EB%AC%B4%EC%97%87%EC%9D%BC%EA%B9%8C",
      },
      {
        head: "Promise 와 async/await",
        link: "https://velog.io/@lamda/Promise-%EC%99%80-asyncawait",
      },
      {
        head: "null과 undefined, undeclared 그리고 NaN",
        link:
          "https://velog.io/@lamda/null%EA%B3%BC-undefined-undeclared-%EA%B7%B8%EB%A6%AC%EA%B3%A0-NaN",
      },
      {
        head: "HTTP 통신의 요청과 응답에 대해 알아보자",
        link:
          "https://velog.io/@lamda/HTTP-%ED%86%B5%EC%8B%A0%EC%9D%98-%EC%9A%94%EC%B2%AD%EA%B3%BC-%EC%9D%91%EB%8B%B5%EC%97%90-%EB%8C%80%ED%95%B4-%EC%95%8C%EC%95%84%EB%B3%B4%EC%9E%90",
      },
      {
        head: "DOM이란 무엇일까?",
        link:
          "https://velog.io/@lamda/DOM%EC%9D%B4%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%BC%EA%B9%8C",
      },
    ],
  },
  {
    title: "React",
    img: "/images/stacks/react.png",
    article:
      "React를 배우게 된 것은 수동 자동차에서 오토 자동차로 바꾼 것 같은 간편함 때문에 배웠습니다.  프로젝트 규모가 커질수록 순수 JS로  DOM에 접근해 작업하고 관리하는 것은 번거로운 일이었습니다. 이런 번거로운 작업을 도와주는 것이 라이브러리였고 그 중 React를 배우게 되었습니다. 다른 라이브러리도 마찬가지이지만, 컴포넌트의 독립성과 재사용이 가능해 다양한 작업물이 가능하고, VDOM이 있어 필요한 부분만 업데이트가 돼 자원을 아낄 수 있다는 점입니다.  React만의 장점은 native로의 확장성과 vue에 비해 거대한 커뮤니티로 참고할 자료가 많다는 점입니다.",
    links: [
      {
        head: "Angular, Vue, React 중 React 를 쓰는 이유",
        link:
          "https://velog.io/@lamda/Angular-Vue-React-%EC%A4%91-React-%EB%A5%BC-%EC%93%B0%EB%8A%94-%EC%9D%B4%EC%9C%A0",
      },
      {
        head: "리엑트 라이프 사이클이란?",
        link:
          "https://velog.io/@lamda/%EB%A6%AC%EC%97%91%ED%8A%B8-%EB%9D%BC%EC%9D%B4%ED%94%84-%EC%82%AC%EC%9D%B4%ED%81%B4%EC%9D%B4%EB%9E%80",
      },
    ],
  },
  {
    title: "NextJS",
    img: "/images/stacks/nextjs.png",
    article:
      "연습과 다음의 이유로 이 포트폴리오 사이트를 Next.js로 작업했습니다. 이 포트폴리오 사이트는 내용이 변하지 않는 고정적인 페이지입니다. Next.js의 장점인 React의 SPA의 강점과 정적페이지와 서버사이드 렌더링을 통해 유연하게 구현할 수 있는 React의 프레임워크라는 점이 어떤 경험을 줄 지 궁금했습니다. 두 번째로는 SEO가 탁월해 누군가 제 포트폴리오를 보고 연락해줬으면 해 선택한 면도 있습니다. 제가 느꼈던 Next.js는 페이지 라우팅을 파일 시스템으로 기반해, 따로 라우팅을 설정하지 않아도 되는 직관성을 가지고 있다는 걸 느꼈습니다. 또한, pages 폴더 안에 있는 코드를 토대로 HTML 파일을 미리 생성하고 렌더링 해줘 정적 파일을 보여주는 서버사이드렌더링 방식 때문에 CSR보다 페이지를 구성하는 속도는 늦어지지만, 전체적으로 유저가 콘텐츠를 볼 수 있다는 장점을 가지고 있어 배우게 되었습니다.",
    links: [
      {
        head: "NEXT.JS를 쓰게 된 이유!",
        link:
          "https://velog.io/@lamda/NEXT.JS%EB%A5%BC-%EC%93%B0%EA%B2%8C-%EB%90%9C-%EC%9D%B4%EC%9C%A0",
      },
    ],
  },

  {
    title: "Redux",
    img: "/images/stacks/redux.png",
    article:
      "Redux를 쓰게 된 것은 헤이앱과 코인 앵무새를 작업할 때  컴포넌트가 많아질수록 검색 창에 검색한 결과, 로그인 유저 정보와  같이 state 관리에서 빈번한 오류가 발생했습니다. 이 문제를 중앙이나 한 곳에서 관리하는 방법은 없을까 고민하다가 Redux를 알게 되었습니다. 양방향으로 데이터를 주고받으면서 이것을 제어하는 과정이 복잡해졌는데 redux의 Reducer와 Store 덕분에 복잡했던 상태 관리를 한 곳에서 받아와 관리의 걱정을 덜어주었습니다.",
  },
  {
    title: "Python",
    img: "/images/stacks/python.png",
    article:
      "처음으로 개발을 접한 언어이고 프로젝트 기획 당시 수요 조사를 크롤링으로 데이터를 얻기 위해 배웠습니다. JS도 배우기 쉽지만, Python은 코드가 더 단순하고, 길이가 짧아 간결해 한눈에 코드들이 어떤 순서로 흘러가는지 보였습니다. 또한, 규칙이 명확한 Python을 먼저 배우고 JS를 접하게 되니 동기적, 비동기적 흐름에 대해 더 명확히 느낄 수 있었습니다. 셀레니움과 BeautifulSoup를 통해 웹에서 댓글과 같은 사람들의 유저 분석을 하는 과정 중에 다른 서비스의  HTML 태그들이 어떻게 구성됐는지 알게 되었던 경험이었습니다.",
  },
  {
    title: "Flask",
    img: "/images/stacks/flask.png",
    article:
      "Express와 Django, flask 중 flask를 고른 이유는 웹크롤링과 함께 Python의 장점을 살리고 MVT방식인 Django보다 MVC패턴을 활용한 Flask가 더 배우기 쉽고 빠르게 습득할 수 있다는 판단이 들어 배우게 되었습니다. 물론 리얼타임이 훌륭하고 프론트엔드와 병행하기 좋은 Node.js의 express도 생각해봤지만 난이도가 쉬우면서 백엔드의 구조를 파악하기 쉬운 Flask가 더 강점이 있어 보였습니다. Flask로 작업을 해보니 코드 몇 줄이면 바로 시작이 될 만큼 간단하고 직관적인 점이 좋았고 무엇보다 View의 코드를 수정하지 않아도 되는 장점에 잘 활용했습니다.",
  },
  {
    title: "MySQL",
    img: "/images/stacks/mysql.png",
    article:
      "회원가입과 로그인 기능을 구현하기 위해 활용했습니다. 회원 정보를 저장하는데 컬렉션에 담는 NoSQL 방식보다 덜 유연하지만 정해진 테이블에 저장하면서 명확하게 정의된 구조가 변동사항이 자주 없는 회원 정보를 담는 데이터베이스에 적합하다고 생각했고, 무엇보다 중복 없이 한 번만 저장해서 중요한 데이터에 대해 확실한 저장을 할 수 있겠다는 장점을 경험했습니다.",
  },
  {
    title: "Firebase",
    img: "/images/stacks/firebase.png",
    article:
      "firebase는 제가 프로젝트를 진행하면서 가장 잘 활용하고 있는 백엔드 서비스입니다. flask를 통해 빠르게 백엔드에 배운 것은 좋았지만, 인증, 데이터베이스, 스토리지와 같이 더 다양한 기능을 활용하기엔 한계가 있었습니다. 또한, JS에 좀 더 집중하기 위해 더 쉽게 활용할 수 있는 서비스가 필요했는데 그 부족한 점을 채워준 것이 firebase였습니다.firebase를 활용하면서 flask와 mysql를 통해 회원가입 작업을 했던 것도 더 간편하게 설정할 수 있었고, 아이디 찾기와 비밀번호 변경과 같은 복잡한 것도 손쉽게 가능한 것이 장점이었습니다. 그리고 NoSQL기반이기 때문에 MySQL와 같은 관계형 데이터베이스보다 빠르고 간편했습니다. 종종 응답속도가 늦지만, 제가 원하던 프로토타입을 빠르게 만들기에 적합한 서비스였습니다.",
  },

  {
    title: "EC2",
    img: "/images/stacks/ec2.png",
    article:
      "EC2는 AWS에서 제공하는 클라우드 컴퓨팅 서비스라고 백엔드를 경험할 때 활용했습니다. 오늘의 기분이라는 프로젝트를 JS,Flask와 mysql로 모든 작업을 끝내고 어는 서버용 컴퓨터에 구축할까 고민하다가 EC2를 쓰게 되었습니다. EC2를 쓰게 된 이유는 다음과 같습니다. 사용한 만큼 지불하기 때문에 가격이 저렴하다는 큰 장점과 간단한 프로젝트라서 경험해보진 못했지만, 보안과 네트워크 구성, 스토리지 관리가 효과적이라는 것에 활용하게 되었습니다.",
  },

  {
    title: "Antd",
    img: "/images/stacks/antd.png",
    article:
      "React의 UI 라이브러리는 Material-UI, Bootstrap 등 많이 있습니다. 그 중 antd를 사용하게 된 것은 구글의 Material-UI만큼 antd만의 디자인 메뉴얼과 언어가 있다는 점이고 더 빠르게 활용할 수 있다는 장점을 가지고 있어서 활용하게 되었습니다. 디자인 가이드가 확실한 만큼 이 틀 안에서 활용한다면 더 좋은 도구가 없지만, 다른 디자인으로 커스텀 하거나 확장하기엔 불편함이 큽니다. 또한, 알리바바 사에서 만든 만큼 중국어가 기반이라 일부 중국어로 번역이 되어있어 언어의 장벽으로 다른 자료를 활용하기가 번거롭다는 점을 느꼈습니다.",
    links: [
      {
        head: "왜 Google material design을 놔두고 Ant Design을 쓸까?",
        link:
          "https://velog.io/@lamda/%EC%99%9C-Google-material-design%EC%9D%84-%EB%86%94%EB%91%90%EA%B3%A0-Ant-Design%EC%9D%84-%EC%93%B8%EA%B9%8C",
      },
    ],
  },
  {
    title: "Framer-motion",
    img: "/images/stacks/framer.png",
    article:
      "Framer-motion은 애니메이션, 터치 기반의 제스쳐와 스크롤 등 인터페이스의 흐름을 위해 재사용이 가능한 컴포넌트를 제공합니다. 코드로 적으면 복잡해지는 애니메이션을 간편하게 멋진 애니메이션을 구현할 수 있다는 점에 시간 절약과 커스텀도 비교적 쉽게 접근해 다양한 애니메이션을 구현할 수 있다는 점이 좋았습니다.",
  },
];

const contents = [
  {
    id: 1,
    title: "HEY APP",
    content: "dsakdkkdakdsakdkdsas",
    image: "/images/ex2.png",
  },
  {
    id: 2,
    title: "OHCO!",
    content: "asdasdjaskldasdkal",
    image: "/images/ex2.png",
  },
  {
    id: 3,
    title: "코인앵무새",
    content: "asdasdjaskldasdkal",
    image: "/images/ex2.png",
  },
];

const activity = [
  {
    title: "헤이앱 페이지, 관리자 페이지 개발",
    during: "2021.09.03 ~ 2021.11.02",
    stacks: "JavaScript, React, Firebase, Redux, Figma",
    des:
      "UI디자이너와 협업을 통해 국내 앱에 대한 UXUI를 분석해 디자이너에게 도움이 되기 위해 제작한 서비스입니다. 피그마를 통해 디자인과 개발의 균형을 조율했고, 업로드 할 수 있는 관리자 페이지를 따로 제작하였습니다. 로그인 기능, 검색 기능, 업로드가 가능하며 이 작업을 통해 Redux를 통한 상태관리와 React Hook에 대해 더 이해할 수 있었습니다.",
    links: [
      {
        head: "GitHub",
        a: "https://github.com/lee-insu/salary",
      },
      {
        head: "heyapp 페이지",
        a: "https://vibrant-fermi-3eff9e.netlify.app/",
      },
      {
        head: "heyapp 관리자 페이지",
        a: "",
      },
      {
        head: "헤이앱 개발 일기",
        a:
          "https://velog.io/@lamda/%ED%97%A4%EC%9D%B4%EC%95%B1-%EA%B0%9C%EB%B0%9C-%EC%9D%BC%EA%B8%B0",
      },
    ],
  },
  {
    title: "코인앵무새 크립토 시장 서비스 개발, 운영",
    during: "2021.07.20 ~ ",
    stacks: "JavaScript, React, Firebase, Redux",
    des:
      "크립토 시장에서 수많은 코인을 랜덤으로 돌려 추천해주면 어떨까? 로 시작한 서비스입니다. 간단한 서비스이지만 미리 설치해둔 GA 덕분에 10만명이 방문한 것을 보고 CRUD가 가능한 커뮤니티 게시판과 회원가입 기능, 추가로 게임을 더 넣어 업데이트한 작업입니다.",
    links: [
      {
        head: "GitHub",
        a: "https://github.com/lee-insu/coin_parrot",
      },
      {
        head: "코인앵무새 페이지",
        a: "https://goofy-jepsen-710f83.netlify.app",
      },
    ],
  },
  {
    title: "OHCO! 코디 추천 서비스 개발",
    during: "2021.05.16 ~ 2021.06.13",
    stacks: "JavaScript, React, Firebase",
    des:
      "오늘의 날씨에 따라 어울리는 코디를 추천해주는 서비스입니다. 날씨 API로 유저의 현재 날씨를 받아와 오늘 날씨와 어울리는 옷을 추천해주는 서비스입니다. 차후 개인화에 맞춰 코디를 추천해주는 서비스를 기획중입니다.",
    links: [
      { head: "GitHub", a: "https://github.com/lee-insu/clothes-list-react" },
      { head: "OHCO! 페이지", a: "https://ohco.kr/" },
    ],
  },
  {
    title: "오늘의 기분 서비스 개발",
    during: "2021.02.18 ~ 2021.03.11",
    stacks: "JavaScript, Flask, MySQL, EC2",
    des:
      "구글의 Teachable Machine API를 활용해 웃음,화남,분노,슬픔의 표정을 수백 장의 사진으로 데이터를 대입했습니다. 유저가 자신의 사진을 업로드하면 입력된 데이터에 의해 표정에 관한 결과를 보여주는 서비스입니다.",
    links: [
      { head: "GitHub", a: "https://github.com/lee-insu/today-feeling" },
      ,
    ],
  },
  {
    title: "킥보드 대여 통합 서비스 씽 디자인 작업 ",
    during: "2021.03.16 ~ 2021.06.13",
    stacks: "Illurstation, photoshop, XD",
    des:
      "씽씽, 킥고잉, 스윙, 고고씽 등 수많은 공유 킥보드 업체가 있습니다. 킥보드 업체가 많은 만큼 다른 회사의 킥보드를 타야 한다면 또다시 회원가입을 해야 하는 불편함이 있습니다. 이 점을 해결하기 위해 기획한 휙은 한 번의 가입으로 모든 킥보드를 이용할 수 있으며 킥보드 회사끼리 가격을 비교할 수 있어 이용자가 더 저렴하게 이용할 수 있는 서비스를 디자인 작업했습니다.",
    links: [
      {
        head: "휙 디자인과 프로토타입 보기 ",
        a:
          "https://xd.adobe.com/view/588cc4fd-5020-45e9-9ef5-1845f287960c-0ddf/?fullscreen",
      },
    ],
  },
  {
    title: "리디웹툰 기획서 작성 ",
    during: "2020.05",
    des:
      "전자책 서비스로 시장에서 선두로 앞서고 있는 리디북스사에 경쟁자로 올라오는 밀리의 서재를 견제하기 위해 새로운 수요로 책과 오락의 경계에 있는 웹툰에 대한 포트폴리오를 만들어야 한다는 제 분석과 웹툰 시장을 선점해야 하는지 적은 글입니다.",
    links: [
      { head: "리디웹툰 기획", a: "https://brunch.co.kr/@carpediem7760/3" },
    ],
  },

  {
    title: "카카오톡 챗봇 헤이서 기획, 운영 ",
    during: "2020.01 ~ 2020.08",
    stacks: "Python, BeautifulSoup, Flask ",
    des:
      "코로나로 비대면 수업만 하는 신입생들을 위해 만든 학교 알리미 챗봇입니다. 코로나가 국내에 퍼져 처음으로 셧다운이 되고 대학교도 비대면으로 전환되어 처음 대학교에 와 학교생활에 대한 정보 불균형을 해결하고자 만든 챗봇입니다. python으로 학교 커뮤니티를 웹크롤링 해 학생들이 무엇을 원하는지 분류하고 챗봇 내에 서비스를 운영했습니다. ",
    links: [
      {
        head: "헤이서 챗봇 기획",
        a: "https://brunch.co.kr/magazine/heyseo",
      },
    ],
  },

  {
    title: "카카오콕 기획서 작성 ",
    during: "2020.06",
    stacks: "Python, Seleium",
    des:
      "카카오콕은 카카오톡 선물하기에서 상품을 유저마다 개인화된 DB에 담아 구매할 것 같은 상품을 맞춤 추천하는 서비스입니다. 이 기능이 필요하다는 설득력의 자료를 트위터와 선물하기 관련 카페 커뮤니티에서 크롤링해 도출한 기획입니다.",
    links: [
      {
        head: "카카오콕 기획",
        a:
          "https://drive.google.com/file/d/11hT8jBx8jDUp0QiE0TlTBnosfJ3Br4y1/view",
      },
    ],
  },
  {
    title: "이랜드리테일 PB브랜드 SNS 홍보,관리",
    during: "2018.04 ~ 2018.08",
    des:
      "이랜드리테일의 PB브랜드 오프라이스의 인스타그램, 페이스북 채널을 통해 이벤트를 열고 제품 구매로 연결하는 마케팅 활동을 했습니다. 그 외에도 네이버 지식인, 블로그, 파워링크를 통해 조회 수 100,000, 댓글 참여 1,124, 스마트 스토어 전환율은 6,554라는 결과를 얻어 온라인 마케팅 공모전 우수상을 받은 활동입니다.",
    links: [
      {
        head: "오프라이스 온라인 마케팅 보고 PPT",
        a:
          "https://drive.google.com/file/d/1lSCMGpQtGXZ_DiOokZPbYaoYN2DlYjJH/view",
      },
    ],
  },

  {
    title: "재테크 블로그 운영 ",
    during: "2020.07 ~",
    des:
      "재테크에도 관심이 많지만, 크롤링을 통해 독자들이 좋아할 만한 소재를 뽑아내고 그 키워드에 글을 쓰면 조화수가 높게 나올까? 라는 것을 증명하기 위해 시작했습니다. 웹크롤링을 통해 재테크 글을 읽는 독자들이 어떤 궁금증을 가졌는지 키워드를 뽑아내고 그 키워드로 블로그를 활동했습니다. 결과로는 카카오 뷰페이지에 3번이나 노출되고 4개의 게시글이 10만뷰를 찍는 결과물을 얻었습니다.",
    links: [
      { head: "재테크 블로그", a: "https://brunch.co.kr/@carpediem7760" },
    ],
  },
];
export { stacks, contents, activity };
