import axios from "axios";

const ClevelandURL = axios.create({
  baseURL: "https://openaccess-api.clevelandart.org/api",
});

const curatorBackendURL = axios.create({
  baseURL: "https://curatorbackend.onrender.com/api",
});

export function getItems() {
  return ClevelandURL.get("/artworks?cc0=true&limit=10&q=paint").then(
    (result) => {
      return result.data.data;
    }
  );
}

export function getFavorites() {
  return curatorBackendURL.get("/user/:user_id/favorites").then((result) => {
    return result.data.data;
  });
}
