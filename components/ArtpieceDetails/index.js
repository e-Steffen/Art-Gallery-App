import Image from "next/image";
import FavoriteButton from "../FavoriteButton";

export default function ArtpieceDetails({ image, title, artist, year, genre, isFavorite, slug, onToggleFavorite }) {
  console.log(image);
  return (
    <article>
      <Image
        src={image}
        height={400}
        width={400}
        alt="picture of the art piece gallery"
        priority={2}
      />
      <div>
        <p> title: {title} </p>
        <p> artist: {artist} </p>
        <p> publishing year: {year} </p>
        <p> genre: {genre} </p>
      </div>
      <FavoriteButton
        onToggleFavorite={onToggleFavorite}
        slug={slug}
        isFavorite={isFavorite}
      />
    </article>
  );
}
