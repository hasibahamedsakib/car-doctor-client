import { updateProfile } from "firebase/auth";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useContext } from "react";
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import loginImg from "../../assets/login/login.svg";
const Register = () => {
  const { userSignUp, userLogOut } = useContext(AuthContext);

  const handleRegister = (event) => {
    console.log("clicked");
    event.preventDefault();
    const name = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    userSignUp(email, password)
      .then((result) => {
        const currentUser = result.user;
        updateProfile(currentUser, {
          displayName: name ? name : "User",
        });
        console.log(currentUser);
        alert("SignUp Successful");
        userLogOut();
      })
      .catch((err) => err.message);
  };
  return (
    <div className="w-full flex justify-between container">
      <div className="w-1/2 p-8">
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-[90%] md:rounded-none md:rounded-l-lg"
          src={loginImg}
          alt=""
        />
      </div>

      <div className="w-1/2 p-5 ">
        <div className="w-full border-2 rounded-md p-8 border-orange-500">
          <form className="flex flex-col gap-4 " onSubmit={handleRegister}>
            <h2 className="text-4xl font-bold text-center ">Sign Up</h2>
            <div>
              <div className="mb-2 block">
                <Label color="light" htmlFor="name" value="Your Name" />
              </div>
              <TextInput
                color="light"
                id="name"
                name="username"
                type="text"
                placeholder="Enter Your Name"
                required={true}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label color="light" htmlFor="email1" value="Your email" />
              </div>
              <TextInput
                color="light"
                id="email1"
                name="email"
                type="email"
                placeholder="email@example.com"
                required={true}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label
                  color="light"
                  htmlFor="password1"
                  value="Your confirm password"
                />
              </div>
              <TextInput
                color="light"
                id="password1"
                name="password"
                type="password"
                required={true}
                placeholder="Enter  Confirm Password"
              />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                className="text-orange-500 focus:outline-orange-500 hover:border-none"
                id="remember"
              />

              <Label htmlFor="remember">Remember me</Label>
            </div>
            <Button size="lg" gradientDuoTone="pinkToOrange" type="submit">
              Sign Up
            </Button>
          </form>
          <hr />
          <p className="font-bold text-center py-4 ">Or Sign In with</p>
          <div className="text-center flex justify-center space-x-5">
            <FaFacebookF className=" h-12 w-12 border rounded-full p-3 text-orange-600 cursor-pointer hover:bg-slate-100" />
            <FaLinkedinIn className="h-12 w-12 border rounded-full p-3 text-orange-600 cursor-pointer hover:bg-slate-100" />
            <FaGoogle className="    h-12 w-12 border rounded-full p-3 text-orange-600 cursor-pointer hover:bg-slate-100" />
          </div>
          <p className="text-center py-5  font-semibold">
            Already Have an account?{" "}
            <Link to="/user/login" className="text-orange-500">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
