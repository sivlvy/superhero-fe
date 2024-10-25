import styles from "./detailed-info-pop-up.module.scss";

const DetailedInfoPopUp = ({ item }) => {
  console.log(item);
  const {
    nickname,
    origin_description,
    real_name,
    superpowers,
    catch_phrase,
    images,
  } = item;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
      className={styles.wrapper}
    >
      <div className={styles.imagesWrapper}>
        {images.map((image) => (
          <img src={image} key={image} alt="" />
        ))}
      </div>
      <div className={styles.infoWrapper}>
        <p>Nickname: {nickname}</p>
        <p>Real name: {real_name}</p>
        <p>Description: {origin_description}</p>
        <p>Superpowers: {superpowers}</p>
        <p>Phrases: {catch_phrase}</p>
      </div>
    </div>
  );
};

export { DetailedInfoPopUp };
