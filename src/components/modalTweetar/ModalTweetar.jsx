import { useState } from "react";
import { createPortal } from "react-dom";

import ModalContent from "./ModalContent";

const ModalTweetar = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          setShowModal(true);
        }}
        className="bg-blue-500 me-6 mt-6 rounded-full hover:bg-blue-600 delay-100 duration-75 text-white-100 h-12"
      >
        Tweetar
      </button>
      {showModal &&
        createPortal(
          <ModalContent onClose={() => setShowModal(false)} />,
          document.body
        )}
    </>
  );
};

export default ModalTweetar;
