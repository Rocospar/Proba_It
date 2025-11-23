import './App.css';
function Login(){
  return(
  <div className="background">
  

    <div className="LoginSquare">
    <h1>Login</h1>
    
    <form>
      <label>Username</label>
      <input type="text" />

      <label>Password</label>
      <input type="password" />

      <button>Login</button>
      </form>
    </div>
  </div>
  )

}
export default Login;