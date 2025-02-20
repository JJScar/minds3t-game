import Navbar from "../components/Navbar";
import { useState } from "react";

export default function Leaderboard() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <Navbar />
      <div className="leaderboard-container">
        <h1 className="leaderboard-title">🏆 The Leaderboard 🏆</h1>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="🔍 Search for a player..."
          className="search-bar"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <div className="leaderboard-table-wrapper">
          <table className="leaderboard-table">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Player</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {/* Placeholder rows (will be dynamic later) */}
              <tr className="top-player">
                <td>🥇 1</td>
                <td>Player1</td>
                <td>1200</td>
              </tr>
              <tr className="second-place">
                <td>🥈 2</td>
                <td>Player2</td>
                <td>1100</td>
              </tr>
              <tr className="third-place">
                <td>🥉 3</td>
                <td>Player3</td>
                <td>1050</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}