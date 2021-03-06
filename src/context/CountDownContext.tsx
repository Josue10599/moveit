import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { ChallengeContext } from './ChallengedContext';

interface CountDownContextData {
    minutes: number;
    seconds: number;
    hasFinished: boolean;
    isActive: boolean;
    startCountDown: () => void;
    resetCountDown: () => void
}

interface CountDownProviderProps {
    children: ReactNode;
}

export const CountDownContext = createContext({} as CountDownContextData);

let countDownTimeout: NodeJS.Timeout;

export function CountDownProvider({ children }: CountDownProviderProps) {
    const { startNewChallenge } = useContext(ChallengeContext);

    const initialTime = 25 * 60;
    const [time, setTime] = useState(initialTime);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    function startCountDown() {
        setIsActive(true);
        setHasFinished(false);
    }

    function resetCountDown() {
        setIsActive(false);
        clearTimeout(countDownTimeout)
        setTime(initialTime);
        setHasFinished(false);
    }

    useEffect(() => {
        if (isActive && time > 0) {
            countDownTimeout = setTimeout(() => { setTime(time - 1); }, 1000)
        } else if (isActive && time == 0) {
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();
        }
    }, [isActive, time]);

    return (
        <CountDownContext.Provider value={{
            minutes,
            seconds,
            hasFinished,
            isActive,
            startCountDown,
            resetCountDown 
        }}>
            {children}
        </CountDownContext.Provider>
    );
}