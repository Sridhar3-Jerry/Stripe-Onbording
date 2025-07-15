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
import Signin from "./Signin";
import Buttons from "./Buttons";

function Signup() {
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
        <div className="absolute top-0 left-[71%] w-px h-full border border-dashed border-gray-100"></div>
        <div className="absolute top-0 left-[90%] w-px h-full border border-gray-100"></div>
      </div>
      <div className="w-full md:w-full flex justify-center border-b border-dashed border-gray-100 ">
        <h1 className="font-bold text-3xl p-5 w-1/2 ml-48">stripe</h1>
      </div>
      <div className="relative">
        <GridLines />
        <motion.div
            initial={{ backgroundPosition:"0% 50%"}}
            animate={{ backgroundPosition:["0% 50%","100% 50%","0% 50%"] }}
            transition={{ duration: 10,repeat:Infinity,ease:"linear" }}
            style={{
              clipPath: "polygon(0 90%, 100% 0, 100% 100%, 0 100%)",
             
              background: "linear-gradient(90deg,red,green,violet,blue)",
              backgroundSize:"200% 200%",
              opacity:0.9,
            }}
            className="absolute top-10 left-0 right-0 bottom-0 z-0 bg-gradient-to-br from-blue-200 to-purple-300"
          />
        <div className="flex flex-col md:flex-row justify-center min-h-screen">
          <div className="z-10 hidden md:flex flex-col gap-3 w-full md:w-1/5 pr-4 md:pr-24 mt-10 mr-5">
            <Content />

            <p className="h-full flex flex-col justify-end mb-32 text-sm text-white z-10 font-lighter ">
              &copy; Stripe privacy & terms
            </p>
          </div>
          <motion.form
            onSubmit={handleSubmit}
            className="z-10 bg-white border flex flex-col items-center justify-center rounded-lg shadow-xl w-full md:w-[540px] h-auto md:h-[668px] p-6 md:p-10 "
            initial={{ opacity: -10, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="self-start ml-3 font-medium text-2xl md:text-3xl mb-5 pt-10">
              Create your Stripe account
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
              type="text"
              label="Full name"
              inputId="name-input"
              name="name"
              value={values.name}
              onChange={handleChange}
              error={errors.name}
            />
            <Register
              type="password"
              label="Password"
              inputId="password-input"
              name="password"
              value={values.password}
              onChange={handleChange}
              error={errors.password}
            />
            <div className="flex flex-col items-center w-full px-3 mt-2 border-none">
              <label
                htmlFor="country"
                className="self-start mb-1 flex items-center gap-2"
              >
                Country
                <span className="relative group">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-gray-400 cursor-pointer"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <circle
                      cx="10"
                      cy="10"
                      r="9"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                    <text
                      x="10"
                      y="15"
                      textAnchor="middle"
                      fontSize="12"
                      fill="currentColor"
                      fontFamily="Arial"
                      fontWeight="bold"
                    >
                      i
                    </text>
                  </svg>
                  <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2 z-20 flex items-start">
                    <span className="opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-pre-line bg-white text-gray-700 text-sm rounded-lg shadow-lg px-4 py-3 w-80 text-left border border-gray-200">
                      Select the country or region where your business is
                      incorporated. If you're an individual, select where you're
                      doing business from.
                    </span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-3 h-3 bg-white border-t border-l border-gray-200 -translate-x-1/2 -ml-1 mt-6 rotate-[-135deg] shadow-lg"></span>
                  </span>
                </span>
              </label>
              <div className="flex flex-row items-center w-full">
                <ReactFlagsSelect
                  selected={selected}
                  onSelect={(code) => setSelected(code)}
                  countries={["US", "GB", "IN"]}
                  customLabels={{
                    US: "United States",
                    GB: "United Kingdom",
                    IN: "India",
                  }}
                  placeholder="Select Country"
                  className="w-full "
                />
              </div>
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
                Create account
              </motion.button>
            </div>
            <div className="flex items-center w-full my-2">
              <div className="flex-grow h-0.5 bg-gray-200"></div>
              <span className="px-3 text-gray-600 text-sm">OR</span>
              <div className="flex-grow h-0.5 bg-gray-200"></div>
            </div>
             <Buttons>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png"
                  alt="google-logo"
                  className="w-4 h-4 mt-1"
                />
                Sign in with Google
              </Buttons>
            <div className="mt-5 w-full">
              <p className="p-5 bg-[#f6f9fc] relative -mx-6 md:-mx-10 rounded-xl text-center text-sm ">
                Already have an account?{" "}
                <Link to="/Signin" className="text-[#635bff] hover:text-black">
                  Sign in
                </Link>
              </p>
            </div>
          </motion.form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
