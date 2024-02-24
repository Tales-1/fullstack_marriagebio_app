import { SetStateAction, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import { logInWithEmailAndPassword } from "../../Authentication";

const LoginPage = ({ profileData }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [validation, setValidation] = useState({
    showValidation:false,
    message:""
  })

  return (
    <div className="w-full items-center h-screen grid place-items-center">
      <div className="flex flex-col w-[25%] gap-5 bg-cream bg-[#fbf6eb] p-6 rounded-lg">
        <h1 className="text-start text-black font-sans-serif text-xl">Sign In</h1>
        <form className="flex flex-col gap-4">
          <Input
            placeholder="E-mail Address"
            value={email}
            setValue={(e: { target: { value: SetStateAction<string> } }) =>
              setEmail(e.target.value)
            }
            type="text"
          />
          <Input
            placeholder="Password"
            value={password}
            setValue={(e: { target: { value: SetStateAction<string> } }) =>
              setPassword(e.target.value)
            }
            type="password"
          />
          {validation.showValidation && <p className="text-red-500">{validation.message}</p>}
        </form>
        <Button
          styles="text-white bg-[#213547] font-bold p-2 rounded-md border-2 border-black hover:opacity-70"
          func={async () => {
            const loginIsSuccessful = await logInWithEmailAndPassword(email, password)

            if(!loginIsSuccessful){
              setValidation((prev) => ({showValidation:true, message:"Invalid Username or Password"}))
            }
          }}
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;
