import * as React from "react";
import ScubaChatWidget from "./components";

const App: React.FC = () => {
  return (
    <div className="app">
      <ScubaChatWidget apiKey="my-api-key" botName="Ask IISERB" />
    </div>
  );
};

export default App;
