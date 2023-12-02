import { ImHome } from "react-icons/im";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import ShoppingCart from "./ShoppingCart";
import { TiShoppingCart } from "react-icons/ti";
const UserDashboard = () => {
  const { user } = useAuth();


  return (
    <div className="flex bg-gray-900 ">
      <div className="h-screen p-3 space-y-2  w-64 dark:bg-gray-900 dark:text-gray-100">
        <div className="flex items-center p-2 space-x-4">
          <img
            // src="https://source.unsplash.com/100x100/?portrait"
            src={user && user?.photoURL}
            alt=""
            className="w-12 h-12 rounded-full dark:bg-gray-500"
          />
          <div className="">
            <h2 className="text-lg font-semibold">{user?.displayName}</h2>
            <span className="flex items-center space-x-1">
              <a
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
                rel="noopener noreferrer"
                href="#"
                className="text-xs hover:underline bg-gray-900"
              >
                My Profile
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <dialog
                  id="my_modal_5"
                  className="modal modal-bottom sm:modal-middle"
                >
                  <div className="modal-box bg-gray-900">
                    <div className="max-w-md  sm:flex sm:space-x-6 dark:bg-gray-900 dark:text-gray-100">
                      <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                        <img
                          src={user && user?.photoURL}
                          alt=""
                          className="object-cover object-center w-full h-full rounded dark:bg-gray-500"
                        />
                      </div>
                      <div className="flex flex-col space-y-4">
                        <div>
                          <h2 className="text-2xl font-semibold">
                            {user?.displayName}
                          </h2>
                        </div>
                        <div className="space-y-1">
                          <span className="flex items-center space-x-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              aria-label="Email address"
                              className="w-4 h-4"
                            >
                              <path
                                fill="currentColor"
                                d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"
                              ></path>
                            </svg>
                            <span className="dark:text-gray-400">
                              {user?.email}
                            </span>
                          </span>
                          <span className="flex items-center space-x-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              aria-label="Phonenumber"
                              className="w-4 h-4"
                            >
                              <path
                                fill="currentColor"
                                d="M449.366,89.648l-.685-.428L362.088,46.559,268.625,171.176l43,57.337a88.529,88.529,0,0,1-83.115,83.114l-57.336-43L46.558,362.088l42.306,85.869.356.725.429.684a25.085,25.085,0,0,0,21.393,11.857h22.344A327.836,327.836,0,0,0,461.222,133.386V111.041A25.084,25.084,0,0,0,449.366,89.648Zm-20.144,43.738c0,163.125-132.712,295.837-295.836,295.837h-18.08L87,371.76l84.18-63.135,46.867,35.149h5.333a120.535,120.535,0,0,0,120.4-120.4v-5.333l-35.149-46.866L371.759,87l57.463,28.311Z"
                              ></path>
                            </svg>
                            <span className="dark:text-gray-400">
                              +25 381 77 983
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="modal-action">
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                      </form>
                    </div>
                  </div>
                </dialog>
              </a>
            </span>
          </div>
        </div>
        <div className="divide-y dark:divide-gray-700">
          <ul className="pt-2 pb-4 space-y-1 text-sm">
            <li className="dark:bg-gray-800 dark:text-gray-50">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current dark:text-gray-400"
                >
                  <path d="M68.983,382.642l171.35,98.928a32.082,32.082,0,0,0,32,0l171.352-98.929a32.093,32.093,0,0,0,16-27.713V157.071a32.092,32.092,0,0,0-16-27.713L272.334,30.429a32.086,32.086,0,0,0-32,0L68.983,129.358a32.09,32.09,0,0,0-16,27.713V354.929A32.09,32.09,0,0,0,68.983,382.642ZM272.333,67.38l155.351,89.691V334.449L272.333,246.642ZM256.282,274.327l157.155,88.828-157.1,90.7L99.179,363.125ZM84.983,157.071,240.333,67.38v179.2L84.983,334.39Z"></path>
                </svg>
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <Link
                to="/"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <ImHome></ImHome>
                <span>Home</span>
              </Link>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <TiShoppingCart />
                <span>Wishlist</span>
              </a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current dark:text-gray-400"
                >
                  <path d="M203.247,386.414,208,381.185V355.4L130.125,191H93.875L16,355.4v27.042l4.234,4.595a124.347,124.347,0,0,0,91.224,39.982h.42A124.343,124.343,0,0,0,203.247,386.414ZM176,368.608a90.924,90.924,0,0,1-64.231,26.413h-.33A90.907,90.907,0,0,1,48,369.667V362.6l64-135.112L176,362.6Z"></path>
                  <path d="M418.125,191h-36.25L304,355.4v27.042l4.234,4.595a124.347,124.347,0,0,0,91.224,39.982h.42a124.343,124.343,0,0,0,91.369-40.607L496,381.185V355.4ZM464,368.608a90.924,90.924,0,0,1-64.231,26.413h-.33A90.907,90.907,0,0,1,336,369.667V362.6l64-135.112L464,362.6Z"></path>
                  <path d="M272,196.659A56.223,56.223,0,0,0,309.659,159H416V127H309.659a55.991,55.991,0,0,0-107.318,0H96v32H202.341A56.223,56.223,0,0,0,240,196.659V463H136v32H376V463H272ZM232,143a24,24,0,1,1,24,24A24,24,0,0,1,232,143Z"></path>
                </svg>
                <span>Property bought</span>
              </a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current dark:text-gray-400"
                >
                  <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                </svg>
                <span>My reviews</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className=" flex-1 ">
        <ShoppingCart></ShoppingCart>
      </div>
    </div>
  );
};

export default UserDashboard;
