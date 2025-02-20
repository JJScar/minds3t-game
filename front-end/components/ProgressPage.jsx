import React, { useState } from "react";

export default function ProgressPage() {
  // Mock data
  const challenges = [
    { id: 1, title: "Bootstrapping the Revolution", status: "Completed", bestTime: "2m 30s" },
    { id: 2, title: "Keys to the Kingdom", status: "Completed", bestTime: "3m 15s" },
    { id: 3, title: "Solidity Foundations", status: "Incomplete", bestTime: null },
    { id: 4, title: "Code is Law", status: "Incomplete", bestTime: null },
    { id: 5, title: "The NFT Syndicate", status: "Incomplete", bestTime: null },
    { id: 6, title: "The Oracle Gambit", status: "Incomplete", bestTime: null },
    { id: 7, title: "The Gas War", status: "Incomplete", bestTime: null },
    { id: 8, title: "The Parcel Ledger", status: "Incomplete", bestTime: null },
    { id: 9, title: "Flash Loan Chaos", status: "Incomplete", bestTime: null },
    { id: 10, title: "The Final Firewall", status: "Incomplete", bestTime: null },
  ];

  // Stats
  const totalChallenges = challenges.length;
  const completedChallenges = challenges.filter((c) => c.status === "Completed").length;
  const totalTime = challenges
    .filter((c) => c.bestTime)
    .reduce((acc, curr) => {
      const [minutes, seconds] = curr.bestTime.split(/[m s]+/).map(Number);
      return acc + minutes * 60 + seconds;
    }, 0);
  const totalTimeFormatted = `${Math.floor(totalTime / 60)}m ${totalTime % 60}s`;

  const leaderboardRank = 8; // Example rank
  const badges = ["ERC-20 Beginner", "Solidity Explorer"]; // Example badges

  return (
    <div className="progress-page">
      <h1>Your Progress</h1>

      {/* Progress Bar */}
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${(completedChallenges / totalChallenges) * 100}%` }}>
          {((completedChallenges / totalChallenges) * 100).toFixed(0)}% Complete
        </div>
      </div>

      {/* Challenge Summary Table */}
      <h2>Challenge Summary</h2>
      <table className="challenge-table">
        <thead>
          <tr>
            <th>Challenge</th>
            <th>Title</th>
            <th>Status</th>
            <th>Best Time</th>
          </tr>
        </thead>
        <tbody>
          {challenges.map((challenge) => (
            <tr key={challenge.id}>
              <td>{challenge.id}</td>
              <td>{challenge.title}</td>
              <td>{challenge.status}</td>
              <td>{challenge.bestTime || "---"}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Personalized Stats */}
      <h2>Personalized Stats</h2>
      <div className="stats-container">
        <p>Total Challenges Completed: {completedChallenges}/{totalChallenges}</p>
        <p>Total Time Spent: {totalTimeFormatted}</p>
      </div>

      {/* Leaderboard Section */}
      <h2>Leaderboard</h2>
      <div className="leaderboard-container">
        <p>Your Rank: #{leaderboardRank}</p>
        <p>Global Rank: Top 10%</p>
      </div>

      {/* Badges Section */}
      <h2>Badges</h2>
      <div className="badges-container">
        {badges.map((badge, index) => (
          <span key={index} className="badge">
            {badge}
          </span>
        ))}
      </div>
    </div>
  );
}