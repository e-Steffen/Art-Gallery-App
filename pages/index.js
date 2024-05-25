import ArtPieces from "@/components/ArtPieces";
import useSWR from "swr";
const URL = "https://example-apis.vercel.app/api/art";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const { data: pieces, error, isLoading } = useSWR(URL, fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  
  
  return ( 
    <ArtPieces pieces={pieces}></ArtPieces>
  );

}
