import React, {
  useContext,
  // ,
  //  useEffect,
  //   useState
} from "react";
import { BsX } from "react-icons/bs";
import "./PopUpMessageComponent.css";
import { PopUpMessageContext } from "../../context/PopUpMessageContext";

function PopUpMessageComponent() {
  const { popUpMessage, setPopUpMessage } = useContext(PopUpMessageContext);

  return (
    <div
      className={`PopUpMessageComponent ${popUpMessage.messageType}`}
      style={popUpMessage.messageType !== "" ? null : { display: "none" }}
    >
      <div className="w-100">{popUpMessage.message}</div>
      <div className="close">
        <BsX
          onClick={() => setPopUpMessage({ messageType: "", message: "" })}
        />
      </div>
    </div>
  );
}

export default PopUpMessageComponent;
