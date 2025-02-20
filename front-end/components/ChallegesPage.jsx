import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ChallengesPage() {
  const [completedChallenges, setCompletedChallenges] = useState([1, 2]);

  const challenges = [
    { id: 0, title: "Getting Warm", link: "challenges/challenge-0" },
    { id: 1, title: "Bootstrapping the Revolution", link: "challenges/challenge-1" },
    { id: 2, title: "Keys to the Kingdom", link: "challenges/challenge-2" },
    { id: 3, title: "Solidity Foundations", link: "challenges/challenge-3" },
    { id: 4, title: "Code is Law", link: "challenges/challenge-4" },
    { id: 5, title: "The NFT Syndicate", link: "challenges/challenge-5" },
    { id: 6, title: "The Oracle Gambit", link: "challenges/challenge-6" },
    { id: 7, title: "The Gas War", link: "challenges/challenge-7" },
    { id: 8, title: "The Parcel Ledger", link: "challenges/challenge-8" },
    { id: 9, title: "Flash Loan Chaos", link: "challenges/challenge-9" },
    { id: 10, title: "The Final Firewall", link: "challenges/challenge-10" },
  ];

  return (
    <div className="challenges-page">
      <h1 className="cyberpunk-title">STORYLINE</h1>
      
      {/* Grid layout for challenges */}
      <div className="challenges-grid">
        {challenges.map((challenge) => (
          <div key={challenge.id} className="challenge-item">
            <Link
              href={challenge.link}
              className={`challenge-circle ${completedChallenges.includes(challenge.id) ? "completed" : ""}`}
            >
              <Image
                src={`/challenge-${challenge.id}.png`}
                alt={`Node for ${challenge.title}`}
                width={80}
                height={80}
                className="node-image"
              />
            </Link>
            <p className="challenge-text">
              Challenge {challenge.id}: {challenge.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}