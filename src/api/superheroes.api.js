import { instance } from "./axios.config";

export const fetchAllSuperHeroes = async () => {
  const { data } = await instance.get("/api");
  return data;
};

export const createHero = async (body) => {
  const data = await instance.post("/api", body);
  return data;
};

export const updateHero = async (body, heroId) => {
  const data = await instance.put(`/api/${heroId}`, body);
  return data;
};

export const deleteHero = async (heroId) => {
  const data = await instance.delete(`/api/${heroId}`);
  return data;
};
