import React, { useEffect, useRef } from "react";
import { useClickaway } from "../hooks/useClickaway";
import styles from "./Modal.module.css";
import ModalHeader from "./ModalHeader";
import ModalBody from "./ModalBody";
import ModalFooter from "./ModalFooter";

// small : min-width: 480px;
// medium : min-width: 768px;
// large : min-width: 1024px;
// wide : min-width: 1280px;

export default function Modal({ show, closeOnClickaway, onClose, children }) {
  const $modalContainer = useRef();
  useClickaway($modalContainer, () => {
    if (closeOnClickaway && onClose) {
      onClose();
    }
  });
  if (!show) return null;
  return (
    <div className={styles.modalOverlay}>
      <div ref={$modalContainer} className={styles.modalContainer}>
        {children}
      </div>
    </div>
  );
}

Modal.displayName = "Modal";

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
