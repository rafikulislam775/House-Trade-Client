import { ImSpinner9 } from "react-icons/im";
import useTanst from "../api/useTanstack";
import { RiDeleteBin2Fill } from "react-icons/ri";
import axiosPublic from "../api/axiosInstance";
import Swal from "sweetalert2";
const ShoppingCart = () => {
  const { wishlist, isLoading, refetch } = useTanst();
  const axios = axiosPublic;
  const handleDelate = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`/wishlist/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <div className="flex h-screen  border-l flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100">
        <h2 className="text-xl font-semibold">Your cart</h2>

        {isLoading ? (
          <ImSpinner9 className="animate-spin m-auto text-9xl" />
        ) : (
          wishlist?.map((item) => (
            <div key={item._id} className="overflow-x-auto">
              <table className="table">
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle mr-4 w-20">
                            <img
                              src={item.img}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold w-12">{item.title}</div>
                        </div>
                      </div>
                    </td>
                    <td className="">
                      <span className="badge ">$ {item.price}</span>
                    </td>
                    <td>{item.address}</td>
                    <th>
                      <button
                        onClick={() => handleDelate(item._id)}
                        className="btn btn-sm text-white bg-red-600"
                      >
                        <RiDeleteBin2Fill></RiDeleteBin2Fill>
                      </button>
                    </th>
                  </tr>
                </tbody>
                {/* foot */}
              </table>
            </div>
          ))
        )}
        <div className="text-right">
          {" "}
          Total: {wishlist.reduce((total, item) => total + item.price, 0)} $
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
