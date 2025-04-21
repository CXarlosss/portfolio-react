// @ts-nocheck
import React from 'react';
import styles from '../../styles/components/common/button.module.css'; // Create Common.module.css

function Button({ children, onClick, variant, link, className }) {
  const buttonStyle = `${styles.button} ${styles[variant]} ${className}`;

  if (link) {
    return (
      <a href={link} className={buttonStyle} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button className={buttonStyle} onClick={onClick}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  variant: 'primary',
  className: '',
};

export default Button;