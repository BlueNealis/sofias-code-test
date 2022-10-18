import styles from "./visit.module.scss";
import Link from "next/link"
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

  console.log('map', mapLocation, 'link', googleMapLink)

  return <section id={menuTitle} className={styles.visitSection}>
  <div className={styles.infoColumn}>
      <div className={styles.topLeftInfo}>
        <div className={styles.hoursSection}>
          <h1 className={styles.hoursHeadline}>{hoursHeadline}</h1>
          <h1>{hoursGroups[0].fields.title}</h1>
          <div className={styles.hoursInfo}>
            <h1>{`${hoursGroups[0].fields.hours[0].fields.startDay} - ${hoursGroups[0].fields.hours[0].fields.endDay}`}</h1>
            <h1>{`${hoursGroups[0].fields.hours[0].fields.startTime} - ${hoursGroups[0].fields.hours[0].fields.endTime}`}</h1>
          </div>
        </div>
        <div className={styles.pizzaIcon}>
          <ImageOrSvg image={parallaxIconOne}/>
        </div>
        <div className={styles.hourIcon}>
          <ImageOrSvg image={parallaxIconTwo}/>
        </div>
      </div>
      <div className={styles.bottomLeftInfo}>
        <Link href={googleMapLink}>
          <h1>location</h1>
        </Link>
        <h1>{addressLine1}</h1>
        <h1>{addressLine2}</h1>
        <h1>{`${city}, ${zip}, ${stateAbbreviation}`}</h1>
        <div className={styles.mapContainer}>
        </div>
      </div>
    </div>
    <div className={styles.imageSideSection}>
      <div className={styles.image}>
        <ImageOrSvg image={sectionImage}/>
      </div>
    </div>
  </section>;
};
