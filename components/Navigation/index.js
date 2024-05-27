import Link from "next/link";
import ArtPieces from "../ArtPieces";

export default function Navigation() {
  return (
    <>
      <Link href="../">Spotlight</Link>
      <br></br>
      <Link href="/art-pieces">Pieces</Link>
    </>
  );
}
