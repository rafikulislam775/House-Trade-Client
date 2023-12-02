import AllUsers from "./AllUsers";

const Information = () => {

  return (
    <div>
      <div>
        <div className="flex h-screen  border-l flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100">
          <h2 className="text-xl font-semibold border-b p-2 ">
            All User Information{" "}
          </h2>
          <AllUsers></AllUsers>
        </div>
      </div>
    </div>
  );
};

export default Information;
