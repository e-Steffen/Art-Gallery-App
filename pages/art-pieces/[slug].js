import ArtpieceDetails from "@/components/ArtpieceDetails";
import { useRouter } from "next/router";

export default function RenderArtpieceDetails({ pieces }) {
  const router = useRouter();
  const { slug } = router.query;

  const detailPiece = pieces.find((piece) => piece.slug === slug);
  const { imageSource: image, name: title, artist, year, genre } = detailPiece;

  console.log(detailPiece);

  return (
    <ArtpieceDetails
      image={image}
      title={title}
      artist={artist}
      year={year}
      genre={genre}
    />
  );
}
