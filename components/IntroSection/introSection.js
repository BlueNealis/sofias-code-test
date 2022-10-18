import styles from "./intro.module.scss";
import { ImageOrSvg } from "../ImageorSvg/imageOrSvg.js";

export const IntroSection = ({ section, parallax }) => {
  const {
    logoIcon,
    headline,
    subhead,
    mainImage,
    mainImageIcon,
    parallaxOne,
    parallaxTwo,
  } = section.fields;

  return <section className={styles.introSection}>
    <div className={styles.title}>
      <h1 className={styles.subhead}>coming soon</h1>
      <h1 className={styles.head}>{headline}</h1>
    </div>
    <div className={styles.coinIcon}>
      <ImageOrSvg image={parallaxOne}/>
    </div>
    <div className={styles.mainImageSection}>
      <div className={styles.imageOuterBorder}>
        <div className={styles.mainImage}>
          <ImageOrSvg image={mainImage}/>
        </div>
      </div>
      <div className={styles.mainLogo}>
        <ImageOrSvg image={mainImageIcon}/>
      </div>
    </div>
    <ImageOrSvg image={parallaxTwo}/>
  </section>;
};
