import useTanst from "../api/useTanstack";

const ShoppingCart = () => {
  const { wishlist } = useTanst();
  console.log(wishlist);
  return (
    <div>
      <div className="flex h-screen  border-l flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100">
        <h2 className="text-xl font-semibold">Your cart</h2>
   
        {wishlist.map((item) => (
          <div key={item._id} className="overflow-x-auto">
            <table className="table">
              <tbody>
                {/* row 1 */}
                <tr>
              
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.img}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{item.title}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Zemlak, Daniel and Leannon
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      Desktop Support Technician
                    </span>
                  </td>
                  <td>Purple</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr>
              </tbody>
              {/* foot */}
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingCart;
