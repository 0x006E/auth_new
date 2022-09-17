import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useSnackbar } from "react-simple-snackbar";
import { sendReset } from "../api";
import useStore from "../store";
import Button from "./Button";
import InputWL from "./InputWL";

function ResetPassword() {
  const user = useStore((state) => state.user);

  const [email, setEmail] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [open, _] = useSnackbar();

  const handleSubmit = (e) => {
    e.preventDefault();
    sendReset(email).then((res) => {
      if (res.error) {
        console.log(res.error);
        open(res.error.errorMessage);
      } else {
        if (res.message) {
          open(res.message);
        } else {
          open("Something went wrong");
        }
      }
    });
  };
  return user ? (
    <Navigate to="/" />
  ) : (
    <>
      <h2 className="text-2xl font-bold text-gray-800 text-left mb-2">
        Reset Password
      </h2>
      <form onSubmit={handleSubmit} className="w-full text-sm">
        <InputWL
          label="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          placeholder="Please insert your email"
          required
        />
        <div id="button" className="flex flex-col w-full">
          <Button type="submit">
            <div className="text-center font-bold">Send Email</div>
          </Button>
          <div className="flex justify-evenly">
            <Link
              to="/login"
              className="w-full text-left font-medium text-gray-500 mt-2"
            >
              Login
            </Link>
          </div>
        </div>
      </form>
    </>
  );
}

export default ResetPassword;
