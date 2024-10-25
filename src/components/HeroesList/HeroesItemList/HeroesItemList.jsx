import styles from "./heroes-item-list.module.scss";
import { useState } from "react";
import { CustomModal } from "../../UI/CustomModal/CustomModal";
import { DetailedInfoPopUp } from "../../UI/PopUps/DetailedInfoPopUp/DetailedInfoPopUp";
import { Button } from "../../UI/Button/Button";
import { deleteHero } from "../../../api/superheroes.api";

const HeroesItemList = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleDelete = async () => {
    const res = await deleteHero(item.id);
    console.log(res);
    return res;
  };

  const handleChange = () => {};

  const { nickname, images } = item;
  return (
    <li className={styles.item}>
      <img
        className={styles.image}
        width="200"
        height="auto"
        src={images[0]}
        alt={nickname}
      />
      <p>{nickname}</p>
      <Button handleClick={handleOpenModal} text="Details" />
      <CustomModal isOpen={isModalOpen} onRequestClose={handleCloseModal}>
        <DetailedInfoPopUp item={item} />
      </CustomModal>
      <Button handleClick={handleDelete} text="Delete hero" />
      <Button handleClick={handleChange} text="Update hero" />
    </li>
  );
};

export { HeroesItemList };
