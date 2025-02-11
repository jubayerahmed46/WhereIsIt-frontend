import { Carousel } from "@material-tailwind/react";

function Banner() {
  const images = [
    {
      id: 134,
      url: " https://i.ibb.co.com/d0vj6LGH/Father-comforts-son-at-airport.webp",
    },
    {
      id: 2345,
      url: "https://i.ibb.co/YjfvXcc/blog-frontpage-crying.jpg",
    },
    {
      id: 3435,
      url: " https://i.ibb.co.com/ZRkr7910/Lost-and-Found-Items-Key-Street-Shutterstock.webp",
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

      <div className="text-left   absolute bottom-0 md:pl-10 md:pb-10 mx-auto max-w-7xl lg:px-9 md:px-5 px-3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-30  w-9/12">
        <div className="absolute md:-bottom-24 -bottom-20 2xl:left-10 lg:-left-20 xl:-left-32 md:-left-20 -left-8 ">
          <h1 className="  lg:text-5xl md:text-4xl text-3xl  font-semibold  my-2 capitalize  max-w-xl ">
            Online Lost and Found, Locate For Lost & Found Items
          </h1>

          <p className="md:text-xl text-base max-w-2xl">
            Reuniting lost items with their rightful owners. Let’s make
            lost-and-found easier for everyone!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
