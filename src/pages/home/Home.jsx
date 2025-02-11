import Banner from "./Banner";
import LatestLostAndFound from "./LatestLostAndFound";
import { Helmet } from "react-helmet-async";
import Services from "./Services";
import Reviews from "./Reviews";

function Home() {
  return (
    <div className="mt-20">
      <Helmet>
        <meta charSet="utf-8" />
        <title>WhereIsIt | Home</title>
      </Helmet>
      <Banner />
      <div className="mx-auto max-w-7xl lg:px-9 md:px-5 px-3">
        <LatestLostAndFound />
      </div>
      <Services />
      <div className="mx-auto max-w-7xl lg:px-9 md:px-5 px-3">
        <Reviews />
      </div>
    </div>
  );
}

export default Home;
