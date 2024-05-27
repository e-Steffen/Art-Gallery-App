
import Spotlight from "@/components/Spotlight";





export default function SpotlightPage({pieces}) {
 

  function randomIndex(pieces) {
    return pieces[Math.floor(Math.random() * pieces.length)];
  }

  const randomPiece = randomIndex(pieces);

  return (
    <>

      <Spotlight
        image={randomPiece.imageSource}
        artist={randomPiece.artist}
        width={randomPiece.dimensions.width}
        height={randomPiece.dimensions.height}
      />
    </>
  );

}
