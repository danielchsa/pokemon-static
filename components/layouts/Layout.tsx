import Head from "next/head";
import { FC, ReactNode } from "react";
import { Navbar } from "../ui";

interface Props {
  title?: string;
  children: ReactNode;
}

const origin = typeof window !== "undefined" ? window.location.origin : "";

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Pokemon App" />
        <meta
          name="description"
          content={`Informacion sobre ${title || "pokemon app"}`}
        />
        <meta name="keywords" content="pokemon, pokedex, pokemon app" />

        <meta
          property="og:title"
          content={`Informacion sobre ${title || "pokemon app"}`}
        />
        <meta
          property="og:description"
          content={`La página muestra información sobre ${
            title || "pokemon app"
          }`}
        />
        <meta property="og:image" content={`${origin}/img/pokemon.jpg`} />
      </Head>
      <Navbar />
      <main style={{ padding: "20px 50px" }}>{children}</main>
    </>
  );
};
