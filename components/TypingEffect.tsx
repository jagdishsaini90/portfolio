"use client"; // ✅ Required for Next.js components using hooks

import useTypingEffect from "../hooks/useTypeEffect"; // Import the hook

const TypingText = ({text}) => {
  const { displayText } = useTypingEffect(text, 300, 300);

      return <>
            <span >{displayText}</span>
      </>;
};

export default TypingText;
