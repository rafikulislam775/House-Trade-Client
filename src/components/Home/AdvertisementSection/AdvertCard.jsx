import { RiVerifiedBadgeFill } from "react-icons/ri";
import { ImLocation } from "react-icons/im";
import AOS from "aos";
import "aos/dist/aos.css";
import ReactParallaxTilt from "react-parallax-tilt";

AOS.init();
const AdvertCard = ({ item }) => {
  const { id, img, title, address, details, status, views } = item;

  return (
    <ReactParallaxTilt tiltEnable={false} scale={1.1} transitionSpeed={1500}>
      <div data-aos="zoom-in-down">
        <article className="flex flex-col dark:bg-gray-900">
          <div>
            <img
              alt=""
              className="object-cover w-full h-52 dark:bg-gray-500"
              src={img}
            />
          </div>
          <div className="flex flex-col flex-1 p-6">
            <h2>
              {title}
              <span className="absolute p-1 text-orange-500 ">
                {status === "verified" ? (
                  <RiVerifiedBadgeFill></RiVerifiedBadgeFill>
                ) : (
                  ""
                )}
              </span>
            </h2>
            <div className="badge badge-error text-white my-4">
              $ {details.price} K
            </div>

            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
              <span className="flex  ">
                <span className="mr-2 text-orange-500  ">
                  <ImLocation></ImLocation>
                </span>{" "}
                <span className="  whitespace-nowrap">{address}</span>
              </span>
            </div>
            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
              <span>{views}K views</span>
              <button className="btn btn-outline btn-xs btn-error">
                Details
              </button>
            </div>
          </div>
        </article>
      </div>
    </ReactParallaxTilt>
  );
};

export default AdvertCard;
