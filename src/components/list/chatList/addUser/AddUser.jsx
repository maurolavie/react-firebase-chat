import "./addUser.css"

const AddUser = () => {
  return (
    <div className="addUser">
        <form className="formAdduser">
            <input className="inputUsername" type="text" placeholder="Username" name="username"/>
            <button className="buttonSearchAddUser">Search</button>
        </form>
        <div className="user">
            <div className="detail">
                <img className="imgAddUser" src="./avatar.png" alt="" />
                <span>Jane Doe</span>
            </div>
            <button className="buttonAddUser">Add User</button>
        </div>
    </div>
  )
}

export default AddUser