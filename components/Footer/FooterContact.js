import { useRef } from "react";
import db from "../../database/firebase";
import { collection, addDoc } from "firebase/firestore";

const FooterContact = () => {
  const name = useRef();
  const email = useRef();
  const message = useRef();
  const send = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "customers"), {
        name: name.current.value,
        email: email.current.value,
        message: message.current.value,
      });

      alert(
        `Thank for you'r feddback we will be in touch with you ${name.current.value}`
      );

      name.current.value = "";
      email.current.value = "";
      message.current.value = "";
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <>
      <div>
        <h1 className="text-3xl font-mono text-gray-500 py-5 lg:py-0 lg:pb-5">
          Contact Us ? It Works,
        </h1>

        <div className="">
          <form className="flex flex-col space-y-3" onSubmit={send}>
            <input
              ref={name}
              type="text"
              placeholder="Name"
              className="py-3 lg:py-5 pl-3 font-mono text-gray-100 focus:outline-none bg-gray-800"
              required
            />
            <input
              ref={email}
              type="email"
              placeholder="Email"
              className="py-3 pl-3 lg:py-5 text-gray-100 font-mono focus:outline-none bg-gray-800"
              required
            />
            <textarea
              ref={message}
              cols="30"
              rows="5"
              required
              placeholder="Message"
              className="py-3 pl-3 text-gray-100 lg:py-5 font-mono focus:outline-none bg-gray-800"
            ></textarea>
            <button className="py-3 bg-[#6D5BC9] hover:bg-[#7662db] font-mono text-gray-100 focus:outline-none">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default FooterContact;
