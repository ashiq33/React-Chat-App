import "./detail.css";
import { db, auth } from "../../lib/firebase";
import { useChatStore } from "../../lib/chatStore";
import { useUserStore } from "../../lib/userStore";
import { doc, arrayRemove, arrayUnion, updateDoc } from "firebase/firestore";

const Detail = () => {
    const { chatId, user, isCurrentUserBlocked, isReceiverBlocked, changeBlock } = useChatStore();

    const { currentUser } = useUserStore();  

    const handleBlock = async () => {
      if(!user) return;

      const userDocRef = doc(db, "users", currentUser.id);


      try{
        await updateDoc(userDocRef,{
          blocked: isReceiverBlocked ? arrayRemove(user.id) : arrayUnion(user.id),
        });
        changeBlock();
      }catch(err){
        console.log(err);
      }

    };


    return (
      <div className="detail">
        <div className="user">
          <img src={user?.avatar || "./avatar.png"} alt="" />
          <h2>{user?.username}</h2>
          <p>Lorem ispum dolor sit amet.</p>
        </div>
        <div className="info">
          <div className="option">
            <div className="title">
              <span>Chat Settings</span>
              <img src="./arrowUp.png" alt="" />
            </div>
          </div>
          <div className="option">
            <div className="title">
              <span>Privacy & Help</span>
              <img src="./arrowUp.png" alt="" />
            </div>
          </div>
          <div className="option">
            <div className="title">
              <span>Shared Photos</span>
              <img src="./arrowDown.png" alt="" />
            </div>
            <div className="photos">
              <div className="photoItem">
                <div className="photoDetail">
                  <img src="https://dummyimage.com/600x400/000/fff" alt="" />
                  <span>photo_2024_2.png</span>
                </div>
                <img src="./download.png" alt="" className="icon"/>
              </div>
              <div className="photoItem">
                <div className="photoDetail">
                  <img src="https://dummyimage.com/600x400/000/fff" alt="" />
                  <span>photo_2024_2.png</span>
                </div>
                <img src="./download.png" alt="" className="icon"/>
              </div>
              <div className="photoItem">
                <div className="photoDetail">
                  <img src="https://dummyimage.com/600x400/000/fff" alt="" />
                  <span>photo_2024_2.png</span>
                </div>
                <img src="./download.png" alt="" className="icon"/>
              </div>
            </div>
          </div>
          <div className="option">
            <div className="title">
              <span>Shared Files</span>
              <img src="./arrowDown.png" alt="" />
            </div>
          </div>
          <button onClick={ handleBlock }>
            {isCurrentUserBlocked ? "You are Blocked" : isReceiverBlocked ? "user blocked" : "Block User"}
          </button>
          <button className="logout" onClick={() => auth.signOut()}>Logout</button>
        </div>
      </div>
    );
};

export default Detail;