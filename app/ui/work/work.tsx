import Image from "next/image";
import styles from "./work.module.scss";
// import ForecasterImage from "@/app/ui/assets/samples/forecaster.png";
import PomodoroImage from "@/app/ui/assets/samples/pomodoro.png";
import RestaurantImage from "@/app/ui/assets/samples/restaurant.png";
import WeatherImage from "@/app/ui/assets/samples/weather.png";
import WooderImage from "@/app/ui/assets/samples/wooder.png";

const images = [
  WooderImage,
  RestaurantImage,
  PomodoroImage,
  // ForecasterImage,
  WeatherImage,
];

const samples = [
  [
    "Furniture Agency Website",
    "https://wooder-site.netlify.app",
    "https://github.com/M-Bekheet/Wooder",
  ],
  ["Restaurant Website", "https://restaurant-landing-sample.netlify.app/"],
  [
    "Pomodoro React Web App",
    "https://pomodoro-react-app.netlify.app/",
    "https://github.com/M-Bekheet/pomodoro-app",
  ],
  // [
  //   "Weather Forecaster React App",
  //   "https://weather-forecaster-app.netlify.app/",
  //   "https://github.com/M-Bekheet/weather-forecaster",
  // ],

  // '// portfolio': ['Portfolio', 'http://mahmoud-ahmed.eb2a.com/,],
  ["Weather App Landing Page", "https://weather-landing-page.netlify.app/"],
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
              <a href={sample[1]} target="_blank" rel="noopener noreferrer">
                <Image
                  src={`/images/social/link.png`}
                  width={20}
                  height={20}
                  alt="link"
                />
              </a>
            </div>
            {sample?.length === 3 && (
              <div className={styles.sampleLink}>
                <a
                  href={`${sample[2]}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={"/images/social/github.png"}
                    width={20}
                    height={20}
                    alt="github"
                  />
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
