export interface ILocation {
  sido: string;
  sigungu: null | ISigungu[];
}

export interface ISigungu {
  name: string;
  except: null | IExceptLocation[];
}

export interface IExceptLocation {
  bname1: string | null;
  bname2: string[] | string | null;
}

export const jojung: ILocation[] = [
  {
    sido: "서울",
    sigungu: null,
  },
  {
    sido: "경기",
    sigungu: [
      { name: "과천시", except: null },
      { name: "광명시", except: null },
      { name: "성남시 수정구", except: null },
      { name: "성남시 중원구", except: null },
      { name: "성남시 분당구", except: null },
      { name: "고양시 덕양구", except: null },
      { name: "고양시 일산동구", except: null },
      { name: "고양시 일산서구", except: null },
      {
        name: "남양주시",
        except: [
          { bname1: "화도읍", bname2: null },
          { bname1: "수동면", bname2: null },
          { bname1: "조안면", bname2: null },
        ],
      },
      { name: "하남시", except: null },
      { name: "화성시", except: null },
      { name: "구리시", except: null },
      { name: "안양시 만안구", except: null },
      { name: "안양시 동안구", except: null },
      { name: "수원시 장안구", except: null },
      { name: "수원시 권선구", except: null },
      { name: "수원시 팔달구", except: null },
      { name: "수원시 영통구", except: null },
      {
        name: "용인시 처인구",
        except: [
          { bname1: "포곡읍", bname2: null },
          { bname1: "모현읍", bname2: null },
          { bname1: "백암면", bname2: null },
          { bname1: "양지면", bname2: null },
          {
            bname1: "원삼면",
            bname2: [
              "가재월리",
              "사암리",
              "미평리",
              "좌향리",
              "맹리",
              "두창리",
            ],
          },
        ],
      },
      { name: "의왕시", except: null },
      { name: "군포시", except: null },
      {
        name: "안성시",
        except: [
          { bname1: "일죽면", bname2: null },
          { bname1: "죽산면", bname2: null },
          { bname1: "삼죽면", bname2: null },
          { bname1: "미양면", bname2: null },
          { bname1: "대덕면", bname2: null },
          { bname1: "양성면", bname2: null },
          { bname1: "고삼면", bname2: null },
          { bname1: "보개면", bname2: null },
          { bname1: "서운면", bname2: null },
          { bname1: "금광면", bname2: null },
        ],
      },
      { name: "부천시", except: null },
      { name: "안산시 상록구", except: null },
      { name: "안산시 단원구", except: null },
      { name: "시흥시", except: null },
      { name: "오산시", except: null },
      { name: "평택시", except: null },
      {
        name: "광주시",
        except: [
          { bname1: "초월읍", bname2: null },
          { bname1: "곤지암읍", bname2: null },
          { bname1: "도척면", bname2: null },
          { bname1: "퇴촌면", bname2: null },
          { bname1: "남종면", bname2: null },
          { bname1: "남한산성면", bname2: null },
        ],
      },
      {
        name: "양주시",
        except: [
          { bname1: "백석읍", bname2: null },
          { bname1: "남면", bname2: null },
          { bname1: "광적면", bname2: null },
          { bname1: "은현면", bname2: null },
        ],
      },
      { name: "의정부시", except: null },
      {
        name: "김포시",
        except: [
          { bname1: "통진읍", bname2: null },
          { bname1: "대곶면", bname2: null },
          { bname1: "월곶면", bname2: null },
          { bname1: "하성면", bname2: null },
        ],
      },
      {
        name: "파주시",
        except: [
          { bname1: "문산읍", bname2: null },
          { bname1: "파주읍", bname2: null },
          { bname1: "법원읍", bname2: null },
          { bname1: "조리읍", bname2: null },
          { bname1: "월롱면", bname2: null },
          { bname1: "탄현면", bname2: null },
          { bname1: "광탄면", bname2: null },
          { bname1: "파평면", bname2: null },
          { bname1: "적성면", bname2: null },
          { bname1: "군내면", bname2: null },
          { bname1: "장단면", bname2: null },
          { bname1: "진동면", bname2: null },
          { bname1: "진서면", bname2: null },
        ],
      },
      {
        name: "동두천시",
        except: [
          { bname1: null, bname2: "광암동" },
          { bname1: null, bname2: "걸산동" },
          { bname1: null, bname2: "안흥동" },
          { bname1: null, bname2: "상봉암동" },
          { bname1: null, bname2: "하봉암동" },
          { bname1: null, bname2: "탑동동" },
        ],
      },
    ],
  },
  {
    sido: "인천",
    sigungu: [
      {
        name: "중구",
        except: [
          { bname1: "", bname2: "을왕동" },
          { bname1: "", bname2: "남북동" },
          { bname1: "", bname2: "덕교동" },
          { bname1: "", bname2: "무의동" },
        ],
      },
      { name: "동구", except: null },
      { name: "미추홀구", except: null },
      { name: "연수구", except: null },
      { name: "남동구", except: null },
      { name: "부평구", except: null },
      { name: "계양구", except: null },
      { name: "서구", except: null },
    ],
  },
  {
    sido: "부산",
    sigungu: [
      { name: "해운대구", except: null },
      { name: "수영구", except: null },
      { name: "동래구", except: null },
      { name: "연제구", except: null },
      { name: "남구", except: null },
      { name: "서구", except: null },
      { name: "동구", except: null },
      { name: "영도구", except: null },
      { name: "부산진구", except: null },
      { name: "금정구", except: null },
      { name: "북구", except: null },
      { name: "강서구", except: null },
      { name: "사상구", except: null },
      { name: "사하구", except: null },
    ],
  },
  {
    sido: "대구",
    sigungu: [
      { name: "수성구", except: null },
      { name: "중구", except: null },
      { name: "동구", except: null },
      { name: "서구", except: null },
      { name: "남구", except: null },
      { name: "북구", except: null },
      { name: "달서구", except: null },
      {
        name: "달성군",
        except: [
          { bname1: "가창면", bname2: null },
          { bname1: "구지면", bname2: null },
          { bname1: "하빈면", bname2: null },
          { bname1: "논공읍", bname2: null },
          { bname1: "옥포읍", bname2: null },
          { bname1: "유가읍", bname2: null },
          { bname1: "현풍읍", bname2: null },
        ],
      },
    ],
  },
  {
    sido: "광주",
    sigungu: [
      { name: "동구", except: null },
      { name: "서구", except: null },
      { name: "남구", except: null },
      { name: "북구", except: null },
      { name: "광산구", except: null },
    ],
  },
  {
    sido: "대전",
    sigungu: [
      { name: "동구", except: null },
      { name: "중구", except: null },
      { name: "서구", except: null },
      { name: "유성구", except: null },
      { name: "대덕구", except: null },
    ],
  },
  {
    sido: "울산광역시",
    sigungu: [
      { name: "중구", except: null },
      { name: "남구", except: null },
    ],
  },
  {
    sido: "세종특별자치시",
    sigungu: [
      {
        name: "세종특별자치시",
        except: [
          { bname1: "조치원읍", bname2: null },
          { bname1: "부강면", bname2: null },
          { bname1: "금남면", bname2: null },
          { bname1: "장군면", bname2: null },
          { bname1: "연서면", bname2: null },
          { bname1: "전의면", bname2: null },
          { bname1: "전동면", bname2: null },
          { bname1: "소정면", bname2: null },
          { bname1: "연기면", bname2: ["연기리", "눌왕리", "수산리"] },
          {
            bname1: "연동면",
            bname2: [
              "예양리",
              "송용리",
              "문주리",
              "내판리",
              "노송리",
              "명학리",
              "응암리",
              "합강리",
            ],
          },
        ],
      },
    ],
  },
  {
    sido: "충북",
    sigungu: [
      {
        name: "청주시 상당구",
        except: [
          { bname1: "낭성면", bname2: null },
          { bname1: "미원면", bname2: null },
          { bname1: "가덕면", bname2: null },
          { bname1: "남일면", bname2: null },
          { bname1: "문의면", bname2: null },
        ],
      },
      {
        name: "청주시 서원구",
        except: [
          {
            bname1: "남이면",
            bname2: null,
          },
          {
            bname1: "현도면",
            bname2: null,
          },
        ],
      },
      {
        name: "청주시 흥덕구",
        except: [
          {
            bname1: "강내면",
            bname2: null,
          },
          {
            bname1: "옥산면",
            bname2: null,
          },
        ],
      },
      {
        name: "청주시 청원구",
        except: [
          {
            bname1: "내수읍",
            bname2: null,
          },
          {
            bname1: "북이면",
            bname2: null,
          },
        ],
      },
    ],
  },
  {
    sido: "충남",
    sigungu: [
      {
        name: "천안시 동남구",
        except: [
          { bname1: "목천읍", bname2: null },
          { bname1: "풍세면", bname2: null },
          { bname1: "광덕면", bname2: null },
          { bname1: "북면", bname2: null },
          { bname1: "성남면", bname2: null },
          { bname1: "수신면", bname2: null },
          { bname1: "병천면", bname2: null },
          { bname1: "동면", bname2: null },
        ],
      },
      {
        name: "천안시 서북구",
        except: [
          { bname1: "성환읍", bname2: null },
          { bname1: "성거읍", bname2: null },
          { bname1: "직산읍", bname2: null },
          { bname1: "입장면", bname2: null },
        ],
      },
      {
        name: "논산시",
        except: [
          { bname1: "강경읍", bname2: null },
          { bname1: "연무읍", bname2: null },
          { bname1: "성동면", bname2: null },
          { bname1: "광석면", bname2: null },
          { bname1: "노성면", bname2: null },
          { bname1: "상월면", bname2: null },
          { bname1: "부적면", bname2: null },
          { bname1: "연산면", bname2: null },
          { bname1: "벌곡면", bname2: null },
          { bname1: "양촌면", bname2: null },
          { bname1: "가야곡면", bname2: null },
          { bname1: "은진면", bname2: null },
          { bname1: "채운면", bname2: null },
        ],
      },
      {
        name: "공주시",
        except: [
          { bname1: "유구읍", bname2: null },
          { bname1: "이인면", bname2: null },
          { bname1: "탄천면", bname2: null },
          { bname1: "계룡면", bname2: null },
          { bname1: "반포면", bname2: null },
          { bname1: "의당면", bname2: null },
          { bname1: "정안면", bname2: null },
          { bname1: "우성면", bname2: null },
          { bname1: "사곡면", bname2: null },
          { bname1: "신풍면", bname2: null },
        ],
      },
    ],
  },
  {
    sido: "전북",
    sigungu: [
      {
        name: "전주시 완산구",
        except: null,
      },
      {
        name: "전주시 덕진구",
        except: null,
      },
    ],
  },
  {
    sido: "전남",
    sigungu: [
      {
        name: "여수시",
        except: [
          { bname1: "돌산읍", bname2: null },
          { bname1: "율촌면", bname2: null },
          { bname1: "화양면", bname2: null },
          { bname1: "남면", bname2: null },
          { bname1: "화정면", bname2: null },
          { bname1: "삼산면", bname2: null },
        ],
      },
      {
        name: "순천시",
        except: [
          { bname1: "승주읍", bname2: null },
          { bname1: "황전면", bname2: null },
          { bname1: "월등면", bname2: null },
          { bname1: "주암면", bname2: null },
          { bname1: "송광면", bname2: null },
          { bname1: "외서면", bname2: null },
          { bname1: "낙안면", bname2: null },
          { bname1: "별량면", bname2: null },
          { bname1: "상사면", bname2: null },
        ],
      },
      {
        name: "광양시",
        except: [
          { bname1: "봉강면", bname2: null },
          { bname1: "옥룡면", bname2: null },
          { bname1: "옥곡면", bname2: null },
          { bname1: "진상면", bname2: null },
          { bname1: "진월면", bname2: null },
          { bname1: "다압면", bname2: null },
        ],
      },
    ],
  },
  {
    sido: "경북",
    sigungu: [
      {
        name: "포항시 남구",
        except: [
          { bname1: "구룡포읍", bname2: null },
          { bname1: "연일읍", bname2: null },
          { bname1: "오천읍", bname2: null },
          { bname1: "대송면", bname2: null },
          { bname1: "동해면", bname2: null },
          { bname1: "장기면", bname2: null },
          { bname1: "호미곶면", bname2: null },
        ],
      },
      {
        name: "경산시",
        except: [
          { bname1: "하양읍", bname2: null },
          { bname1: "진량읍", bname2: null },
          { bname1: "압량읍", bname2: null },
          { bname1: "와촌면", bname2: null },
          { bname1: "자인면", bname2: null },
          { bname1: "용성면", bname2: null },
          { bname1: "남산면", bname2: null },
          { bname1: "남천면", bname2: null },
        ],
      },
    ],
  },
  { sido: "경남", sigungu: [{ name: "창원시 성산구", except: null }] },
];

const jojung_history = [
  {
    updated_at: "2021-08-30",
    history: "",
  },
];
