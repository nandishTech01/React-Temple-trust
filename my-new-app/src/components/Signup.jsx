import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { addUser } from "../store/slices/UserSlice";

const Signup = () => {

    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addUser(formData));
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        });
    };


    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         // Dispatch signupUser action with form data
    //         await dispatch(signupUser(formData));
    //         // Redirect to your Java Spring Boot API
    //         history.push("http://localhost:8082/customer"); // Redirect using useHistory
    //         // Alternatively, you can use window.location.href for manual redirection
    //         // window.location.href = "http://localhost:8082/customer";
    //     } catch (error) {
    //         // Handle any errors here, such as displaying error messages to the user
    //         console.error("Error occurred during form submission:", error);
    //     }
    // };
    

    return (
        <div className="add-PBI">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h5 className="display-4 text-center">Sign Up</h5>
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-6 mb-4">
                                    <div className="m-outline">
                                        <input type="text" id="firstName" value={formData.firstName} onChange={handleChange} className="form-control form-control-lg" placeholder="First Name" />
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="form-outline">
                                        <input type="text" id="lastName" value={formData.lastName} onChange={handleChange} className="form-control form-control-lg" placeholder="Last Name" />
                                    </div>
                                </div>
                            </div>

                            <div className="form-outline mb-4">
                                <input type="email" id="email" value={formData.email} onChange={handleChange} className="form-control form-control-lg" placeholder="Email address" />
                            </div>

                            <div className="form-outline mb-4">
                                <input type="password" id="password" value={formData.password} onChange={handleChange} className="form-control form-control-lg" placeholder="Password" />
                            </div>

                            <button type="submit" className="btn btn-primary btn-block mb-4">
                                Sign up
                            </button>

                            <div className="text-center">
                                <p>or sign up with:</p>
                                <button type="button" className="btn btn-link btn-floating mx-1" >
                                    <i className="fab fa-facebook-f" ></i>
                                </button>

                                <button type="button" className="btn btn-link btn-floating mx-1">
                                    <i className="fab fa-google"></i>
                                </button>

                                <button type="button" className="btn btn-link btn-floating mx-1">
                                    <i className="fab fa-twitter"></i>
                                </button>

                                <button type="button" className="btn btn-link btn-floating mx-1">
                                    <i className="fab fa-github"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Signup;