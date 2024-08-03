import { useEffect, useRef, useState } from "react"
import "./chat.css"
import EmojiPicker from "emoji-picker-react"

const Chat = () => {
  
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({behavior:"smooth"});
  }, []);

  const handleEmoji = e => {
    setText(prev => prev + e.emoji);
    setOpen(false);
  }

  return (
    <div className="chat">
        <div className="top">
            <div className="user">
                <img src="./avatar.png" alt="" className="avatarImg"/>
                <div className="texts">
                    <span>Jane Doe</span>
                    <p>Lorem ipsum dolor sit, amet.</p>
                </div>
            </div>
            <div className="icons">
                <img src="./phone.png" alt="" className="iconsImg" />
                <img src="./video.png" alt="" className="iconsImg"/>
                <img src="./info.png" alt="" className="iconsImg"/>
            </div>
        </div>
        <div className="center">
            <div className="message">
                <img src="./avatar.png" alt="" className="centerAvatar" />
                <div className="centerTexts">
                    <p className="pOther">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                       Aperiam eum amet ex, reiciendis dolor magni eos, dolores placeat repudiandae
                       nisi molestiae, vel vero minima sit voluptatum praesentium repellat ducimus. 
                       Cumque.
                    </p>
                    <span>1 min ago</span>
                </div>
            </div>
            <div className="message own">
                <div className="centerTexts">
                    <p className="pOwn">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                       Aperiam eum amet ex, reiciendis dolor magni eos, dolores placeat repudiandae
                       nisi molestiae, vel vero minima sit voluptatum praesentium repellat ducimus. 
                       Cumque.
                    </p>
                    <span>1 min ago</span>
                </div>
            </div>
            <div className="message">
                <img src="./avatar.png" alt="" className="centerAvatar"/>
                <div className="centerTexts">
                    <p className="pOther">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                       Aperiam eum amet ex, reiciendis dolor magni eos, dolores placeat repudiandae
                       nisi molestiae, vel vero minima sit voluptatum praesentium repellat ducimus. 
                       Cumque.
                    </p>
                    <span>1 min ago</span>
                </div>
            </div>
            <div className="message own">
                <div className="centerTexts">
                    <p className="pOwn">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                       Aperiam eum amet ex, reiciendis dolor magni eos, dolores placeat repudiandae
                       nisi molestiae, vel vero minima sit voluptatum praesentium repellat ducimus. 
                       Cumque.
                    </p>
                    <span>1 min ago</span>
                </div>
            </div>
            <div className="message">
                <img src="./avatar.png" alt="" className="centerAvatar"/>
                <div className="centerTexts">
                    <p className="pOther">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                       Aperiam eum amet ex, reiciendis dolor magni eos, dolores placeat repudiandae
                       nisi molestiae, vel vero minima sit voluptatum praesentium repellat ducimus. 
                       Cumque.
                    </p>
                    <span>1 min ago</span>
                </div>
            </div>
            <div className="message own">
                <div className="centerTexts">
                    <img className="textsCenterImg" src="https://d22fxaf9t8d39k.cloudfront.net/9b2030df4b71178c2216c7093d1d80c554570cd68bf62f38ee64829246f411551866.jpg" alt="" />
                    <p className="pOwn">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                       Aperiam eum amet ex, reiciendis dolor magni eos, dolores placeat repudiandae
                       nisi molestiae, vel vero minima sit voluptatum praesentium repellat ducimus. 
                       Cumque.
                    </p>
                    <span>1 min ago</span>
                </div>
            </div>
            <div ref={endRef}></div>
        </div>
        <div className="bottom">
            <div className="icons">
                <img src="./img.png" alt="" className="iconsImg2"/>
                <img src="./camera.png" alt="" className="iconsImg2"/>
                <img src="./mic.png" alt="" className="iconsImg2"/>
            </div>
            <input 
                className="inputText" 
                type="text" placeholder="Type a message..." 
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <div className="emoji">
                <img src="./emoji.png" alt="" onClick={() => setOpen(prev => !prev)}/>
                <div className="picker">
                    <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
                </div>
            </div>
            <button className="sendButton">Send</button>
        </div>
    </div>
  )
}

export default Chat