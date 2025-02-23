import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types"; 

function ToasyMessage({ message }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed top-5 right-5 bg-blue-500 text-white px-4 py-2 rounded shadow-lg"
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

ToasyMessage.propTypes = {
  message: PropTypes.string.isRequired,  
};

export default ToasyMessage;
