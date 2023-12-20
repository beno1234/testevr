import React, { CSSProperties, useEffect, useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  link: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, link }) => {
  const [iframeLink, setIframeLink] = useState<string>(link);

  useEffect(() => {
    setIframeLink(link);
  }, [link]);

  useEffect(() => {
    // Resetar a URL do iframe quando o modal for fechado
    if (!isOpen) {
      setIframeLink("");
    }
  }, [isOpen]);

  const modalStyle: CSSProperties = {
    display: isOpen ? "block" : "none",
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  };

  const contentStyle: CSSProperties = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "20px",
    backgroundColor: "white",
    borderRadius: "8px",
    width: "80vw",
    height: "80vh",
    zIndex: 1000,
  };

  return (
    <div style={modalStyle} onClick={onClose} className="">
      <div style={contentStyle} onClick={(e) => e.stopPropagation()}>
        <iframe src={iframeLink} className="w-full h-full"></iframe>
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
};

export default Modal;
