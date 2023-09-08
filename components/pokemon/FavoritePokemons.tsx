import { FC } from "react";

import { Grid } from "@nextui-org/react";
import FavoriteCardPokemon from "./FavoriteCardPokemon";

interface Props {
  favoritesPokemons: number[];
}

const FavoritePokemons: FC<Props> = ({ favoritesPokemons }) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {favoritesPokemons.map((id) => (
        <FavoriteCardPokemon id={id} key={id} />
      ))}
    </Grid.Container>
  );
};

export default FavoritePokemons;
