// @ts-nocheck
import React from 'react';
import styles from '../../styles/components/common/skillBadge.module.css'; // Use Common.module.css

function SkillBadge({ skill }) {
  return <span className={styles.skillBadge}>{skill}</span>;
}

export default SkillBadge;