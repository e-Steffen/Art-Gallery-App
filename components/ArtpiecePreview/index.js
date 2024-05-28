import Image from "next/image";
import styled from "styled-components";
import FavoriteButton from "../FavoriteButton";

export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <article Classname="ArtpiecePreview__article">
      <Image
        src={image}
        height={400}
        width={400}
        alt="picture of the art piece gallery"
      />

      <StyledInfoContainer>
        {" "}
        {title} © {artist}{" "}
      </StyledInfoContainer>
    </article>
  );
}

const StyledInfoContainer = styled.div`
  width: 400px;
  min-height: 30px;
  background-color: black;
  color: white;
  text-align: center;
  padding: 5px;
`;
