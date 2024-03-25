

const API = "https://api.themoviedb.org/3";

export const get = (path) => {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMzRkMDE5M2M2MDQzYmViYTQwNGU5OTIwOTY3MTIwZiIsInN1YiI6IjY1OGI5NWNiNjZlYmE3NzYwZTNmZDU5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gMe2iEK5zGoBRBNqiDJ1NSGyidQH4IJSA8o_bKcSBFE",
        "Content-Type": "application/json;charset=utf-8",
    },
  }).then((results)=>results.json());
};
get("/discover/movie");
