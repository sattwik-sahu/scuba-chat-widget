import * as React from "react";
import ScubaChatWidget from "./components";

const App: React.FC = () => {
  return (
    <div className="app">
      This is the <code>App</code> component.
      <ScubaChatWidget apiKey="my-api-key" botName="Scuba Bot" />
    </div>
  );
};

export default App;
