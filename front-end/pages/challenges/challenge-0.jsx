//   ________        __    __  .__                  __      __                       
//  /  _____/  _____/  |__/  |_|__| ____    ____   /  \    /  \_____ _______  _____  
// /   \  ____/ __ \   __\   __\  |/    \  / ___\  \   \/\/   /\__  \\_  __ \/     \ 
// \    \_\  \  ___/|  |  |  | |  |   |  \/ /_/  >  \        /  / __ \|  | \/  Y Y  \
//  \______  /\___  >__|  |__| |__|___|  /\___  /    \__/\  /  (____  /__|  |__|_|  /
//         \/     \/                   \//_____/          \/        \/            \/ 

import { useRouter } from "next/router";
import BasicChallengeLayout from "../../components/BasicChallengeLayout";

export default function Challenge0() {
    const router = useRouter(); // Use router to handle redirection

    return (
        <BasicChallengeLayout
            sections={[
                // === Scene Setting ===
                {
                    dialogue: [
                        "So… you finally made it.",
                        "You’re probably wondering what the hell is going on. Why you’re here. What happened to the world.",
                        "The dream of decentralization? Gone. Hijacked. What was meant to be a revolution became a corporate playground.",
                        "Mega-corps disguised as 'decentralized' entities control everything. They own the networks, manipulate protocols, and rewrite the rules when it suits them.",
                        "Every transaction, every smart contract, every so-called 'trustless' system—it’s all monitored, intercepted, and exploited before you even realize what’s happening.",
                        "Those who resisted? Silenced. Their wallets blacklisted, their nodes shut down, their identities erased from the system.",
                        "Now, there’s only one way to survive. You either learn the system inside out—or you get played by it."
                    ]
                },

                // === Warm-up Introduction ===
                {
                    dialogue: [
                        "This is where you come in.",
                        "You're not just another script kiddie chasing profits. You're a problem solver. A ghost in the system. The kind of operator who thrives where others fail.",
                        "The Corpos, the so-called 'security experts'—they won't touch the kind of jobs you take. Too complex. Too dangerous. Too much risk.",
                        "But you? You don’t back down. You don’t ask for permission. You find a way.",
                        "Your first task is simple. A warm-up, if you will.",
                        "You need to complete a basic Solidity function. Consider this your entry test.",
                        "Let's get to work. Fail… and, well, you’ll just be another forgotten address in the mempool."
                    ]
                },

                // === Warm-up Challenge Instructions ===
                {
                    dialogue: [
                        "📜 Instructions",
                        "1️⃣ Clone the repository from https://github.com/JJScar/minds3t-challenges",
                        "2️⃣ Open the `ChallengeWarmUp` folder inside your IDE.",
                        "3️⃣ Read the README.md for the context of the challenge.",
                        "4️⃣ Start with `DevTask1.sol`",
                        "5️⃣ Read the TODO comments & complete the missing function.",
                        "6️⃣ Run the tests in Foundry (exact command is in the challenge README).",
                        "7️⃣ Move to HackTask01.sol",
                        "8️⃣ Run the respective test.",
                        "If all tests pass, you're in. If not, figure it out. Use AI assistants, YouTube, whatever it takes to get the job done!"
                    ]
                },

                // === Warm-up Challenge Explanation and Beginning of Dev Task ===
                {
                    dialogue: [
                        "Challenge 00 - Getting Warm",
                        "Right now, you’re connected to an old underground terminal—our testbed for recruits like you.",
                        "Your first task is simple. Consider this your entry test.",
                        "You need to complete a basic Solidity function—a smart contract that any real developer should be able to write in their sleep.",
                        "The Corpos have done it again. They have control of most of the communication on the blockchain.",
                        "But we still need to be able to send messages to the others.",
                        "We need you to finish the logic on the setting a new message function.",
                        "This will let us set new messages for the others to read.",
                        "Find the Challenge0 folder to complete the challenge.",
                        "⚠️ Once you have **completed the challenge**, click the **FINISH** button below to mark your progress."
                    ]
                },

                // === Beginning of Hack Task ===
                {
                    dialogue: [
                        "Ok you managed to scrape by I guess.",
                        "This was the Dev task, which you passed. But, that does not mean you can hack.",
                        "Next you will demonstrate your ability to find vulnerabilities in smart contracts.",
                        "One of our primary objectives is to find ways to infiltrate the Corpos and perhaps cause them some havoc...",
                        "Now navigate back into the `challenge0` folder and find the `GettingWarmHack.sol` file.",
                        "Upon clicking the next button, the challenge will begin, and yes, you will be timed.",
                        "⚠️ Once you have **completed the challenge**, click the **FINISH** button below to mark your progress."
                    ]
                },

                // === Post-Warm-up Transition (Final Section) ===
                {
                    dialogue: [
                        "Not bad. You handled the warm-up. But don't get comfortable.",
                        "The real work starts now.",
                        "What you just did? That was a test. A check to see if you can at least write a basic function without breaking the chain.",
                        "Now, we move to something more… real."
                    ]
                }
            ]}
        >
            {({ showFinishButton, stage, dialogueIndex, elapsedTime, setTimerRunning, setDisableNext }) => {
                const isFinalSection = stage === 6; // Last section
                const isFinalDialogue = isFinalSection && dialogueIndex === 4; // Last dialogue

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
                            </div>
                        )}

                        {/* Redirect to Summary Page when Next is clicked on last dialogue */}
                        {isFinalDialogue && (
                            <button 
                                className="nav-button"
                                onClick={() => router.push("/challenge_summary")}
                            >
                                NEXT
                            </button>
                        )}
                    </>
                );
            }}
        </BasicChallengeLayout>
    );
}