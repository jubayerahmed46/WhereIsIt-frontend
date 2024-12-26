import Banner from "./Banner";
import LatestLostAndFound from "./LatestLostAndFound";
import { Helmet } from "react-helmet-async";
import Services from "./Services";
import Reviews from "./Reviews";

function Home() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>WhereIsIt | Home</title>
      </Helmet>
      <Banner />
      <LatestLostAndFound />
      <Services />

      <Reviews />
    </div>
  );
}

export default Home;
