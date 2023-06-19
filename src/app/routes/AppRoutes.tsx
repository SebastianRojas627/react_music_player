import { Navigate, Route, Routes } from "react-router-dom";
import { SonglistPage } from "../pages/SonglistPage";
import { GuardedRoute } from "../../guards/GuardedRoutes";
import { useStore } from "../../context/ContextProvider";
import { PlayerPage } from "../pages/PlayerPage";

export const AppRoutes = () => {
  const { auth } = useStore();

  return (
    <Routes>
      <Route
        path="/"
        element={
          <GuardedRoute auth={auth}>
            {" "}
            <SonglistPage />{" "}
          </GuardedRoute>
        }
      />
      <Route path="/*" element={<Navigate to="/" />} />
      <Route path="/player/:songId?" element={<PlayerPage />} />
    </Routes>
  );
};
