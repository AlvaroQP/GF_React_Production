import React from "react";
import { AuthProvider } from "../auth/firebase/AuthProvider";
import { AlertProvider } from "./alerts/AlertProvider";
import { ArmyProvider } from "./armies/ArmyProvider";
import { KeywordProvider } from "./keywords/KeywordsProvider";
import { SpellProvider } from "./spells/SpellsProvider";
import { GameProvider } from "./game/GameProvider";
import { StepperProvider } from "./stepper/StepperProvider";

export const GlobalContextProviders = ({ children }) => (
  <AlertProvider>
    <AuthProvider>
      <ArmyProvider>
        <KeywordProvider>
          <SpellProvider>
            <GameProvider>
              <StepperProvider>{children}</StepperProvider>
            </GameProvider>
          </SpellProvider>
        </KeywordProvider>
      </ArmyProvider>
    </AuthProvider>
  </AlertProvider>
);
