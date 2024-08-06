import { useState } from "react"
import "./login.css"
import { toast } from "react-toastify"

const Login = () => {
  const [avatar, setAvatar] = useState({
    file:null,
    url:""
  })

  const handleAvatar = e => {
    if(e.target.files[0]){
        setAvatar({
            file: e.target.files[0],
            url: URL.createObjectURL(e.target.files[0])
        })
    }
  }

  const handleLogin = e => {
    e.preventDefault()
  }

  const handleRegister = e => {
    e.preventDefault()
    const formData = new FormData()

    const {username, email, password} = Object.fromEntries(FormData);
    
  }

  return (
    <div className="login">
        <div className="itemLogin">
            <h2>Welcome back,</h2>
            <form className="formLogin" onSubmit={handleLogin}>
                <input className="inputLogin" type="text" placeholder="Email" name="email"/>
                <input className="inputLogin" type="password" placeholder="Password" name="password"/>
                <button className="buttonLogin">Sign In</button>
            </form>
        </div>
        <div className="separator"></div>
        <div className="item">
        <h2>Create an Account</h2>
            <form className="formLogin" onSubmit={handleRegister}>
                <label className="labelLogin" htmlFor="file">
                    <img className="imgLogin" src={avatar.url || "./avatar.png"} alt="" />
                    Upload an image</label>
                <input className="inputLogin" type="file" id="file" style={{display:"none"}} onChange={handleAvatar}/> 
                <input className="inputLogin" type="text" placeholder="Username" name="username"/>
                <input className="inputLogin" type="password" placeholder="Password" name="password"/>
                <button className="buttonLogin">Sign Up</button>
            </form>
        </div>
    </div>
  )
}

export default Login;