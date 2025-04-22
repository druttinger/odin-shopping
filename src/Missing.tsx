import { Link } from "react-router-dom";

export default function Missing() {
  return (
    <>
      <h1>Something is missing</h1>
      <Link to="..">
        <span className="hover:text-red-600">
          You can go back to the closest know page by clicking here, though!
        </span>
      </Link>
    </>
  );
}
