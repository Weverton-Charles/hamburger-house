import { useState } from "react";
import Input from "../../components/Input";
import { Link } from "react-router";
import Button from "../../components/Button";
import { useNavigate } from "react-router";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [cep, setCep] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      if (!name || !email || !password || !cep) {
        setError("All fields are required");
        return;
      }
      if (password !== confirmPassword) {
        setError("Password confirmation does not match");
        return;
      }
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, cep }),
      });

      switch (response.status) {
        case 201:
          setName("");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
          setCep("");
          setError("");
          navigate("/login");
          break;

        case 400:
          setError("All fields are required");
          break;

        case 409:
          setError("This email address is already registered");
          break;

        default:
          setError("");
      }
      const data = await response.json();
      console.log(data);
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
            placeholder="Name"
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <Input
            placeholder="Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <Input
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <Input
            placeholder="Confirm your password"
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
          <Input
            placeholder="CEP"
            type="text"
            onChange={(e) => setCep(e.target.value)}
            value={cep}
          />
        </div>
        <span className="w-full text-left text-[#C92A0E]">{error}</span>
        <Button title="Register" type="submit" />
        <Link to="/login" className="w-full">
          <Button title="Do you already have an account?" variant={"outline"} />
        </Link>
      </div>
    </form>
  );
};

export default Register;
