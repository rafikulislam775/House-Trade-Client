const BannerHero = () => {
  return (
    <div
      className=" bg-fixed min-h-[75vh] "
      style={{
        backgroundImage: "url(https://i.ibb.co/d2qkphz/home-banner.jpg)",
      }}
    >
      <div className=" bg-opacity-60  bg-gray-600 min-h-[75vh] flex flex-col justify-center items-center text-white">
        <h1 className="mb-5 text-7xl font-bold border-l-8 pl-5">
          The Best Way To <br />
          <span className="mb-5 text-left text-xl">Find Your Perfect Property</span>
        </h1>
      </div>
    </div>
  );
};

export default BannerHero;
