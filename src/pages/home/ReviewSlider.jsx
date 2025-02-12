/* eslint-disable react/prop-types */
import ReviewCard from "../../components/ReviewCard";
import Slider from "react-slick";

function ReviewSlider({ reviews }) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (!reviews.length) {
    return <h2>Not Revies Availible!</h2>;
  }
  return (
    <div className="slider-container relative ">
      <Slider {...settings}>
        {reviews.map((review, i) => (
          <ReviewCard review={review} key={i} />
        ))}
      </Slider>
    </div>
  );
}

export default ReviewSlider;
