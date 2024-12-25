import React from "react";

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
    <div className="pt-10">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
        Industries Serviced
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 p-4">
        {industries.map((industry) => (
          <div key={industry.name} className="flex flex-col items-center">
            <img
              src={industry.img}
              alt={industry.name}
              className=" md:h-24 h-16"
            />
            <p className="mt-2 text-center text-sm w-24">{industry.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
