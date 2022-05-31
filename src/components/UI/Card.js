import React from 'react';
import styles from './Card.module.css';

const Card = (props)=>{
  return(
    // ``을 이용해서 외부에서 들어오는 클래스를 확장해 추가함!
    <div className={`${styles.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;