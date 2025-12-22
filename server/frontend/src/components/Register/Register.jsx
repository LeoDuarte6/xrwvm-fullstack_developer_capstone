import React, { useState } from "react";
import "./Register.css";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");

  const register = async (e) => {
    e.preventDefault();
    let register_url = window.location.origin + "/djangoapp/register";
    
    try {
        const res = await fetch(register_url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                "userName": userName, "password": password,
                "firstName": firstName, "lastName": lastName, "email": email
            }),
        });
        const json = await res.json();
        if (json.status) {
            sessionStorage.setItem('username', json.userName);
            window.location.href = window.location.origin;
        } else if (json.error) {
            alert(json.error);
        }
    } catch (err) {
        console.error("Register Error:", err);
        alert("Something went wrong with registration.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="card shadow-lg">
            <div className="card-header bg-dark text-white text-center">
              <h3>Sign Up</h3>
            </div>
            <div className="card-body">
              <form onSubmit={register}>
                <div className="form-group mb-3">
                    <label>Username</label>
                    <input type="text" className="form-control" onChange={(e) => setUserName(e.target.value)} required/>
                </div>
                <div className="form-group mb-3">
                    <label>First Name</label>
                    <input type="text" className="form-control" onChange={(e) => setFirstName(e.target.value)} required/>
                </div>
                <div className="form-group mb-3">
                    <label>Last Name</label>
                    <input type="text" className="form-control" onChange={(e) => setlastName(e.target.value)} required/>
                </div>
                <div className="form-group mb-3">
                    <label>Email</label>
                    <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} required/>
                </div>
                <div className="form-group mb-3">
                    <label>Password</label>
                    <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} required/>
                </div>
                <div className="d-grid gap-2">
                    <button className="btn btn-primary" type="submit">Register</button>
                    <a href="/" className="btn btn-outline-secondary">Cancel</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
