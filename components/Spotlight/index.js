import Image from "next/image";

export default function Spotlight({ image, artist, height, width }) {
  return (
    <>
      <Image
        src={image}
        height={height * 0.3}
        width={width * 0.3}
        // layout="responsive"
        alt="a random art-image"
      />
      <p>
        This piece of art was created by <b>{artist}</b>
      </p>
    </>
  );
}
