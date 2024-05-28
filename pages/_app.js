import Layout from "@/components/Layout";
import GlobalStyle from "../styles";
import useSWR from "swr";
import { useState } from "react";

const fetcher = (...url) => fetch(...url).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const URL = "https://example-apis.vercel.app/api/art/";
  const { data: pieces, error, isLoading } = useSWR(URL, fetcher);

  const [artPiecesInfo, setArtPiecesInfo] = useState([
    // slug, favorites, comments
  ]);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  function onToggleFavorite(slug) {
    const foundPiece = artPiecesInfo.find((piece) => piece.slug === slug);
    if (foundPiece) {
      setArtPiecesInfo(
        artPiecesInfo.map((piece) =>
          piece.slug === slug
            ? { ...piece, isFavorite: !piece.isFavorite }
            : piece
        )
      );
    } else {
      setArtPiecesInfo([...artPiecesInfo, { slug: slug, isFavorite: true }]);
    }
  }

  const isFavorite = artPiecesInfo.find(
    (piece) => piece.slug === piece.slug
  )?.isFavorite;

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        pieces={pieces}
        artPiecesInfo={artPiecesInfo}
        setArtPiecesInfo={setArtPiecesInfo}
        onToggleFavorite={onToggleFavorite}
        isFavorite={isFavorite}
      />
      <Layout />
    </>
  );
}
