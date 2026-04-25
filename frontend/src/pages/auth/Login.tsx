import { useState } from "react";
import { Link } from "react-router";
import Input from "../../components/Input";
import Button from "../../components/Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log({ email, password });
  }

  return (
    <form
      className="flex h-screen items-center justify-center bg-[#161410]"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <Link to="/">
          <img src="./logo.png" alt="" className="mb-4" />
        </Link>

        <Input
          placeholder="E-mail"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button title="Log in" variant={"default"} />
        <Link to="/register" className="w-full">
          <Button title="Don't have an account?" variant={"outline"} />
        </Link>
      </div>
    </form>
  );
};

export default Login;
