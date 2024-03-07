import React from "react";
import WorkplaceSVG from "../Images/LoginPage/Workplace.svg";
import Google from "../Images/LoginPage/Google.svg";
const Login = () => {
  const centered = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };
  return (
    <section>
      <div className="w-screen h-screen grid grid-rows-2 text-black  md:grid-cols-2">
        <div className=" w-full h-full bg-white  md:h-screen" style={centered}>
          <img className="m-20" src={WorkplaceSVG} alt="" srcset="" />
          <div className="px-6 sm:px-0 max-w-sm">
            <button
              type="button"
              className="text-black w-full sm:w-[200px] md:w-[400px]  border border-black font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2 hover:transform hover:scale-110 hover:shadow-md"
            >
              <img
                className=" mr-1 -ml-1 w-9 h-7"
                src={Google}
                alt="Google Icon"
              />
              <span className="text-xl"> Sign in with Google</span>
            </button>
          </div>
        </div>

        {/* page 2 */}
        <div className="w-full h-full bg-[#F3F5F9] md:h-screen" style={centered}>
          <p>Page 2</p>
        </div>
      </div>
    </section>
  );
};

export default Login;
