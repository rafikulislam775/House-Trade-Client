import { useState } from "react";
import { useEffect } from "react";
import AdvertCard from "./advertCard";

const Adviertisement = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("./advertisment.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  console.log(data);
  return (
    <div>
      <section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
        <div className="container p-6 mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold">Premium Properties</h2>
            <p className="font-serif text-sm dark:text-gray-400">
              Explore Luxury in Every Detail with Our Premium Properties
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            {data?.map((item) => (
              <AdvertCard key={item.id} item={item}></AdvertCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Adviertisement;
