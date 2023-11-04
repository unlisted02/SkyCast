import './style.css';
import AuthInput from '../../components/inputs/AuthInput';
import AuthButton from '../../components/buttons/AuthButton';
import { Link, useNavigate } from 'react-router-dom';
import Error from '../../components/cards/error/Error';
import { useEffect, useLayoutEffect, useState } from 'react';
import { auth } from "../../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    const [alertMessage, setAlertMessage] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                localStorage.setItem('uid', user.uid);
                localStorage.setItem('email', user.email);
                navigate("/home");
            })
            .catch((error) => {
                const errorCode = error.code;
                console.log(error.code);
                if (errorCode === 'auth/wrong-password' || errorCode === 'auth/user-not-found') {
                    setAlertMessage("Incorret email or password.");
                }
                setTimeout(() => setAlertMessage(''), 2000)
            });
    }

    useEffect(() => {
        const uid = localStorage.getItem("uid") ? localStorage.getItem("uid") : '';

        if (uid !== '') {
            navigate('/home')
        }
    }, [])

    return (
        <div>
            <div className="main__container">
                <div className="auth-card">
                    <main className="auth-content">
                        <span className="auth-header">Login</span>

                        <div className="auth-form">
                            <AuthInput type="Email" handleChange={(e) => setEmail(e.target.value)} />
                            <AuthInput type="Password" handleChange={(e) => setPassword(e.target.value)} />
                            <AuthButton value="Login" handleClick={handleLogin} />
                        </div>

                        <div className="auth-link-wrapper">
                            <span className="auth-notice">Don't have an account?</span>
                            <Link to="/signup" className="auth-link" >Sign up</Link>
                        </div>
                    </main>

                    <aside className="auth-aside">
                        <div className="auth-aside-overlay"></div>
                        <h1 className="auth-welcome-text">Welcome Back!</h1>
                        <hr className="auth-aside-hr" />
                    </aside>
                </div>
            </div>

            {alertMessage && <Error message={alertMessage} />}
        </div>
    );
}

export default Login