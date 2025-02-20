import Navbar from "../components/Navbar";
import { AiFillDiscord } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";


export default function Contact() {
  return (
    <div className="contact-container">
      <Navbar/>
      <div className="contact-content">
        <div className="socials-contact-container">
            <h1>Reach Out On Socials</h1>
            <div className="social-items-container">
                <div>
                    <AiFillDiscord size={100} color="white"/>
                    <h3>Join our Discord server!</h3>
                </div>
                <div>
                    <FaSquareXTwitter size={100} color="white"/>
                    <h3>Follow us on X</h3>
                </div>
                <div>
                    <FaTelegram size={100} color="white"/>
                    <h3>Join our Telegram group!</h3>
                </div>
            </div>
        </div>
        <div className="direct-contact-container">
            <h1>Contact Us</h1>
            <form>
                <label>Full Name<input type="text" name="name" placeholder="Enter your full name" /></label>
                <label>Email<input type="email" name="email" placeholder="Enter your email" /></label>
                <label>Message<textarea name="message" placeholder="Write your message..."></textarea></label>
                <button type="submit">Send</button>
            </form>
        </div>
      </div>
    </div>
  )
}