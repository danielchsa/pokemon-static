import { useEffect, useState } from "react";

import { Layout } from "../../components/layouts";
import NoFavorites from "../../components/ui/NoFavorites";
import FavoritePokemons from "../../components/pokemon/FavoritePokemons";

import { localFavorites } from "../../utils";

const FavoritesPage = () => {
  const [favoritesPokemons, setfavoritesPokemons] = useState<number[]>([]);

  useEffect(() => {
    setfavoritesPokemons(localFavorites.pokemons());
  }, []);
  return (
    <Layout title="Favorites">
      {favoritesPokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemons favoritesPokemons={favoritesPokemons} />
      )}
    </Layout>
  );
};

export default FavoritesPage;
