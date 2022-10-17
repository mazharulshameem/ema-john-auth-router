import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
import "./SignUp.css";

const SignUp = () => {
  const [error, setError] = useState(null);
  const { createUser } = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(email, password, confirm);
    if (password.length < 6) {
      setError("Paswords must be at least 6 characters");
      return;
    }
    if (password !== confirm) {
      setError(" Your password did not match");
      return;
    }
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
      })
      .catch((error) => {
        console.error("error:", error);
      });
  };
  return (
    <div>
      <div className="form-container">
        <h2 className="form-title">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" required />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" required />
          </div>
          <div className="form-control">
            <label htmlFor="confirm">Confirm Password</label>
            <input type="password" name="confirm" required />
          </div>
          <p className="text-error">{error}</p>
          <input className="btn-submit" type="submit" value="Sign Up" />
        </form>
        <p>
          Already Have an Account <Link to="/signin">SignIn</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
