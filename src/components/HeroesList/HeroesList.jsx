import { useEffect, useState } from "react";
import { deleteHero, fetchAllSuperHeroes } from "../../api/superheroes.api";
import { HeroesItemList } from "./HeroesItemList/HeroesItemList";
import styles from "./HeroesItemList/heroes-item-list.module.scss";
import { Pagination } from "../Pagination/Pagination";
import { Loader } from "../UI/Loader/Loader";

const LIMIT = 5;

const HeroesList = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [totalHeroes, setTotalHeroes] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const { heroes, totalHeroes } = await fetchAllSuperHeroes();
        setData(heroes);
        setTotalHeroes(totalHeroes);
      } catch (e) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [page]);

  const handleDelete = async (heroId) => {
    setError(null);
    try {
      await deleteHero(heroId);

      setData((prevData) => prevData.filter((hero) => hero.id !== heroId));
      setTotalHeroes(totalHeroes);
    } catch (e) {
      setError(e.message);
    }
  };

  const startIndex = (page - 1) * LIMIT;
  const currentHeroes = data.slice(startIndex, startIndex + LIMIT);

  const totalPages = Math.ceil(totalHeroes / LIMIT);

  const nextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div className={styles.wrapper}>
      {isLoading ? (
        <Loader />
      ) : (
        <ul className={styles.list}>
          {currentHeroes.map((hero) => (
            <HeroesItemList
              item={hero}
              key={hero.id}
              handleDelete={handleDelete}
            />
          ))}
        </ul>
      )}
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onNext={nextPage}
        onPrev={prevPage}
      />
      {error && <p>Помилка: {error}</p>}
    </div>
  );
};

export { HeroesList };
