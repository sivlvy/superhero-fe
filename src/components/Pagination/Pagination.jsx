import styles from "./pagination.styles.module.scss";

const Pagination = ({ currentPage, totalPages, onNext, onPrev }) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const renderButton = (label, onClick, disabled) => {
    return (
      <button className={styles.button} onClick={onClick} disabled={disabled}>
        {label}
      </button>
    );
  };

  return (
    <div className={styles.pagination}>
      {renderButton("Попередня", onPrev, isFirstPage)}
      <span>
        Сторінка {currentPage} з {totalPages}
      </span>
      {renderButton("Наступна", onNext, isLastPage)}
    </div>
  );
};

export { Pagination };
