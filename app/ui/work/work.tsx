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

const samples = [
  [
    "Pomodoro React Web App",
    "https://pomodoro-react-app.netlify.com",
    "https://github.com/Lartwel/pomodoro-app",
  ],
  // '// portfolio': ['Portfolio', 'http://mahmoud-ahmed.eb2a.com/,],
  ["Restaurant Website", "http://mahmoud-ahmed.eb2a.com/Restaurant"],
  ["Weather App Landing Page", "http://mahmoud-ahmed.eb2a.com/weather"],
  [
    "Furniture Agency Website",
    "https://wooder-site.netlify.app",
    "https://github.com/Lartwel/Wooder",
  ],
  [
    "Weather Forecaster React App",
    "https://weather-forecaster-app.netlify.app/",
    "https://github.com/Lartwel/weather-forecaster",
  ],
];

export const Work = () => {
  return (
    <section id="work" className={styles.work}>
      <h3 className="section-title">Work</h3>

      <div className={styles.samples}>
        {samples.map((sample, i) => (
          <div className={styles.sample} key={i}>
            <a
              className={styles.imgWrapper}
              href={sample[1]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={images[i]} alt={sample[0]} fill />
            </a>
            <div className={styles.sampleName}>{sample[0]}</div>

            <div className={styles.sampleLink}>
              {
                <a href={sample[1]} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={`/images/social/link.png`}
                    width={20}
                    height={20}
                    alt="link"
                  />
                </a>
              }
            </div>
            {sample?.length === 3 && (
              <div className={styles.sampleLink}>
                <a
                  href={`${sample[2]}`}
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
