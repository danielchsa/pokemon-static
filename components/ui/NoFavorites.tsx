import { Container, Text } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const NoFavorites = () => {
  return (
    <Container
      css={{
        display: "flex",
        flexDirection: "column",
        height: "calc(100vh - 100px)",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <Text h1> No hay favoritos </Text>
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        width={250}
        height={250}
        style={{ opacity: 0.4 }}
      />
    </Container>
  );
};

export default NoFavorites;
