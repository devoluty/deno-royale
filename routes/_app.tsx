import { Head } from "$fresh/runtime.ts";
import { AppProps } from "$fresh/server.ts";
import Header from "../components/Header.tsx";

export default function App(props: AppProps) {
  return (
    <>
      <Head>
        <title>Mario Royale API</title>
        <meta name="title" content="Mario Royale API" />
        <meta
          name="description"
          content="Just a clash royale API"
        />
      </Head>
      <Header />
      <props.Component />
    </>
  );
}
