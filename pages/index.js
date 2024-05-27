
import Spotlight from "@/components/Spotlight";
import ArtPieces from "@/components/ArtPieces";
import useSWR from "swr";

const fetcher = (...url) => fetch(...url).then((res) => res.json());

export default function HomePage() {
  const URL = "https://example-apis.vercel.app/api/art/";
  const { data: pieces, error, isLoading } = useSWR(URL, fetcher);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  function randomIndex(pieces) {
    return pieces[Math.floor(Math.random() * pieces.length)];
  }

  const randomPiece = randomIndex(pieces);

  return (
    <>
      <div>
        <h1>This is under Construction</h1>
      </div>
    <ArtPieces pieces={pieces}></ArtPieces>
      <Spotlight
        image={randomPiece.imageSource}
        artist={randomPiece.artist}
        width={randomPiece.dimensions.width}
        height={randomPiece.dimensions.height}
      />
    </>
  );

}
