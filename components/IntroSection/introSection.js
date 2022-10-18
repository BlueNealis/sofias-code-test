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
    <div>
      <h1>{headline}</h1>
    </div>
    <div className='mainImageSection'>
      <ImageOrSvg image={mainImage}/>
    </div>
  </section>;
};
