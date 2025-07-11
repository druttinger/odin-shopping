import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1>Oh no, this route doesn't exist!</h1>
      <Link to="..">
        <span className="hover:text-red-600">
          You can go back to the closest know page by clicking here, though!
        </span>
      </Link>
    </div>
  );
};

export default ErrorPage;
