import { ReactNode } from "react";

export interface ChallengeProviderProps {
    children: ReactNode;
    level: number;
    challengesCompleted: number;
    currentExperience: number;
}