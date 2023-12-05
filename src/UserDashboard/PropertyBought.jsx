import { Link } from "react-router-dom";
import { TbPaperBagOff } from "react-icons/tb";
const PropertyBought = () => {
  return (
    <div>
      <section className="flex items-center h-full sm:p-16  text-black">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
          <TbPaperBagOff className="text-8xl"></TbPaperBagOff>
          <p className="text-3xl">
            Looks like you have not bought any property yet!
          </p>
          <Link
            to="/"
            className="px-8 py-3 font-semibold rounded dark:bg-orange-500 text-white hover:animate-pulse"
          >
            Back to homepage
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PropertyBought;
