import "antd/dist/antd.css";
import { Input, Layout, Menu, Modal } from "antd";
import moment from "moment";
import styled from "styled-components";
import DaumPostcode from "react-daum-postcode";
import { useEffect, useState } from "react";
import { jojung } from "../db/jojung";
import { tugi } from "../db/tugi";
import Head from "next/head";

const { Header, Content, Footer } = Layout;

interface IResult {
  jojung?: boolean | null;
  tugi?: boolean | null;
  address?: string | null;
}

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

const Home = () => {
  const [isModal, setIsModal] = useState(false);
  const [result, setResult] = useState<IResult | null>(null);

  const setJojung = (data: any) => {
    // 시, 도
    const sido = data?.sido || "";
    // 시, 군, 구
    const sigungu = data?.sigungu || data?.sido || "";
    // 읍, 면
    const bname1 = data?.bname1 || "";
    // 동, 리
    const bname2 = data?.bname2 || "";
    console.log(`${sido}\n${sigungu}\n${bname1}\n${bname2}`);

    const isSido = jojung.find((el: ILocation) => el.sido === sido);
    // 시, 도에 해당하는 지역이 없는 경우
    // 조정 지역 X
    if (!isSido) return false;

    // 시, 도에 해당하는 지역은 있으나, 나누어진 시군구가 없는 경우
    // 조정 지역 O
    if (isSido && !isSido.sigungu) return true;

    const isSigungu = isSido.sigungu!.find(
      (el: ISigungu) => el.name === sigungu
    );
    if (!isSigungu) return false;
    if (isSigungu && !isSigungu.except) return true;

    const isExcept = isSigungu.except!.find((el: IExceptLocation) => {
      // 읍, 면에 속한 리, 동 까지 상세적으로 제외된 지역에 포함된 경우
      // 조정 지역 X
      if (el.bname1 && el.bname2 && typeof el.bname2 !== "string") {
        return el.bname1 === bname1 && el.bname2.find((el) => el === bname2);
      }
      // 읍, 면 제외 지역에 포함된 경우
      // 조정 지역 X
      else if (el.bname1 && !el.bname2) {
        return el.bname1 === bname1;
      }
      // 리, 동 제외 지역에 포함된 경우
      // 조정 지역 X
      else if (!el.bname1 && el.bname2) {
        return el.bname2 === bname2;
      }

      // 제외 지역에 포함되지 않은 경우
      // 조정 지역 O
      return false;
    });

    // 예외 지역에  포함된 경우
    // 조정 지역 X
    if (isExcept) {
      return false;
    }

    return true;
  };

  const setTugi = (data: any) => {
    // 시, 도
    const sido = data?.sido || "";
    // 시, 군, 구
    const sigungu = data?.sigungu || data?.sido || "";
    // 읍, 면
    const bname1 = data?.bname1 || "";
    // 동, 리
    const bname2 = data?.bname2 || "";
    console.log(`${sido}\n${sigungu}\n${bname1}\n${bname2}`);

    const isSido = tugi.find((el: ILocation) => el.sido === sido);
    // 시, 도에 해당하는 지역이 없는 경우
    // 투기 지역 X
    if (!isSido) return false;

    // 시, 도에 해당하는 지역은 있으나, 나누어진 시군구가 없는 경우
    // 투기 지역 O
    if (isSido && !isSido.sigungu) return true;

    const isSigungu = isSido.sigungu!.find(
      (el: ISigungu) => el.name === sigungu
    );
    if (!isSigungu) return false;
    if (isSigungu && !isSigungu.except) return true;

    const isExcept = isSigungu.except!.find((el: IExceptLocation) => {
      // 읍, 면에 속한 리, 동 까지 상세적으로 제외된 지역에 포함된 경우
      // 투기 지역 X
      if (el.bname1 && el.bname2 && typeof el.bname2 !== "string") {
        return el.bname1 === bname1 && el.bname2.find((el) => el === bname2);
      }
      // 읍, 면 제외 지역에 포함된 경우
      // 투기 지역 X
      else if (el.bname1 && !el.bname2) {
        return el.bname1 === bname1;
      }
      // 리, 동 제외 지역에 포함된 경우
      // 투기 지역 X
      else if (!el.bname1 && el.bname2) {
        return el.bname2 === bname2;
      }

      // 제외 지역에 포함되지 않은 경우
      // 투기 지역 O
      return false;
    });

    // 예외 지역에  포함된 경우
    // 투기 지역 X
    if (isExcept) {
      return false;
    }

    return true;
  };

  return (
    <Layout>
      <Head>
        <title>집집마다: 투기과열지구, 조정대상지역 조회</title>
        <meta
          name="description"
          content="투기과열지구, 조정대상지역, 투기, 조정, 부동산, 투기과열지구 조회, 조정대상지역 조회"
        />
        <meta property="og:url" content="https://www.zipzipmada.site" />
        <meta
          property="og:image"
          content="https://www.zipzipmada.site/assets/bg-image.jpg"
        />
        <meta
          property="og:title"
          content="투기과열지구, 조정대상지역 조회하기"
        />
        <meta
          property="og:description"
          content="원하는 지역의 투기과열지구, 조정대상지역 여부를 조회합니다."
        />
      </Head>
      <Header style={{ zIndex: 1, width: "100%" }}>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" onClick={() => setResult(null)}>
            투기, 조정 조회
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ backgroundColor: "#fff" }}>
        {!result ? (
          <>
            <div
              style={{
                width: "100%",
                height: "500px",
                minHeight: "500px",
                backgroundImage: 'url("/assets/bg-image.jpg")',
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <div
                style={{
                  backgroundColor: "rgba(0,0,0,0.4)",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    color: "#fff",
                    fontSize: 26,
                    textAlign: "center",
                    letterSpacing: 0.5,
                  }}
                >
                  투기과열지구, 조정대상지역
                  <br />
                  조회할 지역을 검색하세요
                </div>
                <div
                  style={{ width: "80%", height: "50px", marginTop: "20px" }}
                >
                  <Input
                    onClick={() => setIsModal((prev) => !prev)}
                    placeholder="주소를 검색해주세요"
                    style={{ width: "100%", height: "100%", borderRadius: 15 }}
                  />
                </div>
              </div>
            </div>
            <Modal
              footer={null}
              onCancel={() => setIsModal((prev) => !prev)}
              visible={isModal}
            >
              <DaumPostcode
                onComplete={(data) => {
                  const isJojung = setJojung(data);
                  const isTugi = setTugi(data);

                  setResult({
                    jojung: isJojung,
                    tugi: isTugi,
                    address: data.address,
                  });

                  setIsModal((prev) => !prev);
                }}
              />
            </Modal>
          </>
        ) : (
          <div
            style={{
              width: "100%",
              height: "500px",
              minHeight: "500px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                fontSize: 20,
                color: "#000",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              {result!.address || ""}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: "40%",
                    height: 70,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    // borderWidth: 1.5,
                    borderRadius: 10,
                    margin: 8,
                    backgroundColor: result!.tugi ? "#ce2e31" : "#d8d8d8",
                  }}
                >
                  <div
                    style={{
                      fontSize: 16,
                      color: result!.tugi ? "#fff" : "#fff",
                      fontWeight: "bold",
                    }}
                  >
                    투기과열지구
                  </div>
                </div>

                <div
                  style={{
                    width: "40%",
                    height: 70,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    // borderWidth: 1.5,
                    borderRadius: 10,
                    margin: 8,
                    backgroundColor: result!.jojung ? "#fbc037" : "#d8d8d8",
                  }}
                >
                  <div
                    style={{
                      fontSize: 16,
                      color: result!.tugi ? "#fff" : "#fff",
                      fontWeight: "bold",
                    }}
                  >
                    조정대상지역
                  </div>
                </div>
              </div>
              {result.tugi || result.jojung ? (
                <div style={{ marginTop: 20, fontSize: 16 }}>{`${
                  result.tugi ? "투기과열지구," : ""
                } ${result.jojung ? "조정대상지역" : ""}에 해당됩니다.`}</div>
              ) : (
                <div style={{ marginTop: 20, fontSize: 16, marginBottom: 5 }}>
                  투기과열지구, 조정대상지역에 해당되지 않습니다.
                </div>
              )}
              <div
                style={{ textAlign: "right", fontSize: 14, marginBottom: 5 }}
              >
                (국토교통부 2021.08.30 공고 기준)
              </div>
              <div
                style={{
                  width: "200px",
                  height: 70,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  // borderWidth: 1.5,
                  borderRadius: 10,
                  margin: 8,
                  backgroundColor: "#2c90ff",
                  fontSize: 16,
                  color: "#fff",
                  fontWeight: "bold",
                  marginTop: "100px",
                }}
                onClick={() => setResult(null)}
              >
                다시 조회하기
              </div>
            </div>
          </div>
        )}
      </Content>
      <Footer style={{ textAlign: "center", backgroundColor: "#fff" }}>
        {`zipzipmada ©${moment().format("YYYY")} Created by Leckie`}
      </Footer>
    </Layout>
  );
};

export default Home;
