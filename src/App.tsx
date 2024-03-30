import * as React from "react";
import { ChatWidget } from "./components";

const App: React.FC = () => {
  return (
    <div className="app">
      This is the <code>App</code> component.
      <ChatWidget />
    </div>
  );
};

export default App;
