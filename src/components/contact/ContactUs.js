import React, { useState } from "react";
import Title from "../shared/Title";
import ContactIcons from "./ContactIcons";

const ContactUs = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (username === "") {
      setErrMsg("Username is required!");
    } else if (phoneNumber === "") {
      setErrMsg("Phone number is required!");
    } else if (email === "") {
      setErrMsg("Please give your Email!");
    } else if (!emailValidation(email)) {
      setErrMsg("Give a valid Email!");
    } else if (subject === "") {
      setErrMsg("Please give your Subject!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      setSuccessMsg(
        `Thank you dear ${username}, Your Messages has been sent Successfully!`
      );
      setErrMsg("");
      setUsername("");
      setPhoneNumber("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-16 md:py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center my-8 md:my-20">
        <Title title="CONTACT" description="Contact With Me" />
      </div>
      <div className="w-full flex flex-col md:flex-row justify-between">
        <ContactIcons />
        <div className="w-full md:w-[80%] lg:w-[60%] h-full py-6 md:py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 md:p-8 rounded-lg shadow-shadowOne">
          <form className="w-full flex flex-col gap-4 md:gap-6 py-2 md:py-5">
            {errMsg && (
              <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                {errMsg}
              </p>
            )}
            {successMsg && (
              <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                {successMsg}
              </p>
            )}
            <div className="w-full flex flex-col md:flex-row gap-4 md:gap-10">
              <div className="w-full md:w-1/2 flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Your name
                </p>
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  className={`${
                    errMsg === "Username is required!" && "outline-designColor"
                  } contactInput`}
                  type="text"
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Phone Number
                </p>
                <input
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  value={phoneNumber}
                  className={`${
                    errMsg === "Phone number is required!" &&
                    "outline-designColor"
                  } contactInput`}
                  type="text"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-sm text-gray-400 uppercase tracking-wide">
                Email
              </p>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className={`${
                  errMsg === "Please give your Email!" && "outline-designColor"
                } contactInput`}
                type="email"
              />
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-sm text-gray-400 uppercase tracking-wide">
                Subject
              </p>
              <input
                onChange={(e) => setSubject(e.target.value)}
                value={subject}
                className={`${
                  errMsg === "Please give your Subject!" &&
                  "outline-designColor"
                } contactInput`}
                type="text"
              />
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-sm text-gray-400 uppercase tracking-wide">
                Message
              </p>
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                className={`${
                  errMsg === "Message is required!" && "outline-designColor"
                } contactTextArea`}
                cols="30"
                rows="8"
              ></textarea>
            </div>
            <div className="w-full">
              <button
                onClick={handleSend}
                className="w-full h-12 md:h-14 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
