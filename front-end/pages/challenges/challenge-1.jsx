import BasicChallengeLayout from "../../components/BasicChallengeLayout";

export default function Challenge0() {
    return (
        <BasicChallengeLayout
            sections={[
                // === Setting the Scene ===
                {
                    dialogue: [
                        "You proved yourself in Challenge 0 by completing a basic Solidity function—your first step into the underground network.",
                        "Now, the real work begins.",
                        "The corpos are still in control, but we’re starting to build our own infrastructure—a decentralized resistance, free from their watchful eyes.",
                        "But before we can disrupt their systems, we need to bootstrap our own."
                    ]
                },

                // === Story Continues === //
                {
                    dialogue: ["Challenge 1: Bootstrapping the Revolution",
                    "Objective:",
                    ]
                },

                // === Challenge 1 Instructions ===
                {
                    dialogue: [
                        "📜 Instructions",
                        "1️⃣ Open `Challenge1` in your IDE.",
                        "2️⃣ Read the contract carefully. The vulnerability is subtle, but it's there.",
                        "3️⃣ Patch the contract so it can't be exploited.",
                        "4️⃣ Run the security tests—if they pass, you’ve done it right.",
                        "5️⃣ Move on to the hacking task. Find the exploit before they do.",
                        "⚠️ Once you complete **both tasks**, click the **FINISH** button."
                    ]
                }
            ]}
        >
            {({ showFinishButton, setShowFinishButton, stage, dialogueIndex, elapsedTime, setTimerRunning, setDisableNext }) => {
                // Logic to show/hide finish button at the correct dialogue points
                const isFinalWarmUpText = stage === 3 && dialogueIndex === 9;
                const isFinalChallengeText = stage === 4 && dialogueIndex === 6;

                if ((isFinalWarmUpText || isFinalChallengeText) && !showFinishButton) {
                    setShowFinishButton(true);
                    setDisableNext(true); // Prevents moving forward without clicking Finish
                } else if (!isFinalWarmUpText && !isFinalChallengeText && showFinishButton) {
                    setShowFinishButton(false);
                    setDisableNext(false);
                }

                return (
                    <>
                        {/* Finish Button & Timer: Always fixed at bottom-right */}
                        {showFinishButton && (
                            <div className="challenge-footer">
                                <button 
                                    className="finish-button"
                                    onClick={() => {
                                        setTimerRunning(false);
                                        setDisableNext(false); // Allows moving forward after clicking Finish
                                    }}
                                >
                                    FINISH
                                </button>
                                <div className="challenge-timer">
                                    ⏳ {Math.floor(elapsedTime / 60)}:{(elapsedTime % 60).toString().padStart(2, "0")}
                                </div>
                            </div>
                        )}
                    </>
                );
            }}
        </BasicChallengeLayout>
    );
}