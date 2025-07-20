import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BACK_GROUND_IMAGE } from "../utils/constants";
import { changeMessage } from "../utils/chatSlice";

function Chat() {
  const dispatch = useDispatch();
  const message = useSelector((store) => store.chat.message);
  const toggle = useSelector((store) => store.chat.toggle);

  const wsRef = useRef(); // WebSocket connection reference
  const inputRef = useRef(); // Input field reference

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    ws.onmessage = (event) => {
      dispatch(changeMessage(event.data));
    };

    wsRef.current = ws;
    ws.onopen = () => {
      ws.send(
        JSON.stringify({
          type: "join",
          payload: {
            roomId: "red", // Join room with ID "red"
          },
        })
      );
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <div className="h-screen">
      <div>
        <img
          className=" bg-cover bg-no-repeat fixed -z-10"
          src={BACK_GROUND_IMAGE}
          alt="bg"
        />
      </div>
      <br />
      <div className="">
        <div className="h-[85vh]">
          {message.map((message, i) => (
            <div key={i} className="m-3">
              <span
                className={
                  i % 2 === 0
                    ? "bg-gray-500 text-white  p-2"
                    : "bg-black text-white p-2"
                }
              >
                {message}
              </span>
            </div>
          ))}
        </div>

        <div className="fixed w-full bg-white flex">
          <input ref={inputRef} className=" flex-1 p-4 "></input>
          <button
            onClick={() => {
              const message = inputRef.current?.value;
              wsRef.current.send(
                JSON.stringify({
                  type: "chat",
                  payload: {
                    message: message,
                  },
                })
              );
            }}
            className="bg-purple-600 text-white p-4"
          >
            Send message
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
