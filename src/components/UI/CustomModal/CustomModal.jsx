import Modal from "react-modal";
import styles from "./custom-modal.module.scss";

Modal.setAppElement("#root");

const CustomModal = ({ isOpen, onRequestClose, children }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <button onClick={onRequestClose}>X</button>
      <div className={styles.content}>{children}</div>
    </Modal>
  );
};

export { CustomModal };