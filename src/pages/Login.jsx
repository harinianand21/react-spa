export default function Login() {
  const handleLogin = () => {
    localStorage.setItem("auth", "true");
    window.location.href = "/dashboard";
  };

  return (
  <div className="page-container">
    <h1>Login</h1>
    <p>Click below to access your dashboard.</p>
    <button onClick={handleLogin}>Login</button>
  </div>
);
}
