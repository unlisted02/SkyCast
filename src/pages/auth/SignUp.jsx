import './style.css';
import AuthInput from '../../components/inputs/AuthInput';
import AuthButton from '../../components/buttons/AuthButton';
import { Link, useNavigate } from 'react-router-dom';
import Error from '../../components/cards/error/Error';
import { useState } from 'react';
import { auth } from "../../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
    const [alertMessage, setAlertMessage] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();

        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                localStorage.setItem('uid', user.uid);
                localStorage.setItem('email', user.email);
                navigate("/home");
            })
            .catch((error) => {
                const errorCode = error.code;
                if (errorCode === 'auth/email-already-in-use') {
                    setAlertMessage("Email already exists.");
                }
                else if (errorCode === 'auth/weak-password') {
                    setAlertMessage("Password is weak.");
                }
                setTimeout(() => setAlertMessage(''), 2000)
            });
    }

    return (
        <div>
            <div className="main__container">
                <div className="auth-card">
                    <main className="auth-content">
                        <span className="auth-header">Signup</span>

                        <div className="auth-form">
                            <AuthInput type="Email" handleChange={(e) => setEmail(e.target.value)} />
                            <AuthInput type="Password" handleChange={(e) => setPassword(e.target.value)} />
                            <AuthButton value="Signup" handleClick={handleSignUp} />
                        </div>

                        <div className="auth-link-wrapper">
                            <span className="auth-notice">Already Have an account?</span>
                            <Link to="/" className="auth-link" >login</Link>
                        </div>
                    </main>

                    <aside className="auth-aside">
                        <div className="auth-aside-overlay"></div>
                        <h1 className="auth-welcome-text">Join Weather-App Today!</h1>
                        <hr className="auth-aside-hr" />
                    </aside>
                </div>
            </div>

            {alertMessage && <Error message={alertMessage} />}
        </div >
    );
}

export default SignUp