import useAuth from "../hooks/useAuth";

const AdminDashboard = () => {
  const { user } = useAuth();

  return <div>{user?.displayName}</div>;
};

export default AdminDashboard;
