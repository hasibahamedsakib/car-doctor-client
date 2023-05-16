import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useContext } from "react";
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import loginImg from "../../assets/login/login.svg";
const Login = () => {
  const { userLogin } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";
  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        const userEmail = { email: user.email };

        fetch(`http://localhost:3001/jwt`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userEmail),
        })
          .then((res) => res.json())
          .then((token) => {
            // console.log(token);

            localStorage.setItem("user-jwt-token", token.token);
            alert("Login Success");
            navigate(from, { replace: true });
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
    console.log(email, password);
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
          <form className="flex flex-col gap-4 " onSubmit={handleLogin}>
            <h2 className="text-4xl font-bold text-center ">Login</h2>
            <div>
              <div className="mb-2 block">
                <Label color="light" htmlFor="email1" value="Your email" />
              </div>
              <TextInput
                color="light"
                id="email1"
                type="email"
                name="email"
                placeholder="email@example.com"
                required={true}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label
                  color="light"
                  htmlFor="password1"
                  value="Your password"
                />
              </div>
              <TextInput
                color="light"
                id="password1"
                name="password"
                type="password"
                required={true}
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
              Submit
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
            Do not Have any account?{" "}
            <Link to="/user/register" className="text-orange-500">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
