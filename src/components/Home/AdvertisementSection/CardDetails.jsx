import { useLoaderData } from "react-router-dom";

const CardDetails = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <h2>this card</h2>
    </div>
  );
};

export default CardDetails;
