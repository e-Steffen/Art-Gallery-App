import styled from "styled-components";
import Link from "next/link";

import ArtPiecePreview from "../ArtpiecePreview";
import FavoriteButton from "../FavoriteButton";

export default function ArtPieces({ pieces, onToggleFavorite, isFavorite }) {
  return (
    <StyledUl>
      {pieces.map((piece) => (
        <StyledListItem key={piece.slug}>
          <FavoriteButton
            onToggleFavorite={onToggleFavorite}
            slug={piece.slug}
            isFavorite={isFavorite}
          />
          <Link href={`/art-pieces/${piece.slug}`}>
            <ArtPiecePreview
              image={piece.imageSource}
              title={piece.name}
              artist={piece.artist}
              onToggleFavorite={onToggleFavorite}
              slug={piece.slug}
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
