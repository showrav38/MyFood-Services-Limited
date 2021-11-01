import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

import './Login.css';


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [comment, setComment] = useState('');
    const { signInUsingEmailandPassword, user, error, setUser, setError, loading, setLoading } = useAuth();

    // taking location for redirecting 
    const location = useLocation();
    const redirect_url = location.state?.from || '/home';

    const history = useHistory();

    const handleGoogleLoginRedirect = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result);
                setUser(result.user);
                history.push(redirect_url);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    const handleLogin = e => {
        //to prevent reloading/refreshh after clicking or submitting
        e.preventDefault();
        console.log(email, password);
        signInUsingEmailandPassword(email, password)
            .then((userCredential) => {
                setUser(userCredential.user);
                history.push(redirect_url);
                setComment('');
            })
            .catch((error) => {
                setComment('Wrong Email/Password');
            })
            .finally(() => {
                setLoading(false);
            })
            ;

    }


    const googleIcon = <FontAwesomeIcon icon={faGoogle} />;
    const { signInWithGoogle } = useAuth();
    return (
        <div >
            <div className="login-container mt-4 bt-5 pt-4">
                <h2 className="display-5 text-primary mt-4 bt-5 pt-4">Please Login</h2>
                <div className="login-form">
                    <div>
                        <form onClick={handleLogin} className="w-50 mx-auto my-5">
                            <div className="form-group row mt-5">
                                <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-10 mb-4">
                                    <input onBlur={handleEmailChange} type="email" className="form-control" id="staticEmail" placeholder="Enter email" required />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                                <div className="col-sm-10 mb-2">
                                    <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword" placeholder="Password" required />
                                </div>
                            </div>
                            <div className="form-group row"><p className="text-danger"></p>
                            </div>

                            <div className="d-flex justify-content-center">
                                <h5>{comment}</h5>
                                <div> <input className="btn btn-dark ms-4 me-4" type="submit" value="Login" /></div>
                                <div>
                                    <button className="button" onClick={handleGoogleLoginRedirect}><span className="google-icon">{googleIcon}</span></button>
                                </div>

                            </div>
                        </form>

                    </div>
                </div >

                <h3 className="fw-light text-success mt-5">Not Registered?</h3>
                <Link to="/register">Click Here to Register</Link>
            </div>
        </div>
    );
};

export default Login;



// import { faGoogle } from '@fortawesome/free-brands-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useHistory, useLocation } from 'react-router';
// import './Login.css';
// import useAuth from '../../hooks/useAuth';


// const Login = () => {

//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const { signInUsingEmailandPassword, user, setUser, setError, error } = useAuth();

//     // taking location for redirecting 
//     const location = useLocation();
//     const redirect_url = location.state?.from || '/home';

//     const history = useHistory();

//     const handleGoogleLoginRedirect = () => {
//         signInWithGoogle()
//             .then(result => {
//                 setUser(result.user);
//                 history.push(redirect_url);
//             })
//     }

//     const handleEmailChange = e => {
//         setEmail(e.target.value);

//     }
//     const handlePasswordChange = e => {
//         setPassword(e.target.value);
//     }
//     const handleLogin = e => {
//         e.preventDefault();
//         console.log(email, password);
//         signInUsingEmailandPassword(email, password)
//             .then((userCredential) => {
//                 setUser(userCredential.user);
//                 history.push(redirect_url);
//                 setError('');
//             })
//             .catch((error) => {
//                 setError(error.message);
//             });;

//     }


//     const googleIcon = <FontAwesomeIcon icon={faGoogle} />;
//     const { signInWithGoogle } = useAuth();
//     return (
//         <div >
//             <div className="login-container">
//                 <h2 className="display-5 text-primary mt-4">Please Login</h2>
//                 <div className="login-form">
//                     <div>
//                         <form onSubmit={handleLogin} className="w-50 mx-auto my-5">
//                             <div className="form-group row mt-5">
//                                 <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
//                                 <div className="col-sm-10 mb-4">
//                                     <input onBlur={handleEmailChange} type="email" className="form-control" id="staticEmail" placeholder="Enter email" required />
//                                 </div>
//                             </div>
//                             <div className="form-group row">
//                                 <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
//                                 <div className="col-sm-10 mb-2">
//                                     <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword" placeholder="Password" required />
//                                 </div>
//                             </div>
//                             <div className="form-group row"><p className="text-danger"></p>
//                             </div>

//                             <div className="d-flex justify-content-center">

//                                 <div> <input className="btn btn-dark mt-2" type="submit" value="Login" /></div>
//                                 <div>
//                                     <button className="button" onClick={handleGoogleLoginRedirect}><span className="google-icon">{googleIcon}</span></button>
//                                 </div>

//                             </div>
//                         </form>

//                     </div>
//                 </div >

//                 <h3 className="fw-light text-success mt-5">Not Registered?</h3>
//                 <Link to="/register">Click Here to Register</Link>
//             </div>
//         </div>
//     );
// };

// export default Login;

