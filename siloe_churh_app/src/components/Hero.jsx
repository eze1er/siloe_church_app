import { useState, useEffect } from "react";
import { logo, message, robot } from "../assets";
import styles from "../style";

// import { fetchFromAPI } from "../utils/fetchFromAPI";
const Hero = () => {
  const [video, setVideo] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("new")
  // useEffect(() => {
  //   fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
  //   .then((data) =>
  //     setVideo(data.items)
  //   );
  // }, [selectedCategory]);

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
              de Jacob, Afin qu'Il nous enseigne Ses voies, Et que nous marchions dans Ses sentiers.{" "}
            </span>{" "}
            <span className="text-gradient">Esaie 2:3</span>
            
          </p>
        </div>
        <iframe class="w-full aspect-[4/3] ..." src="https://www.youtube.com/watch?v=HtLnbNlGrQ4"></iframe>
       
      </div>
    </section>
  );
};

export default Hero;
