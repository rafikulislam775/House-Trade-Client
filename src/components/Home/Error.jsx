import { NavLink, useRouteError } from "react-router-dom";
import { TbFaceIdError } from "react-icons/tb";
export default function Error() {
  const error = useRouteError();

  return (
    <div id="error-page">
      <section className="flex items-center h-screen sm:p-16 dark:bg-gray-900 dark:text-gray-100">
        <div className="container flex flex-col text-9xl items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
          <span className=" animate-ping">
            <TbFaceIdError />
          </span>

          <p className="text-3xl">
            <i>{error.statusText || error.message}</i>
          </p>
          <p className="text-2xl font-semibold md:text-3xl">
            Sorry, we couldn't find this page.
          </p>
          <p className="mt-4 text-sm mb-8 dark:text-gray-400">
            But dont worry, you can find plenty of other things on our homepage.
          </p>

          <button className=" btn btn-outline">
            <NavLink
              to="/"
              className="px-8 py-3 font-semibold rounded dark:bg-orange-400 dark:text-gray-900"
            >
              Back to homepage
            </NavLink>
          </button>
        </div>
      </section>
    </div>
  );
}
