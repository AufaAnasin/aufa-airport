"use client"
import React from 'react'
import 'react-vertical-timeline-component/style.min.css'
import styles from './Timeline.module.css'

import { ExperienceData, iconMap } from 'data/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props = {}

function Timeline({}: Props) {

  return (
    <div>
        <div className="container"> 
            <div className={styles.timelineWrapper}>
                {ExperienceData.map((item) => (
                    <React.Fragment key={item.id}>
                    <div className={`${styles.card} ${item.id % 2 !== 0 ? `${styles.leftContainer}` : `${styles.rightContainer}`}`}>
                         <FontAwesomeIcon icon={iconMap[item.icon]} className={styles.imgIcon} />
                    <div className={styles.textbox}>
                        <h2>{item.company}</h2>
                        <small>{item.date}</small>
                        <p>{item.description}</p>
                        <span className={item.id % 2 !== 0 ? `${styles.leftContainerArrow}`: `${styles.rightContainerArrow}` }></span>
                    </div>
                    </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Timeline