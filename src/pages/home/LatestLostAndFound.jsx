import Button1 from "../../components/common/btns/Button1";

const products = [
  {
    id: 1,
    title: "Basic Tee",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
    description:
      "Find the latest updates on lost and found items. Whether youre searching for ",
    location: "Sylhet Bangladesh",
  },
  // More products...
];

export default function LatestLostAndFound() {
  return (
    <div className="bg-white">
      <div className=" py-8 ">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Latest Lost and Found Items
          </h2>
          <p className="mt-1">
            Find the latest updates on lost and found items. Whether youre
            searching for something youve lost or want to return a found item,
            this section helps you connect with others. Check here for recent
            entries!
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2  md:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <p className="text-xl">{product.title}</p>
                    <p>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.description.slice(0, 40)}
                    </p>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {product.location}
                  </p>
                </div>
              </div>
              <Button1 className={"mt-4"}>View Details</Button1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
