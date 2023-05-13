import {useState} from "react";
import socket from "../../Socket";
import { useSelector } from "react-redux";
import { getUser } from "../../features/chartView/chatSlice";

function SendMessage() {
    const [message, setMessage] = useState("");
    let user = useSelector(getUser);

    function handleChange(e) {
		setMessage(e.target.value)
	}

    function sendMessage() {
        if(message) {
            const chat = {
                sender: user,
                text: message,
              };
            socket.emit('chat', chat);
            setMessage("");
        }
    }

    if (user) {
        return (
            <div className="bg-color position-absolute bottom-0 start-0 rounded-bottom w-100 py-3">
                <div className="input-group  container d-flex justify-content-between">     
                    <input type="text" 
                        className="form-control col-10 rounded-pill me-2"
                        aria-label="message" name="message"
                        onChange={handleChange}
                        value={message}
                        ></input>
                    
                    <button type="button"
                        className="col-2 btn btn-sm btn-outline-light rounded-pill"
                        onClick={() => sendMessage()}
                    >
                        send
                    </button>
                </div>
            </div>
        );
    } else {
        return <></>
    }
}

export default SendMessage;
