import { useQuery } from "@tanstack/react-query";
import axiosPublic from "../api/axiosInstance";
import { RiAdminFill, RiDeleteBin2Fill } from "react-icons/ri";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axios = axiosPublic;
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axios.get("/users");
      return res.data;
    },
  });

  const handleDelate = (user) => {
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
        axios.delete(`/users/${user._id}`).then((res) => {
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
  //handle make admin
  const handleMakeAdmin = (user) => {
    axios.patch(`/users/admin/${user._id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top",
          icon: "success",
          title: `${user.name} is an administrator`,
          showCancelButton: false,
          timer: 1500,
        });
      }
    });
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full ">
          {/* head */}
          <thead className="dark:text-white">
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {users?.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    "admin"
                  ) : (
                    <button onClick={() => handleMakeAdmin(user)}>
                      <RiAdminFill></RiAdminFill>
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelate(user)}
                    className="btn btn-sm text-white bg-red-600"
                  >
                    <RiDeleteBin2Fill></RiDeleteBin2Fill>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
