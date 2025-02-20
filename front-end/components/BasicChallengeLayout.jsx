import { useState, useEffect } from "react";
import { useRouter } from "next/router";  
import Image from "next/image";

export default function BasicChallengeLayout({ sections, children }) {
    const [stage, setStage] = useState(0); // Stages for storyline
    const [dialogueIndex, setDialogueIndex] = useState(0); // Dialog management
    const [showFinishButton, setShowFinishButton] = useState(false); // Finish button visibility
    const [disableNext, setDisableNext] = useState(false); // Disabling the next button during tasks
    
    // ✅ Separate timers for Dev Task and Hack Task
    const [devElapsedTime, setDevElapsedTime] = useState(0);
    const [hackElapsedTime, setHackElapsedTime] = useState(0);
    const [currentTimer, setCurrentTimer] = useState(0); // Tracks the currently active timer
    const [timerRunning, setTimerRunning] = useState(false);
    const [isHackTask, setIsHackTask] = useState(false); // Track if in Hack Task

    const router = useRouter();
    const currentSection = sections[stage];

    // ✅ Timer Logic (Handles both Dev & Hack Tasks)
    useEffect(() => {
        let timer;
        if (timerRunning) {
            timer = setInterval(() => {
                setCurrentTimer((prev) => prev + 1);
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [timerRunning]);

    // ✅ Handle Timer Reset & Finish Button Display
    useEffect(() => {
        const isFinalDevTaskText = stage === 3 && dialogueIndex === 9;
        const isFinalHackTaskText = stage === 4 && dialogueIndex === 6;

        if ((isFinalDevTaskText || isFinalHackTaskText) && !showFinishButton) {
            setShowFinishButton(true);
            setDisableNext(true);
            setTimerRunning(true);
        } else if (!isFinalDevTaskText && !isFinalHackTaskText && showFinishButton) {
            setShowFinishButton(false);
            setDisableNext(false);
        }
    }, [stage, dialogueIndex]);

    // ✅ Handles Next Navigation (Including Summary Redirect)
    const handleNext = () => {
        if (!disableNext) {
            const isFinalSection = stage === sections.length - 1;
            const isFinalDialogue = dialogueIndex === currentSection.dialogue.length - 1;

            if (isFinalSection && isFinalDialogue) {
                router.push("/challenge_summary");
            } else if (dialogueIndex < currentSection.dialogue.length - 1) {
                setDialogueIndex(dialogueIndex + 1);
            } else if (stage < sections.length - 1) {
                setStage(stage + 1);
                setDialogueIndex(0);

                // ✅ Reset Timer when transitioning to Hack Task
                if (stage === 3) { // Moving from Dev Task to Hack Task
                    setDevElapsedTime(currentTimer); // Store Dev Task Time
                    setCurrentTimer(0); // Reset for Hack Task
                    setIsHackTask(true);
                }
            }
        }
    };

    // ✅ Handles Back Navigation
    const handleBack = () => {
        if (dialogueIndex > 0) {
            setDialogueIndex(dialogueIndex - 1);
        } else {
            if (stage > 0) {
                setStage(stage - 1);
                setDialogueIndex(sections[stage - 1].dialogue.length - 1);
            }
        }
    };

    return (
        <div className="basic-challenge-layout">
            <div className="challenge-background"></div>

            {/* Character & Dialogue Section */}
            <div className="challenge-top-section">
                <div className="guide-character">
                    <Image src={`/character.png`} alt="Guide Character" width={380} height={700} />
                </div>
            </div>

            {/* Terminal-Style Dialogue Box */}
            <div className="terminal-box">
                <p className="glitch-text">{currentSection.dialogue[dialogueIndex]}</p>
            </div>

            {/* Navigation Buttons */}
            <div className="challenge-navigation">
                <button className="nav-button" onClick={handleBack} disabled={stage === 0 && dialogueIndex === 0}>
                    Back
                </button>
                <button className="nav-button" onClick={handleNext} disabled={disableNext}>
                    {stage === sections.length - 1 && dialogueIndex === currentSection.dialogue.length - 1 ? "Finish Challenge" : "Next"}
                </button>
            </div>

            {/* ✅ Finish Button & Timer */}
            {showFinishButton && (
                <div className="challenge-footer">
                    <button 
                        className="finish-button"
                        onClick={() => {
                            setTimerRunning(false); // ✅ Stop Timer
                            setDisableNext(false);  // ✅ Unlock Next button
                        }}
                    >
                        FINISH
                    </button>
                    
                    {/* ✅ Live Timer Display */}
                    <div className="challenge-timer">
                        ⏳ {Math.floor(currentTimer / 60)}:{(currentTimer % 60).toString().padStart(2, "0")}
                    </div>
                </div>
            )}

            {/* Render additional children */}
            {children({ 
                showFinishButton, 
                setShowFinishButton, 
                stage, 
                dialogueIndex, 
                setTimerRunning,
                setDisableNext
            })}
        </div>
    );
}