
import { useState } from "react";
import SealPage from "./Components/Seal";
import MainPage from "./Components/MainPage";
import invitationCover from "./assets/invitation-cover.png";

export default function App() {
  const [opened, setOpened] = useState(false);

  return (
    <main
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${invitationCover})`,
      }}
    >
      {opened ? (
        <MainPage />
      ) : (
        <SealPage onOpen={() => setOpened(true)} />
      )}
    </main>
  );
}
