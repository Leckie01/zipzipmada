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
export const tugi: ILocation[] = [
  {
    sido: "서울",
    sigungu: [
      { name: "서초구", except: null },
      { name: "강남구", except: null },
      { name: "송파구", except: null },
      { name: "용산구", except: null },
    ],
  },
  // {
  // sido: "경기",
  // sigungu: [
  //   { name: "과천시", except: null },
  //   { name: "광명시", except: null },
  //   { name: "하남시", except: null },
  // { name: "수원시 장안구", except: null },
  // { name: "수원시 권선구", except: null },
  // { name: "수원시 팔달구", except: null },
  // { name: "수원시 영통구", except: null },
  // { name: "성남시 분당구", except: null },
  // { name: "성남시 수정구", except: null },
  // { name: "안양시 만안구", except: null },
  // { name: "안양시 동안구", except: null },
  // { name: "안산시 단원구", except: null },
  // { name: "구리시", except: null },
  // { name: "군포시", except: null },
  // { name: "의왕시", except: null },
  // { name: "용인시 수지구", except: null },
  // { name: "용인시 기흥구", except: null },
  // {
  //   name: "화성시",
  //   except: [
  //     { bname1: "봉담읍", bname2: null },
  //     { bname1: "우정읍", bname2: null },
  //     { bname1: "향남읍", bname2: null },
  //     { bname1: "남양읍", bname2: null },
  //     { bname1: "매송면", bname2: null },
  //     { bname1: "비봉면", bname2: null },
  //     { bname1: "마도면", bname2: null },
  //     { bname1: "송산면", bname2: null },
  //     { bname1: "서신면", bname2: null },
  //     { bname1: "팔탄면", bname2: null },
  //     { bname1: "장안면", bname2: null },
  //     { bname1: "양감면", bname2: null },
  //     { bname1: "정남면", bname2: null },
  //     { bname1: "기안동", bname2: null },
  //     { bname1: "배양동", bname2: null },
  //     { bname1: "기산동", bname2: null },
  //     { bname1: "반정동", bname2: null },
  //     { bname1: "능동", bname2: null },
  //     { bname1: "진안동", bname2: null },
  //     { bname1: "병점동", bname2: null },
  //     { bname1: "반월동", bname2: null },
  //     { bname1: "새솔동", bname2: null },
  //     { bname1: "송산동", bname2: null },
  //     { bname1: "안녕동", bname2: null },
  //     { bname1: "황계동", bname2: null },
  //   ],
  // },
  //   ],
  // },
  // {
  //   sido: "세종특별자치시",
  //   sigungu: [
  //     {
  //       name: "세종특별자치시",
  //       except: [
  //         { bname1: "조치원읍", bname2: null },
  //         { bname1: "부강면", bname2: null },
  //         { bname1: "금남면", bname2: null },
  //         { bname1: "장군면", bname2: null },
  //         { bname1: "연서면", bname2: null },
  //         { bname1: "전의면", bname2: null },
  //         { bname1: "전동면", bname2: null },
  //         { bname1: "소정면", bname2: null },
  //         { bname1: "연기면", bname2: ["연기리", "눌왕리", "수산리"] },
  //         {
  //           bname1: "연동면",
  //           bname2: [
  //             "예양리",
  //             "송용리",
  //             "문주리",
  //             "내판리",
  //             "노송리",
  //             "명학리",
  //             "응암리",
  //             "합강리",
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   sido: "인천",
  //   sigungu: [
  //     {
  //       name: "연수구",
  //       except: null,
  //     },
  //     {
  //       name: "남동구",
  //       except: null,
  //     },
  //     {
  //       name: "서구",
  //       except: null,
  //     },
  //   ],
  // },
  // {
  //   sido: "대구",
  //   sigungu: [
  //     {
  //       name: "수성구",
  //       except: null,
  //     },
  //   ],
  // },
  // {
  //   sido: "대전",
  //   sigungu: [
  //     {
  //       name: "동구",
  //       except: null,
  //     },
  //     {
  //       name: "중구",
  //       except: null,
  //     },
  //     {
  //       name: "서구",
  //       except: null,
  //     },
  //     {
  //       name: "유성구",
  //       except: null,
  //     },
  //   ],
  // },
  // {
  //   sido: "경남",
  //   sigungu: [
  //     {
  //       name: "창원시 의창구",
  //       except: [
  //         {
  //           bname1: "북면",
  //           bname2: [
  //             "외감리",
  //             "상천리",
  //             "마산리",
  //             "대산리",
  //             "고암리",
  //             "화천리",
  //             "지개리",
  //             "하천리",
  //             "월계리",
  //             "외산리",
  //             "월백리",
  //             "월촌리",
  //             "내곡리",
  //             "무곡리",
  //             "신촌리",
  //             "동전리",
  //           ],
  //         },
  //         {
  //           bname1: "동읍",
  //           bname2: null,
  //         },
  //         {
  //           bname1: "대산면",
  //           bname2: null,
  //         },
  //       ],
  //     },
  //   ],
  // },
];
