import { Link } from "react-router";
import Button from "./Button";

const Header = () => {
  return (
    <div className="bg-[#161410]">
      <div className="mx-auto flex w-full items-center justify-between p-3 md:w-184.25 md:p-0">
        <a href="">
          <img src="./logo.png" alt="" />
        </a>
        <Link to="/login">
          <Button title="Log in" variant={"login"} />
        </Link>
      </div>
    </div>
  );
};

export default Header;
