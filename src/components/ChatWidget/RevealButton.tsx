import * as React from "react";

type RevealButtonProps = {
  reveal: () => void;
  icon: React.ReactNode;
};

const RevealButton: React.FC<RevealButtonProps> = ({ reveal, icon }) => {
  return (
    <button className="reveal_button" onClick={() => reveal()}>
      {icon}
    </button>
  );
};

export default RevealButton;
