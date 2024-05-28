import ArtpieceDetails from "@/components/ArtpieceDetails";
import { useRouter } from "next/router";

export default function RenderArtpieceDetails({
  pieces,
  onToggleFavorite,
  isFavorite,
}) {
  const router = useRouter();
  const { slug } = router.query;

  const detailPiece = pieces.find((piece) => piece.slug === slug);
  const { imageSource: image, name: title, artist, year, genre } = detailPiece;

  // const isFavorite = artPiecesInfo.find(
  //   (piece) => piece.slug === piece.slug
  // )?.isFavorite;

  return (
    <ArtpieceDetails
      image={image}
      title={title}
      artist={artist}
      year={year}
      genre={genre}
      onToggleFavorite={onToggleFavorite}
      slug={slug}
      isFavorite={isFavorite}
    />
  );
}
