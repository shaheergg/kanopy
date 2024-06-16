import React, { useState } from "react";
import applemini from "../assets/img/applemini.svg";
import rokumini from "../assets/img/rokumini.svg";
import chromemini from "../assets/img/chromemini.svg";
import androidmini from "../assets/img/androidmini.svg";
import girltv from "../assets/img/girltv.png";
import firetvmini from "../assets/img/firetvmini.svg";
import samsungmini from "../assets/img/samsungmini.svg";
import tablet from "../assets/img/tablet.png";
import Tab from "./Tab";
import desktop from "../assets/img/desktop.png";

const Tabs = () => {
  const tabs = [
    {
      id: 1,
      title: "Enjoy on your TV",
      img: girltv,
    },
    {
      id: 2,
      title: "Watch Kanopy on the go",
      img: tablet,
    },
    {
      id: 3,
      title: "Stream Kanopy to your laptop or computer",
      img: desktop,
    },
  ];
  const [selectedTab, selectTab] = useState(tabs[0]);
  return (
    <div className="">
      <div className="bg-img2 h-fit bg-center sm:bg-top">
        <div className="max-w-6xl mx-auto sm:px-[46px] px-4 py-20">
          <div className="max-w-2xl px-3 text-center mx-auto">
            <h1 className="text-white sm:leading-snug text-center flex flex-col justify-end text-2xl sm:text-4xl font-bold">
              Stream on all your favorite devices, any time, anywhere
            </h1>
          </div>
          <div className="border-b grid grid-cols-3 gap-4 border-[#555B5D] mt-10 sm:h-24">
            <button
              onClick={() => selectTab(tabs[0])}
              className={`text-center flex group flex-col border-b-2  pb-5 items-center gap-2 ${
                selectedTab.id === 1
                  ? `border-b-2 border-[#DE3F00] text-white`
                  : "text-[#697173] hover:text-white hover:border-[#DE3F00] border-transparent  duration-500 hover:border-b-2"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer h-auto w-10 sm:w-auto"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="63px"
                height="40px"
                viewBox="0 0 63 40"
                version="1.1"
              >
                <g
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                  fill="currentColor"
                  fill-rule="evenodd"
                >
                  <g
                    id="Devices-Tabs"
                    transform="translate(-234.000000, -144.000000)"
                    fill="currentColor"
                  >
                    <g
                      id="devices-tab-tv-icon"
                      transform="translate(234.000000, 144.000000)"
                    >
                      <polygon
                        id="Fill-1"
                        points="3.03030303 33.3333333 60 33.3333333 60 3.03030303 3.03030303 3.03030303"
                      />
                      <g id="Group-6">
                        <path
                          d="M1.47458135,34.6235867 L61.4073813,34.6235867 L61.4073813,1.62527571 L1.47458135,1.62527571 L1.47458135,34.6235867 Z M31.420172,0.230183805 C41.0219184,0.230183805 50.624305,0.272151018 60.2254111,0.195211128 C62.1629201,0.179314456 62.8448259,0.753502235 62.8300993,2.71960258 C62.7539052,13.4117039 62.760308,22.7284252 62.824977,33.4198907 C62.8371425,35.3580129 62.1238626,36.0129558 60.2010802,36.0091406 C40.9975874,35.9678092 21.7934544,35.9659016 2.5899616,36.0110482 C0.623639703,36.0161351 -0.00128057434,35.2925186 0.0102445947,33.3919126 C0.0729927373,22.7004471 0.0851581935,13.3830899 -4.87890978e-19,2.69162444 C-0.0160071792,0.688643815 0.708797896,0.181857923 2.61429251,0.196482861 C12.2153986,0.270243418 21.8184256,0.230183805 31.420172,0.230183805 Z"
                          id="Fill-2"
                        />
                        <path
                          d="M42.5443292,39.9556801 C42.4521278,39.4603398 42.361207,39.5398231 42.2497971,38.9351138 L20.6657166,38.9351138 C20.4832347,39.4609757 20.289868,39.4425355 20.0965013,39.9995549 C19.9261849,39.9900169 19.7552282,39.9792072 19.5842716,39.9690333 C19.5842716,39.239694 19.3768185,38.9897983 19.6598254,38.3908117 C19.8378253,38.0143785 20.7489539,37.8159881 21.3335361,37.8128087 C28.0539902,37.773385 34.7757249,37.7682981 41.4961791,37.8223467 C42.0922864,37.8267978 42.9310626,38.1676225 43.2115084,38.6222673 C43.5098822,39.1067978 43.2780983,39.335074 43.2780983,39.9995549 C43.0341488,39.9855658 42.7889189,39.970305 42.5443292,39.9556801"
                          id="Fill-4"
                        />
                        <polygon
                          id="Fill-5"
                          points="30.9233091 38.6501341 32.0873512 38.6501341 32.0873512 35.2181222 30.9233091 35.2181222"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <h4 className="cursor-pointer font-semibold">TV</h4>
            </button>
            <button
              onClick={() => selectTab(tabs[1])}
              className={`text-center flex group flex-col border-b-2  pb-5 items-center gap-2 ${
                selectedTab.id === 2
                  ? `border-b-2 border-[#DE3F00] text-white`
                  : "text-[#697173] hover:text-white hover:border-[#DE3F00] border-transparent  duration-500 hover:border-b-2"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="43px"
                height="40px"
                viewBox="0 0 43 40"
                version="1.1"
              >
                <g
                  id="Page-1"
                  stroke="currentColor"
                  stroke-width="1"
                  fill="currentColor"
                  fill-rule="evenodd"
                >
                  <g
                    id="Devices-Tabs"
                    transform="translate(-607.000000, -144.000000)"
                  >
                    <g
                      id="devices-tab-mobile-icon"
                      transform="translate(607.000000, 144.000000)"
                    >
                      <polygon
                        id="Fill-1"
                        fill="currentColor"
                        points="3.17460317 36.1904762 24.7619048 36.1904762 24.7619048 3.17460317 3.17460317 3.17460317"
                      />
                      <path
                        d="M1.81144344,37.5553423 L25.995996,37.5553423 L25.995996,1.84110025 L1.81144344,1.84110025 L1.81144344,37.5553423 Z M0.00254654655,2.6515699 C-0.0509309309,0.792507313 0.735951952,0.039017172 2.66623423,0.0908940327 C5.39188789,0.164882342 22.4291331,0.154677058 25.1547868,0.0934453537 C26.9068108,0.0534746577 27.8159279,0.720219884 27.8142302,2.43725893 C27.8082883,8.82576676 27.8082883,30.6667756 27.8125325,37.054433 C27.8133814,38.6158414 27.0035796,39.3667802 25.3848248,39.3642289 C22.469029,39.3608272 5.24673473,39.370182 2.33093894,39.3608272 C0.702846847,39.3548741 -0.0186746747,38.5894778 0.0101861862,36.9983039 C0.0687567568,33.7606775 0.0271631632,15.0679989 0.0271631632,11.8286716 C0.0263143143,8.7696377 0.089977978,5.70890292 0.00254654655,2.6515699 Z"
                        id="Fill-2"
                        fill="currentColor"
                      />
                      <polygon
                        id="Fill-4"
                        fill="currentColor"
                        points="32.6507937 36.8253968 39.6349206 36.8253968 39.6349206 23.4920635 32.6507937 23.4920635"
                      />
                      <path
                        d="M31.3809524,38.0952381 L40.9047619,38.0952381 L40.9047619,22.2222222 L31.3809524,22.2222222 L31.3809524,38.0952381 Z M42.1729724,37.3833914 C42.2213564,38.8206706 41.5183646,39.4037015 39.794564,39.3631052 C37.3601819,39.3060978 34.9210563,39.3147353 32.4857255,39.3613777 C30.9213077,39.3924727 30.1101632,38.8768143 30.1111119,37.5500951 C30.1158555,32.612903 30.1158555,27.675711 30.1120606,22.7376552 C30.1111119,21.5318609 30.8349754,20.9514212 32.2808048,20.9531487 C34.8850054,20.9566037 37.4892061,20.9479662 40.0934067,20.95574 C41.5477745,20.9609225 42.1928952,21.5517271 42.1663314,22.7817064 C42.1141525,25.2848524 42.1511521,27.7879984 42.1511521,30.2911444 C42.1521008,32.6560905 42.0951784,35.0210366 42.1729724,37.3833914 Z"
                        id="Fill-5"
                        fill="currentColor"
                      />
                    </g>
                  </g>
                </g>
              </svg>
              <h4 className="cursor-pointer font-semibold">
                Phone, Tablet & Mobile
              </h4>
            </button>
            <button
              onClick={() => selectTab(tabs[2])}
              className={`text-center flex group flex-col border-b-2  pb-5 items-center gap-2 ${
                selectedTab.id === 3
                  ? `border-b-2 border-[#DE3F00] text-white`
                  : "text-[#697173] hover:text-white hover:border-[#DE3F00] border-transparent  duration-500 hover:border-b-2"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="71px"
                height="40px"
                viewBox="0 0 71 40"
                version="1.1"
              >
                <g
                  id="Page-1"
                  stroke="currentColor"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    id="Devices-Tabs"
                    transform="translate(-957.000000, -144.000000)"
                  >
                    <g
                      id="devices-tab-laptop-icon"
                      transform="translate(957.000000, 144.000000)"
                    >
                      <polygon
                        id="Fill-1"
                        fill="currentColor"
                        points="10.4615385 32.6153846 59.6923077 32.6153846 59.6923077 3.07692308 10.4615385 3.07692308"
                      />
                      <path
                        d="M9.23076923,33.8461538 L60.9230769,33.8461538 L60.9230769,1.84615385 L9.23076923,1.84615385 L9.23076923,33.8461538 Z M35.0579261,35.6483504 C26.848973,35.6483504 18.6390609,35.5846945 10.4301078,35.6901543 C8.18580937,35.719607 7.37345007,35.0241427 7.3907139,32.7771848 C7.47223756,22.8886701 7.46840115,12.9992053 7.38495929,3.11069054 C7.36481815,0.774424425 8.22705075,-0.010348169 10.5816459,0.000102797741 C26.9132328,0.0694592135 43.2448198,0.064708774 59.5773659,0.00485323717 C61.9099017,-0.00369755381 62.7778889,0.769673986 62.7548704,3.13159247 C62.657042,12.9345993 62.6330645,22.7395063 62.7682978,32.5406129 C62.8037846,35.1163012 61.8293371,35.7234073 59.4248687,35.6911044 C51.3051121,35.5799441 43.18056,35.6483504 35.0579261,35.6483504 Z"
                        id="Fill-2"
                        fill="currentColor"
                      />
                      <path
                        d="M2.55798029,39.9616837 C1.70435016,39.9592538 0.852660096,39.3785103 0,39.0674845 C0.0601421228,38.7625334 0.12125428,38.4587972 0.181396403,38.1538462 L69.9317083,38.1538462 C70.0054309,38.4843111 70.0801236,38.814776 70.1538462,39.1452409 C69.2682049,39.4307529 68.3825636,39.9641135 67.4969224,39.9653285 C64.1939558,39.9726182 60.8900192,39.9786929 57.5880226,39.9835527 C39.2446752,40.0102814 20.9013277,40.0054217 2.55798029,39.9616837 Z"
                        id="Fill-4"
                        fill="currentColor"
                      />
                    </g>
                  </g>
                </g>
              </svg>
              <h4 className="cursor-pointer font-semibold">Desktop & Laptop</h4>
            </button>
          </div>
        </div>
        {tabs
          .filter((tab) => tab.id === selectedTab.id)
          .map((tab) => (
            <Tab key={tab.id} title={tab.title} img={tab.img} />
          ))}

        <div className="border-b border-[#5F686B] px-4 sm:px-6 mt-4 max-w-6xl items-end mx-auto justify-center py-10 flex-wrap flex gap-10">
          <img src={applemini} alt="" className="w-10 h-auto" />
          <img src={rokumini} alt="" className="w-12 h-auto" />
          <img src={chromemini} alt="" className="w-32 h-auto" />
          <img src={androidmini} alt="" className="w-24 h-auto" />
          <img src={firetvmini} alt="" className="w-12 h-auto" />
          <img src={samsungmini} alt="" className="w-[82px] h-auto" />
        </div>
        <div className="max-w-6xl flex flex-col items-center px-4 gap-6 mx-auto pt-20 pb-10">
          <h1 className="text-white sm:leading-snug text-center flex flex-col justify-end sm:text-4xl text-2xl font-bold">
            Start watching the latest movies any time, anywhere
          </h1>
          <button className="bg-[#DE3F00] text-white px-9 py-4 font-bold hover:bg-opacity-70 rounded duration-500 uppercase tracking-widest">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
