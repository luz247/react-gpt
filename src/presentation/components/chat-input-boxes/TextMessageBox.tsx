import { useState, type FormEvent } from "react";

interface Props {
  onSednMessage: (message: string) => void;
  placeholder?: string;
  disableCorrections?: boolean;
}

export const TextMessageBox = ({
  onSednMessage,
  placeholder,
  disableCorrections = false,
}: Props) => {
  const [message, setmessage] = useState("");
  const handleSendMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if(message.trim().length === 0) return

    onSednMessage(message);
    setmessage("");
  };
  return (
    <form
      onSubmit={handleSendMessage}
      className="flex flex-row items-center h-16 rounded-xl bg-white w-fll px-4"
    >
      <div className="grow ">
        <div className="relative w-full">
          <input
            type="text"
            autoFocus
            name="message"
            className="flex w-full border rounded-xl
         text-gray-800 focus:outline-none
          focus:border-indigo-300 
          pl-4 h-10
          "
            value={message}
            onChange={(e) => setmessage(e.target.value)}
            placeholder={placeholder}
            autoComplete={disableCorrections ? "on" : "off"}
            autoCorrect={disableCorrections ? "on" : "off"}
            spellCheck={disableCorrections ? "true" : "false"}
          />
        </div>
      </div>
      <div className="ml-4">
        <button className="btn-primary">
          <span className="mr-2 ">Enviar</span>
          <i className="fa-regular fa-paper-plane"></i>
        </button>
      </div>
    </form>
  );
};
