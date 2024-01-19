import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GlobalContextProviders } from "./context/GlobalContextProviders";
import RootLayout from "./pages/root-layout/RootLayout";
import ArmiesRootLayout from "./pages/armies/armies-root-layout/ArmiesRootLayout";
import KeywordsRootLayout from "./pages/keywords/keywords-root-layout/KeywordsRootLayout";
import Error from "./pages/error/Error";
import Home from "./pages/home/Home";
import Armies from "./pages/armies/all-armies/Armies";
import Keywords from "./pages/keywords/all-keywords/Keywords";
import AuthForm from "./pages/auth/AuthForm";
import { useAuth } from "./auth/firebase/AuthProvider";
import AdminPanelContainer from "./pages/admin/admin-panel-container/AdminPanelContainer";
import RestrictedAccess from "./pages/restricted-access/RestrictedAccess";
import LoadingBackdropSpinner from "./components/ui/loading/LoadingBackdropSpinner";
import SpellsRootLayout from "./pages/spells/spells-root-layout/SpellsRootLayout";
import Spells from "./pages/spells/all-spells/Spells";
import GameContainer from "./pages/game/game-container/GameContainer";
import "./App.css";

function AuthWrapper() {
  const { user } = useAuth();
  return user ? <RootLayout /> : <AuthForm />;
}

function AdminWrapper() {
  const { isAdmin, isLoading } = useAuth();
  if (isLoading) {
    return <LoadingBackdropSpinner />;
  }
  return isAdmin ? <AdminPanelContainer /> : <RestrictedAccess />;
}

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AuthWrapper />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "game",
          element: <GameContainer />,
        },
        {
          path: "armies",
          element: <ArmiesRootLayout />,
          children: [{ index: true, element: <Armies /> }],
        },
        {
          path: "keywords",
          element: <KeywordsRootLayout />,
          children: [{ index: true, element: <Keywords /> }],
        },
        {
          path: "spells",
          element: <SpellsRootLayout />,
          children: [{ index: true, element: <Spells /> }],
        },
        {
          path: "admin",
          element: <AdminWrapper />,
        },
      ],
    },
  ]);

  return (
    <GlobalContextProviders>
      <RouterProvider router={router} />
    </GlobalContextProviders>
  );
}
