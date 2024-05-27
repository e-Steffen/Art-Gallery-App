import Layout from "@/components/Layout";
import GlobalStyle from "../styles";
import useSWR from "swr";

const fetcher = (...url) => fetch(...url).then((res) => res.json());


 

export default function App({ Component, pageProps }) {
  const URL = "https://example-apis.vercel.app/api/art/";
  const { data: pieces, error, isLoading } = useSWR(URL, fetcher);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;



  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} pieces={pieces} />
      <Layout />
    </>
  );
}
