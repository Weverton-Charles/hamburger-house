import { useState } from "react";
import { Link } from "react-router";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { UserContexType } from "../../types/User";
import { UserContext } from "../../contexts/UserContext";


const Login = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  

  const {setUser} = useContext(UserContext);
  const navigate = useNavigate();

  // console.log(user?.name);

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      if (!email || !password) {
        setError("Email and password are required");
        return;
      }
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });
      console.log(response.status);

      if (response.status === 400) {
        setError("Email and password are required");
        return;
      }
      if (response.status === 401) {
        setError("Invalid credentials");
        return;
      }
      if (response.status === 500) {
        setError("Internal server error");
        return;
      }
      if (response.status === 200) {
        setError("");
        const data = await response.json();
        navigate("/");
        setUser(data);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
      return;
    }
  }

  return (
    <form
      className="flex h-screen items-center justify-center bg-[#161410]"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <Link to="/">
          <img src="./logo.png" alt="" className="mb-2" />
        </Link>

        <div className="mb-3 flex flex-col gap-2">
          <Input
            placeholder="E-mail"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <span className="w-full text-left text-[#C92A0E]">{error}</span>
        <Button title="Log in" variant={"default"} type="submit" />
        <Link to="/register" className="w-full">
          <Button title="Don't have an account?" variant={"outline"} />
        </Link>
      </div>
    </form>
  );
};

export default Login;
