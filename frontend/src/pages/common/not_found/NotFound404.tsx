import { Link } from "react-router";
import BurgerSvg from "./components/BurgerSvg";
import Button from "../../../components/Button";


const NotFound404 = () => {
  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-[#161410] px-6 py-12">
      <div className="flex w-full max-w-md flex-col items-center gap-8 text-center">
        <BurgerSvg />
        <div className="flex flex-col gap-3">
          <h1 className="text-8xl font-extrabold tracking-tight text-[#F2DAAC]">
            404
          </h1>
          <p className="text-base font-medium text-[#F2DAAC]/80">
            Nenhum sanduíche aqui.
          </p>
          <p className="text-sm text-[#F2DAAC]/50">
            Esta página não existe!
          </p>
        </div>
        <Link to="/">
          <Button title="Voltar" variant="login" />
        </Link>
      </div>
    </main>
  );
};

export default NotFound404;
