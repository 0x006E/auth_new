import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useSnackbar } from "react-simple-snackbar";
import { register } from "../api";
import useStore from "../store";
import Button from "./Button";
import InputWL from "./InputWL";

function RegisterForm() {
  const [user, setUser] = useStore((state) => [state.user, state.updateUser]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  // eslint-disable-next-line no-unused-vars
  const [open, _] = useSnackbar();

  const handleRegister = (e) => {
    e.preventDefault();
    const { name, email, password } = formData;
    register(name, email, password).then((res) => {
      if (res.error) {
        console.log(res.error);
        open(res.error.errorMessage);
      } else {
        if (res.user) {
          open("Successfully registered and logged in");
          setUser(res.user);
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
        Register
      </h2>
      <form onSubmit={handleRegister} className="w-full text-sm">
        <InputWL
          label="Name"
          value={formData.name}
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
          }}
          type="text"
          placeholder="Please insert your Name"
          required
        />
        <InputWL
          label="Email"
          value={formData.email}
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
          }}
          type="email"
          placeholder="Please insert your email"
          required
        />
        <InputWL
          label="Password"
          value={formData.password}
          onChange={(e) => {
            setFormData({ ...formData, password: e.target.value });
          }}
          type="password"
          placeholder="Please insert your password"
          required
        />
        <div id="button" className="flex flex-col w-full my-5 mb-0">
          <Button type="submit">
            <div className="text-center font-bold">Register</div>
          </Button>
          <div className="flex justify-evenly mt-5">
            <Link
              to="/login"
              className="w-full text-center font-medium text-gray-500"
            >
              Have already an account? Login
            </Link>
          </div>
        </div>
      </form>
    </>
  );
}

export default RegisterForm;
