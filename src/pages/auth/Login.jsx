import './style.css';
import AuthInput from '../../components/inputs/AuthInput';
import AuthButton from '../../components/buttons/AuthButton';
import { Link } from 'react-router-dom';
import Error from '../../components/cards/error/Error';

const Login = () => {
    return (
        <div>
            <div className="main__container">
                <div className="auth-card">
                    <main className="auth-content">
                        <span className="auth-header">Login</span>

                        <form className="auth-form">
                            <AuthInput type="Email" />
                            <AuthInput type="Password" />
                            <AuthButton value="Login" />
                        </form>

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

            <Error message="" />
        </div>
    );
}

export default Login