// import hero from "/public/hero.png";
// import "./banner.css";
// import Button1 from "../../components/common/btns/Button1";
// import { Link } from "react-router";

// function Banner() {
//   return (
//     <section className=" banner bg-[#1b8bfc4c] dark:bg-[#0e172173] -mt-6 md:py-24 py-14 md:pt-24  md:pb-20 pb-24 text-white ">
//       <div className="flex  lg:gap-52 xl:gap-64  gap-10 lg:flex-row flex-col mx-auto max-w-7xl lg:px-9 md:px-5 px-3 lg:py-0 py-4">
//         <div className="flex justify-center  flex-col lg:text-left text-center">
//           <h1 className="text-4xl uppercase font-extrabold text-black dark:text-white/95">
//             Report what you <br />
//             Found or Lost
//           </h1>
//           <h3 className="text-2xl text-[#003366] font-bold mt-3 dark:text-blue-500">
//             Lost or found something? <br /> Let us help you
//           </h3>
//           <div className="flex gap-3 mt-8  lg:justify-start justify-center">
//             <Link to={"lost-and-found"}>
//               <Button1
//                 className={
//                   "bg-[#003366] px-6 shadow-md text-lg uppercase  tracking-wide hover:bg-[#003366c5]"
//                 }
//               >
//                 I Have Lost{" "}
//               </Button1>
//             </Link>
//             <Link to={"lost-and-found"}>
//               <Button1
//                 className={
//                   "bg-[#ffffff] hover:bg-[#ffffffd8] px-6 text-black shadow-md text-lg uppercase tracking-wide"
//                 }
//               >
//                 I Have Found{" "}
//               </Button1>
//             </Link>
//           </div>
//           <div className="mt-3">
//             <p className=" text-black dark:text-white/85">
//               Want to know more? Please -{" "}
//               <Link to={"contact"}>
//                 <button className=" hover:text-blue-800">Contact</button>
//               </Link>
//             </p>
//           </div>
//         </div>
//         <div className="flex justify-center">
//           <img src={hero} alt="hero image" className="h-[400px]" />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Banner;

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
    <div className="relative -mt-6">
      <Carousel
        className=" 2xl:h-[580px] lg:h-[560px]  md:h-[470px] h-[520px]"
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
