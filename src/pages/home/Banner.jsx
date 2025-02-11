import { Carousel } from "@material-tailwind/react";

function Banner() {
  const images = [
    {
      id: 1,
      url: "https://i.ibb.co/vkkH3Fw/17ebf61beeb4c237b816fd1a89da57654a03f211.jpg",
    },
    {
      id: 2,
      url: "https://i.ibb.co/YjfvXcc/blog-frontpage-crying.jpg",
    },
    {
      id: 3,
      url: "https://i.ibb.co/HFGKcZM/the-etiquette-of-finding-and-returning-lost-items.webp",
    },
  ];

  return (
    <div className="relative mt-7">
      <Carousel
        className=" 2xl:h-[550px] lg:h-[520px] md:h-[470px] h-[520px]"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        {images.map((img) => (
          <img
            key={img.id}
            src={img.url}
            alt={`Slide ${img.id}`}
            className="h-full w-full object-cover brightness-[.4]"
          />
        ))}
      </Carousel>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-30  w-9/12">
        <h1 className="sm:text-nowrap text-center lg:text-6xl md:text-5xl text-3xl font-semibold text-blue-700 my-2 uppercase ">
          Online Lost and Found,
        </h1>
        <h2 className="md:text-4xl text-2xl font-bold text-center mb-4 text-[#d7d7d7] uppercase">
          Locate lost or found items!
        </h2>
        <p className="md:text-xl text-base text-center text-white/80 max-w-2xl mx-auto">
          Reuniting lost items with their rightful owners. Let’s make
          lost-and-found easier for everyone!
        </p>
      </div>
    </div>
  );
}

export default Banner;
