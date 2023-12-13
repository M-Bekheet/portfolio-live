"use client";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import styles from "./testimonials.module.scss";
import Image from "next/image";

export const Testimonials = () => {
  return (
    <section id="testimonials" className={styles.testimonials}>
      <h3 className="section-title">Testimonials</h3>

      <Carousel showStatus={false} showThumbs={false} swipeable>
        <div>
          <Image
            alt="client"
            src={"/images/client.png"}
            width={80}
            height={115}
          />
          <p className={styles.legend}>
            Very responsive, and very flexible in terms of time and direction.
            Definitely recommended!
          </p>
          <p className={styles.clientName}>
            Peter<span>, United States</span>
          </p>
        </div>
        <div>
          <div>
            <Image
              alt="client"
              src={"/images/client.png"}
              width={80}
              height={115}
            />
          </div>
          <p className={styles.legend}>
            Mahmoud`&apos;s understanding and quality of work was exceptional.
            When challenged with a back end problem that I did not communicate
            to him in the original proposal, he rose to the challenge and
            resolved the problem!! Exceptional work, great communication and
            willing to go above and beyond. Looking forward to working with him
            again in the future!
          </p>
          <p className={styles.clientName}>
            Darren<span>, Australia</span>
          </p>
        </div>
        <div>
          <div>
            <Image
              alt="client"
              src={"/images/client.png"}
              width={80}
              height={115}
            />
          </div>
          <p className={styles.legend}>
            Mahmoud was very helpful and professional, as well as very kind and
            responsive. He really knew how to do what was asked and recommended
            a couple of improvements to the job. He asked all the right
            questions and described his way of working beforehand. I definitely
            recommend him and I will work with him again given the opportunity.{" "}
          </p>
          <p className={styles.clientName}>
            Ersin<span></span>, Turkey
          </p>
        </div>
      </Carousel>
    </section>
  );
};
