import React from "react";
import { useRouter } from "next/router";

export default function ChallengeSummary({ challengeTitle, devTime, hackTime }) {
    const router = useRouter(); 
    return (
        <div className="challenge-summary-container">
            <h1 className="challenge-summary-title">{challengeTitle}</h1>
            
            <div className="challenge-summary-details">
                <div className="summary-item">
                    <span className="summary-label">🛠 Dev Task:</span>
                    <span className="summary-time">{devTime} minutes</span>
                </div>

                <div className="summary-item">
                    <span className="summary-label">🔓 Hack Task:</span>
                    <span className="summary-time">{hackTime} minutes</span>
                </div>
            </div>

            <button className="summary-back-button" onClick={() => router.push("/challenges")}>
                ⬅ Back to Challenges
            </button>
        </div>
    );
}