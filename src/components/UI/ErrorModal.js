import React from "react";
import styles from "./ErrorModal.module.css";

import Card from "./Card";
import Button from "./Button";

const ErrorModal = (props) => {
  return (
    <div>
      {/* 본문과 상호작용을 막아줌 */}
      <div className={styles.backdrop} onClick={props.onConfirm}/>
      <Card className={styles.modal}>
        <header className={styles.header}>
          {/* 모달창도 재사용할 수 있기 때문에 title등 동적으로 관리함. */}
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
