const AdvertCard = ({ item }) => {
  const { id, img, title, address, details, status } = item;
  return (
    <div>
      <article className="flex flex-col dark:bg-gray-900">
        <div>
          <img
            alt=""
            className="object-cover w-full h-52 dark:bg-gray-500"
            src={img}
          />
        </div>
        <div className="flex flex-col flex-1 p-6">
          <a
            rel="noopener noreferrer"
            href="#"
            aria-label="Te nulla oportere reprimique his dolorum"
          ></a>
          <a
            rel="noopener noreferrer"
            href="#"
            className="text-xs tracki uppercase hover:underline dark:text-violet-400"
          >
            {title}
          </a>
          <h3 className="flex-1 py-2 text-lg font-semibold leadi">
            Te nulla oportere reprimique his dolorum
          </h3>
          <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
            <span>June 1, 2020</span>
            <span>2.1K views</span>
          </div>
        </div>
      </article>
    </div>
  );
};

export default AdvertCard;
