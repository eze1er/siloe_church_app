import { useState, useEffect } from "react";
import { logo, message, robot } from "../assets";
import { Box, Stack, Typography } from "@mui/material";
import styles from "../style";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos, VideoShow, GetStarted } from "../components";
import Sidebar from "./Sidebar";

const Hero = () => {
  const [video, setVideo] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("ezekiel-window-tv");
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideo(data.items)
    );
  }, []);
  // console.log(video);

  let curr = new Date();
  let first = curr.getDate() - curr.getDay() + 1;

  let firstDay = new Date(curr.setDate(first)).toISOString().slice(0, 10);

  // if (firstDay === curr.toISOString().slice(0, 10)) {
  //   console.log("curr = First")
  //   // var date = new Date();
  //   // date; //# => Fri Apr 01 2011 11:14:50 GMT+0200 (CEST)

  //   // date.setDate(date.getDate() - 1);

  //   curr.setDate(curr.getDate() - 1);
  //   first = curr.getDate() - curr.getDay() + 1;
  //   console.log('first == ', first)
    
  //   firstDay = new Date(curr.setDate(first)).toISOString().slice(0, 10);
  //   console.log("new curr", curr)
  //   console.log("new FirstDay = ", firstDay)
  //   // date; //# => Thu Mar 31 2011 11:14:50 GMT+0200 (CEST)
  // }

  const videoOne = video?.filter(
    (ele) =>
      ele.snippet.channelId === "UC_-rI0d4c6AmGA_3p2-ls9w" &&
      ele.snippet.publishedAt.includes(`${firstDay}`)
  );

  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-message-gradient rounded-[10px] mb-2">
          <img src={message} alt="message" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph}`}>
            <span className="text-gradient">2022 :</span>
            {"  "}
            <span className="text-white">
              Venez, et montons a la montagne de l'Eternel, A la maison du Dieu,
              de Jacob, Afin qu'Il nous enseigne Ses voies, Et que nous
              marchions dans Ses sentiers.{" "}
            </span>{" "}
            <span className="text-gradient">Esaie 2:3</span>
          </p>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <div>
            {video?.map((item, idx) =>
              item.snippet.publishedAt.includes(`${firstDay}`) ? (
                <Videos key={idx} videos={videoOne} />
              ) : (
                <Videos videos={video} />
              )
            )}
          </div>

          <div>
            <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
              Soyez le bienvenue <br className="sm:block hidden" />
              <span className="text-gradient">A L'Eglise Siloe.</span> <br />
            </h1>
            <div className="ss:flex hidden md:mr-4 mr-0">
              <GetStarted />
            </div>
          </div>
          <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
            Soyez le bienvenue <br className="sm:block hidden" />
            La porte Vous est grandement ouverte.
          </h1>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates
            harum nisi fugiat neque, at magnam eos possimus ullam atque commodi
            voluptatem accusantium dicta eum eaque provident culpa fugit?
            Maiores, laborum.
          </p>
        </div>
        <div>
          <img
            src={robot}
            alt="billing"
            className="w-[100%] h-[100%] relative z-[5]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
