import React from "react";
import styles from "./work.module.scss";
import Image, { StaticImageData } from "next/image";
import ForecasterImage from "@/app/ui/assets/samples/forecaster.png";
import PomodoroImage from "@/app/ui/assets/samples/pomodoro.png";
import RestaurantImage from "@/app/ui/assets/samples/restaurant.png";
import WeatherImage from "@/app/ui/assets/samples/weather.png";
import WooderImage from "@/app/ui/assets/samples/wooder.png";

const images = [
  PomodoroImage,
  RestaurantImage,
  WeatherImage,
  WooderImage,
  ForecasterImage,
];

const samples = {
  pomodoro: [
    "Pomodoro React Web App",
    "https://pomodoro-react-app.netlify.com",
    "https://github.com/Lartwel/pomodoro-app",
  ],
  // '// portfolio': ['Portfolio', 'http://mahmoud-ahmed.eb2a.com/,],
  restaurant: [
    "Restaurant Website",
    "http://mahmoud-ahmed.eb2a.com/Restaurant",
  ],
  weather: [
    "Weather App Landing Page",
    "http://mahmoud-ahmed.eb2a.com/weather",
  ],
  wooder: [
    "Furniture Agency Website",
    "https://wooder-site.netlify.app",
    "https://github.com/Lartwel/Wooder",
  ],
  forecaster: [
    "Weather Forecaster React App",
    "https://weather-forecaster-app.netlify.app/",

    "https://github.com/Lartwel/weather-forecaster",
  ],
};

export const Work = () => {
  return (
    <section id="work" className={styles.work}>
      <h3 className="section-title">Work</h3>

      <div className={styles.samples}>
        {Object.entries(samples).map(([name, sampleInfo], i) => (
          <div className={styles.sample} key={i}>
            <a
              className={styles.imgWrapper}
              href={sampleInfo[1]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={images[i]} alt={name} fill />
            </a>
            <div className={styles.sampleName}>{name}</div>

            <div className={styles.sampleLink}>
              {
                <a
                  href={sampleInfo[1]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={`/images/social/link.png`}
                    width={20}
                    height={20}
                    alt="link"
                  />
                </a>
              }
            </div>
            {sampleInfo?.length === 3 && (
              <div className={styles.sampleLink}>
                <a
                  href={`${sampleInfo[2]}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {
                    <Image
                      src={"/images/social/github.png"}
                      width={20}
                      height={20}
                      alt="github"
                    />
                  }
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
