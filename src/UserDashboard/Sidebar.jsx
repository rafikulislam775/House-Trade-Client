import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { ImHome } from "react-icons/im";
import { TiShoppingCart } from "react-icons/ti";
import SideNav from "./SideNav";

const Sidebar = () => {
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
        <SideNav></SideNav>
      </div>

      {/* <div className=" flex-1 ">
          <ShoppingCart></ShoppingCart>
        </div> */}
    </div>
  );
};

export default Sidebar;
