import { io } from "socket.io-client";
import { setChats } from "./features/chartView/chatSlice";
import { useDispatch } from "react-redux";

const socket = io("http://localhost:5000");


function useSocket() {

  const dispatch = useDispatch();

  socket.on('chats', chats => {
        dispatch(setChats(chats.data));
    });

    socket.on('joined', message => {
        alert(message);
    });

    socket.on('join-error', message => {
        alert(message);
    });
}

export default socket;
export {useSocket};