import { HeroesList } from "../components/HeroesList/HeroesList";
import { Button } from "../components/UI/Button/Button";
import { useState } from "react";
import { CreateHeroPopUp } from "../components/UI/PopUps/CreateHeroPopUp/CreateHeroPopUp";
import { CustomModal } from "../components/UI/CustomModal/CustomModal";

const MainPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button text="Create hero" handleClick={handleOpenModal} />
      <CustomModal onRequestClose={handleCloseModal} isOpen={isModalOpen}>
        <CreateHeroPopUp />
      </CustomModal>
      <HeroesList />
    </>
  );
};

export { MainPage };
