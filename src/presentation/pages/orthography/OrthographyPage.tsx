import { useState } from "react";
import {
  GptMessage,
  MyMessage,
  TextMessageBox,
  TypingLoader,
} from "../../components";

interface Message {
  text: string;
  isGpt: boolean;
}

export const OrthographyPage = () => {
  const [loading, setloading] = useState(false);
  const [message, setMessage] = useState<Message[]>([]);

  const handleSendMessage = (text: string) => {

    setloading(true)
    const newMessage: Message = {
      text: text,
      isGpt: false,
    };

    setMessage((prevMessage) => [...prevMessage, newMessage]);

    //TODO: UseCase


    setloading(false)

    //todo:Añadir el mensaje de isGPT en true



  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        <div className=" grid grid-cols-12 gap-y-2  ">
          {message.map((msg, index) =>
            msg.isGpt ? (
              <GptMessage key={index} text="soy de gpt"></GptMessage>
            ) : (
              <MyMessage key={index} text={msg.text}></MyMessage>
            )
          )}
          <GptMessage text="gpt"></GptMessage>

          {loading && (
            <div className="col-start-1 col-end-12 fade">
              <TypingLoader className="fade-in"></TypingLoader>
            </div>
          )}
        </div>
      </div>

      <TextMessageBox
        onSednMessage={handleSendMessage}
        placeholder="write here"
        disableCorrections
      ></TextMessageBox>
    </div>
  );
};
