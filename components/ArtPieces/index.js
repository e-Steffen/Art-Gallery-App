import styled from "styled-components";
import Link from "next/link";

import ArtPiecePreview from "../ArtpiecePreview";

export default function ArtPieces({ pieces }) {
  console.log(pieces);

  return (
    <StyledUl>
      {pieces.map((piece) => (
        <StyledListItem key={piece.slug}>
          <Link href={`/art-pieces/${piece.slug}`}>
            <ArtPiecePreview
              image={piece.imageSource}
              title={piece.name}
              artist={piece.artist}
            />
          </Link>
        </StyledListItem>
      ))}
    </StyledUl>
  );
}

const StyledUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
`;

const StyledListItem = styled.li`
  list-style: none;
`;
