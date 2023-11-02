import './style.css';

const AuthButton = ({ value }) => {
    return (
        <input type="submit" name="submit" value={value} className="auth-btn bg-custom-green" />
    )
}

export default AuthButton