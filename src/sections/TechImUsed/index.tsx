"use client"
import { useSectionInView } from 'app/hooks/hooks'
import SkillCard from 'components/SkillCard'
import { SkillData } from 'data/data'
import React from 'react'
import styles from './TechImUsed.module.css'

type Props = {}

function TechImUsed({}: Props) {
  const { ref } = useSectionInView("Skills", 0.6)
  return (
    <section id="skills">
        <div className="container">
            <div className={`row ${styles.customRow}`}>
                <h1 className={styles.TechImUsedHeader}>Stack I&apos;m Used</h1>
                <div className={styles.cardcontainer} ref={ref}>
                    {SkillData.map((item) => (
                      <React.Fragment key={item.id}>
                        <SkillCard icon={item.icon} name={item.name} />
                      </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default TechImUsed