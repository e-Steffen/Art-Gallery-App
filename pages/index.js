import Spotlight from "@/components/Spotlight";

export default function SpotlightPage({
  pieces,
  onToggleFavorite,
  artPiecesInfo,
}) {
  function randomIndex(pieces) {
    return pieces[Math.floor(Math.random() * pieces.length)];
  }

  const randomPiece = randomIndex(pieces);
  const isFavorite = artPiecesInfo.find(
    (piece) => piece.slug === randomPiece.slug
  )?.isFavorite;

  return (
    <>
      <Spotlight
        name={randomPiece.name}
        image={randomPiece.imageSource}
        artist={randomPiece.artist}
        width={randomPiece.dimensions.width}
        height={randomPiece.dimensions.height}
        onToggleFavorite={onToggleFavorite}
        slug={randomPiece.slug}
        isFavorite={isFavorite}
      />
    </>
  );
}
