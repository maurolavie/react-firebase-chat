import "./detail.css"

const Detail = () => {
  return (
    <div className="detail">
      <div className="user">
        <img src="./avatar.png" alt="" className="rightUpAvatar" />
        <h2>Jane Doe</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" className="imgArrow"/>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & help</span>
            <img src="./arrowUp.png" alt="" className="imgArrow"/>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared photos</span>
            <img src="./arrowDown.png" alt="" className="imgArrow"/>
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img className="imgPhotosItemDetail" src="https://media.ambito.com/p/a6e46d3f69d2b96f93776f7e22408140/adjuntos/239/imagenes/040/363/0040363715/1200x675/smart/messi-camiseta-argentinajpg.jpg" alt="" />
                <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="" className="icon"/>
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img className="imgPhotosItemDetail" src="https://media.ambito.com/p/a6e46d3f69d2b96f93776f7e22408140/adjuntos/239/imagenes/040/363/0040363715/1200x675/smart/messi-camiseta-argentinajpg.jpg" alt="" />
                <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="" className="icon"/>
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img className="imgPhotosItemDetail" src="https://media.ambito.com/p/a6e46d3f69d2b96f93776f7e22408140/adjuntos/239/imagenes/040/363/0040363715/1200x675/smart/messi-camiseta-argentinajpg.jpg" alt="" />
                <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="" className="icon"/>
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img className="imgPhotosItemDetail" src="https://media.ambito.com/p/a6e46d3f69d2b96f93776f7e22408140/adjuntos/239/imagenes/040/363/0040363715/1200x675/smart/messi-camiseta-argentinajpg.jpg" alt="" />
                <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="" className="icon"/>
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="" className="imgArrow"/>
          </div>
        </div>
        <button>Block User</button>
        <button className="logout">Logout</button>
      </div>
    </div>
  )
}

export default Detail