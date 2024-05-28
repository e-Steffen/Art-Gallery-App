import ArtPieces from "@/components/ArtPieces";

export default function RenderArtPieces({
  pieces,
  onToggleFavorite,
  isFavorite,
}) {
  //   const isFavorite = artPiecesInfo.find(
  //     (piece) => piece.slug === piece.slug
  //   )?.isFavorite;

  return (
    <ArtPieces
      pieces={pieces}
      onToggleFavorite={onToggleFavorite}
      isFavorite={isFavorite}
    ></ArtPieces>
  );
}
