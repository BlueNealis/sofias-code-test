import styles from "./visit.module.scss";
import { ImageOrSvg } from "../ImageorSvg/imageOrSvg";
import GoogleMap from "../Location/Map";

export const VisitSection = ({ section, parallax }) => {
  const {
    sectionImage,
    hoursHeadline,
    hoursGroups,
    parallaxIconOne,
    parallaxIconTwo,
    addressLine1,
    addressLine2,
    zip,
    city,
    stateAbbreviation,
    googleMapLink,
    menuTitle,
    mapLocation,
  } = section.fields;

  console.log('head',hoursHeadline, 'group', hoursGroups)

  return <section id={menuTitle} className={styles.visitSection}>
    <div className={styles.topLeftInfo}>
      <div className={styles.hoursSection}>
        <h1>{hoursHeadline}</h1>
        <h1>{hoursGroups[0].fields.title}</h1>
        <h1>{`${hoursGroups[0].fields.hours[0].fields.startDay} - ${hoursGroups[0].fields.hours[0].fields.endDay}`}</h1>
        <h1>{`${hoursGroups[0].fields.hours[0].fields.startTime} - ${hoursGroups[0].fields.hours[0].fields.endTime}`}</h1>
      </div>
      <div className={styles.pizzaIcon}>
        <ImageOrSvg image={parallaxIconOne}/>
        <ImageOrSvg image={parallaxIconTwo}/>
      </div>
    </div>
  </section>;
};
