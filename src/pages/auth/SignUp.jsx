import './style.css';
import AuthInput from '../../components/inputs/AuthInput';
import AuthButton from '../../components/buttons/AuthButton';
import { Link } from 'react-router-dom';
import Error from '../../components/cards/error/Error';

const SignUp = () => {
    return (
        <div>
            <div className="main__container">
                <div className="auth-card">
                    <main className="auth-content">
                        <span className="auth-header">Signup</span>

                        <form className="auth-form">
                            <AuthInput type="Email" />
                            <AuthInput type="Password" />
                            <AuthButton value="Signup" />
                        </form>

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

            <Error message="" />
        </div >
    );
}

export default SignUp