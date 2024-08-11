import { fetchWithCache } from "@tp/utilities";

export function getProcurement(pageNum = 1) {
  return fetchWithCache(`procurement/?page=${pageNum}`);
}

export function getPlanet(id) {
  return fetchWithCache(`planets/${id}/`);
}

export function getFilm(filmId) {
  return fetchWithCache(`films/${filmId}`);
}

export function getFilms() {
  return fetchWithCache(`films`);
}
