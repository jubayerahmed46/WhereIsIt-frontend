import Banner from "./Banner";
import LatestLostAndFound from "./LatestLostAndFound";
import { Helmet } from "react-helmet-async";
import Services from "./Services";

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
    </div>
  );
}

export default Home;
