import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Register from "./Register";
import { motion } from "framer-motion";
import google from "./assets/google.png";
import Content from "./Content";
import ReactFlagsSelect from "react-flags-select";
import GridLines from "./GridLines";
import { Link } from "react-router-dom";
import Signup from "./Signup";
import { MdOutlineLock } from "react-icons/md";
import Buttons from "./Buttons";

function Signin() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [selected, setSelected] = useState("");

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!values.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (values.name.trim().length < 3) {
      newErrors.name = "Name is too sort";
    }
    if (!values.email.includes("@")) {
      newErrors.email = "Invalid email";
    }
    if (values.number.length < 10 || !values.number.trim()) {
      newErrors.number = "Enter valid number";
    }
    if (!values.password.trim()) {
      newErrors.password = "Password is empty";
    }
    if (values.password.length < 6 || values.password.length > 17) {
      newErrors.password = "Password must be 6 to 9 characters long";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const valErrors = validate();
    setErrors(valErrors);

    if (Object.keys(valErrors).length === 0) {
      alert("Form Submitted");
      setValues({ name: "", password: "", email: "", number: "" });
    } else {
      setTimeout(() => {
        setErrors({});
      }, 2500);
    }
  };
  return (
    <div className="w-full bg-white">
      <div className="absolute inset-0 hide-below-880">
        <div className="absolute top-0 left-[29%] w-px h-full border border-gray-100"></div>
        <div className="absolute top-0 left-[40%] w-px h-full border border-dashed  border-gray-100"></div>
        <div className="absolute top-0 left-[49.7%] w-px h-full border border-dashed border-gray-100"></div>
        <div className="absolute top-0 left-[60%] w-px h-full border border-dashed border-gray-100"></div>
        <div className="absolute top-0 left-[80%] w-px h-full border border-gray-100"></div>
      </div>
      <div
        className="absolute top-0 left-0 right-0 bottom-0 -z-5 animated-gradient"
        style={{
          clipPath: "polygon(0 50%, 100% 10%, 100% 0%, 0% 0%)",
        }}
      />
      <div className="w-full md:w-full flex justify-center border-b border-dashed border-gray-100 z-20">
        <h1 className="font-bold text-3xl p-5 w-1/2 ml-48 z-20 text-white">
          stripe
        </h1>
      </div>
      <div className="relative">
        <GridLines />

        <div className="flex  md:flex-col items-center justify-center">
          <motion.form
            onSubmit={handleSubmit}
            className="z-10 bg-white border flex flex-col items-center justify-center rounded-lg shadow-xl w-1/5 px-8 py-6 "
            initial={{ opacity: -10, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="self-start ml-3 font-medium text-lg md:text-3xl mb-5 pt-5">
              Sign in to your account
            </h1>
            <Register
              type="email"
              label="Email"
              inputId="email-input"
              name="email"
              value={values.email}
              onChange={handleChange}
              error={errors.email}
            />
            <Register
              type="password"
              label="Password"
              inputId="password-input"
              name="password"
              value={values.password}
              onChange={handleChange}
              error={errors.password}
              span="Forgot password?"
            />
            <div className="flex justify-start self-start pl-3 gap-1">
              <input type="checkbox" checked/>
              <span>Remember me on this device</span>
            </div>

            <div className="w-full px-3 mt-5">
              <motion.button
                className="bg-[#635bff] rounded p-1 text-md h-10 w-full text-white py-2"
                whileHover={{
                  backgroundColor: "#5c68f6",
                  borderRadius: "5%",
                  scale: 1.04,
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                type="submit"
              >
                Sign in
              </motion.button>
            </div>
            <div className="flex items-center w-full my-2">
              <div className="flex-grow h-0.5 bg-gray-100 w-1/2 ml-3"></div>
              <span className="px-3 text-gray-600 text-xs font-extralight">OR</span>
              <div className="flex-grow h-0.5 bg-gray-100 w-1/2 mr-3"></div>
            </div>
            <div className="flex flex-col gap-2 bg-white flex justify-center items-center w-full">
              <Buttons src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png" buttonText="Sign in with Google" alt="google-logo" className="w-4 h-4 mt-1" />
              <Buttons buttonText="Sign in with passkey"/>
              <Buttons buttonText="Sign in with SSO" />
            </div>

            <div className="mt-7 w-full ">
              <p className="absolute top-5 p-5 bg-[#f6f9fc] relative -mx-5 md:-mx-7 rounded-xl text-center text-sm  ">
                New to Stripe?{" "}
                <Link to="/" className="text-[#635bff] hover:text-black">
                  Create account
                </Link>
              </p>
            </div>
          </motion.form>
          <div className="flex justify-center mt-20 pl-6 w-4/5">
            <MdOutlineLock className="w-10" />
            <p className="text-sm ml-1 font-extralight w-1/4 pr-6">
              Don't click on links if an email looks suspicious. Fraudsters
              sometimes send emails with phishing links while pretending to be
              Stripe. To avoid phishing attacks, set a bookmark for this page
              and only use that link when signing in.
            </p>
          </div>
        </div>
      </div>
      <footer className="flex justify-center items-center w-2/3 h-10 bg-white mt-64">
        <p className="text-sm text-gray-500 pr-7 ">&copy; Stripe privacy & terms</p>
      </footer>
    </div>
  );
}

export default Signin;
