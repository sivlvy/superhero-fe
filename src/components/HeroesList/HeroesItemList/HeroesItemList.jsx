import styles from "./heroes-item-list.module.scss";
import { useState } from "react";
import { CustomModal } from "../../UI/CustomModal/CustomModal";
import { DetailedInfoPopUp } from "../../UI/PopUps/DetailedInfoPopUp/DetailedInfoPopUp";
import { Button } from "../../UI/Button/Button";
import { UpdateHeroPopUp } from "../../UI/PopUps/UpdateHeroPopUp/UpdateHeroPopUp";

const ModalWrapper = ({ isOpen, onClose, children }) => (
  <CustomModal isOpen={isOpen} onRequestClose={onClose}>
    {children}
  </CustomModal>
);

const HeroesItemList = ({ item, handleDelete }) => {
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

  const { nickname, images } = item;
  const imageSrc = images[0];

  const handleOpenModal = (setModalOpen) => () => setModalOpen(true);
  const handleCloseModal = (setModalOpen) => () => setModalOpen(false);

  return (
    <li className={styles.item}>
      <img
        className={styles.image}
        width="200"
        height="auto"
        src={imageSrc}
        alt={nickname}
      />
      <p>{nickname}</p>
      <Button
        handleClick={handleOpenModal(setIsDetailModalOpen)}
        text="Details"
      />
      <Button handleClick={() => handleDelete(item.id)} text="Delete hero" />
      <Button
        handleClick={handleOpenModal(setIsUpdateModalOpen)}
        text="Update hero"
      />

      <ModalWrapper
        isOpen={isDetailModalOpen}
        onClose={handleCloseModal(setIsDetailModalOpen)}
      >
        <DetailedInfoPopUp item={item} />
      </ModalWrapper>

      <ModalWrapper
        isOpen={isUpdateModalOpen}
        onClose={handleCloseModal(setIsUpdateModalOpen)}
      >
        <UpdateHeroPopUp item={item} />
      </ModalWrapper>
    </li>
  );
};

export { HeroesItemList };
