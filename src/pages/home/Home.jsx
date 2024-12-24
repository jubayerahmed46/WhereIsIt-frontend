import Banner from "./Banner";
import LatestLostAndFound from "./LatestLostAndFound";
import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>WhereIsIt | Home</title>
      </Helmet>
      <Banner />
      <LatestLostAndFound />
    </div>
  );
}

export default Home;
