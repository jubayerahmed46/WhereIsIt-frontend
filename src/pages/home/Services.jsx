import { motion } from "framer-motion";
import SectionHeading from "../../components/SectionHeading";

const industries = [
  {
    name: "Public Parks & Gardens",
    img: "https://i.ibb.co/Y7WNCjd/Public-Parks-Gardens-Lost-and-Found.png",
  },
  {
    name: "Museum & Gallery",
    img: "https://i.ibb.co/3FkkVtF/Museum-Gallery-Lost-and-Found.png",
  },
  {
    name: "Rental Car",
    img: "https://i.ibb.co/88qy3Qq/Rental-Car-Lost-and-Found.png",
  },
  {
    name: "Restaurant & Dining",
    img: "https://i.ibb.co/SRh4zLX/Restaurant-Dining-Lost-and-Found.png",
  },
  {
    name: "Bar, Pub, and Night Club",
    img: "https://i.ibb.co/LvcGb6P/Bar-Pub-and-Night-Club-Lost-and-Found.png",
  },
  {
    name: "Public Transportation",
    img: "https://i.ibb.co/BN9vZxP/Public-Transportation-Lost-and-Found.png",
  },
  {
    name: "Music Venues & Sports Arenas",
    img: "https://i.ibb.co/kq5g2Gy/Music-Venues-Sports-Areans-Lost-and-Found.png",
  },
  {
    name: "Taxi & Car Service",
    img: "https://i.ibb.co/4RKWrj6/Taxi-Car-Service-Lost-and-Found.png",
  },
  {
    name: "College & University",
    img: "https://i.ibb.co/TL9mshC/College-University-Lost-and-Found.png",
  },
  {
    name: "Animal & Pet",
    img: "https://i.ibb.co/bsmYXWD/Animal-Pet-Lost-and-Found.png",
  },
  {
    name: "Hotel & Resort",
    img: "https://i.ibb.co/fMVXnBV/Hotel-Resort-Lost-and-Found.png",
  },
  {
    name: "Airport",
    img: "https://i.ibb.co/T2nsgXg/Airport-Lost-and-Found.png",
  },
];

const Services = () => {
  return (
    <div className=" mt-16">
      <div className="mx-auto max-w-7xl lg:px-9 md:px-5 px-3">
        <SectionHeading>Industries Serviced</SectionHeading>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
          {industries.map((industry) => (
            <motion.div
              key={industry.name}
              className="flex flex-col items-center bg-white dark:shadow-md dark:bg-gray-900/20 py-4 px-2  rounded-lg border dark:border-gray-600/50 transition-shadow duration-300"
              whileHover={{ scale: 1.01 }}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <img
                src={industry.img}
                alt={industry.name}
                className="md:h-20 sm:h-16 h-12 mb-2"
              />
              <p className=" text-center text-sm font-medium text-gray-700  dark:text-white/80">
                {industry.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
