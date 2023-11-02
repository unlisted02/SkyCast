import './style.css';

const AuthInput = ({ type }) => {
    return (
        <input type={type.toLocaleLowerCase()} autoFocus placeholder={type} name={type.toLocaleLowerCase()} className="auth-input" required />
    )
}

export default AuthInput