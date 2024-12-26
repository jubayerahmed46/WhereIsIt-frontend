import { motion } from "framer-motion";
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
        className="rounded-xl 2xl:h-[550px] lg:h-[520px] md:h-[470px] h-[520px]"
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
          <motion.img
            key={img.id}
            src={img.url}
            alt={`Slide ${img.id}`}
            className="h-full w-full object-cover brightness-[.4]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        ))}
      </Carousel>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-30">
        <motion.h1
          className="sm:text-nowrap text-center lg:text-6xl md:text-5xl text-4xl font-semibold text-white/90 my-2"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Online Lost and Found,
        </motion.h1>
        <motion.h2
          className="md:text-4xl text-3xl font-light text-center mb-4 text-blue-500"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Locate lost or found items!
        </motion.h2>
        <motion.p
          className="md:text-xl lg text-center text-white/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Reuniting lost items with their rightful owners. Let’s make
          lost-and-found easier for everyone!
        </motion.p>
      </div>
    </div>
  );
}

export default Banner;
