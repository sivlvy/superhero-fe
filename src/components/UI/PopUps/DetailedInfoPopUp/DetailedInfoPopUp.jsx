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
    <div className={styles.wrapper}>
      <div className={styles.imagesWrapper}>
        {images.map((image) => (
          <img className={styles.images} src={image} key={image} alt="" />
        ))}
      </div>
      <div className={styles.infoWrapper}>
        <p>
          <span style={{ fontWeight: "bold" }}>Nickname</span>: {nickname}
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>Real name</span>: {real_name}
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>Description</span>:{" "}
          {origin_description}
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>Superpowers</span>: {superpowers}
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>Phrases</span>: {catch_phrase}
        </p>
      </div>
    </div>
  );
};

export { DetailedInfoPopUp };
