import { FormEvent, useState } from "react";

function Form() {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const SubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email === "" || regex.test(email) === false) {
      setError("Email is Invalid!");
    } else {
      setError("");
      alert(email);
      setEmail("");
    }
  };

  return (
    <form action="" onSubmit={(e) => SubmitForm(e)}>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-[65%] mb-0 md:-mb-[29px]">
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`${
              error !== "" ? "border-[3px] border-red" : "border-gray-500"
            } outline-none bg-white select-all w-full placeholder:text-gray-400 rounded-lg py-3 px-4`}
            placeholder="Your email address..."
          />
          <p className={`${error !== '' ? "bg-red" : ""} text-left h-7 pt-1 rounded-bl-lg rounded-br-lg text-sm pl-5 text-white`}>
            {error}
          </p>
        </div>
        <button
          type="submit"
          className="w-full md:w-[30%] py-3 mt-5 md:mt-0 rounded-lg bg-red text-white outline-none border-2 border-red hover:bg-white hover:text-red"
        >
          Contact us
        </button>
      </div>
    </form>
  );
}

export default Form;
