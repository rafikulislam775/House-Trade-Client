import { RiVerifiedBadgeFill } from "react-icons/ri";
import { useLoaderData } from "react-router-dom";

const ManageProperties = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table  table-pin-rows table-pin-cols">
          <thead>
            <tr>
              <th>No</th>
              <td>img</td>
              <td>Title</td>
              <td>Status</td>
              <td>location</td>
              <td>price</td>
              <td>Area_sqft</td>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
              <tr key={item.id}>
                <th>{index + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-8 rounded">
                      <img src={item.img} alt="Tailwind-CSS-Avatar-component" />
                    </div>
                  </div>
                </td>
                <td>{item.title}</td>
                <td>
                  <span className="absolute p-1 text-orange-500 ">
                    {item.status === "verified" ? (
                      <RiVerifiedBadgeFill></RiVerifiedBadgeFill>
                    ) : (
                      ""
                    )}
                  </span>
                </td>
                <td>{item.address}</td>
                <td>{item.details.price} $</td>
                <td>{item.details.area_sqft}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProperties;
