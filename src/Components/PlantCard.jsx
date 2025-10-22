import { Link } from "react-router";

const PlantCard = ({ plant }) => {
  const { image, plantName, price, rating ,plantId} = plant;

  return (
    <div>
      <div>
        <img src={image} alt="" />
      </div>
      <h1>{plantName}</h1>
      <p>{price}</p>
      <p>{rating}</p>
      <Link to={`/plantdetails/${plantId}`} className="btn">
        view details
      </Link>
    </div>
  );
};

export default PlantCard;
