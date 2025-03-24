import { useEffect, useState } from "react";
import { getFavorites } from "../api";
import { FavoritesCard } from "./FavoriteCard";

export function FavoritesCardContainer({}) {
  const [favorites, setFavorites] = useState([]);
  const [isLoading, SetIsLoading] = useState(false);
  const [isError, SetIsError] = useState(false);
  useEffect(() => {
    SetIsLoading(true);
    SetIsError(false);
    getFavorites()
      .then((favorites) => {
        setFavorites(favorites);
        SetIsLoading(false);
        SetIsError(false);
      })
      .catch((err) => {
        SetIsLoading(false);
        SetIsError(true);
        console.log(err, "<OO");
      });
  }, [favorites]);

  //   if (isLoading) {
  //     return (
  //       <img
  //         className="loader"
  //         src="Spinner@1x-1.0s-200px-200px.gif"
  //         alt="a loading animation that shows bubbles forming from the inside of a circle, soreading out and then popping when the reach the edge of the circle"
  //       />
  //     );
  //   }

  if (isError) {
    return (
      <p className="Article-card-container">
        Something went wrong, you may want to check your internet connection 🤔
      </p>
    );
  }
  return (
    <div className="Item-card-container">
      {favorites.map((favorite) => {
        return <FavoritesCard favorite={favorite} />;
      })}
    </div>
  );
}
