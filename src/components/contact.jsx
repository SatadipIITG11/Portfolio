import { CONTACT } from "../constants";
import { motion } from "framer-motion";

function Contact() {
  return (
    <div className="border-t border-stone-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 1, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Contact Me
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p
          className="my-4"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 1, x: -100 }}
          transition={{ duration: 1}}
        >
          {CONTACT.address}
        </motion.p>
        <motion.p className="my-4" whileInView={{opacity:1,x:0}}
        initial={{opacity:1,x:100}}
        transition={{duration:1}}>{CONTACT.phoneNo}</motion.p>
        <a href="#" className="border-b">
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
}

export default Contact;
