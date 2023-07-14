import "@/styles/globals.css";
import { Header, ScrollTop, Footer } from "../Components/index.js";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ScrollTop/>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
