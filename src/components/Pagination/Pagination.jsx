import styles from "./pagination.styles.module.scss";

const Pagination = ({ currentPage, totalPages, onNext, onPrev }) => {
  return (
    <div className={styles.pagination}>
      <button onClick={onPrev} disabled={currentPage === 1}>
        Prev
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button onClick={onNext}>Next</button>
    </div>
  );
};

export { Pagination };
