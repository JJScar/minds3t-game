import React, { useState } from "react";

export default function ProfilePage() {
  // Mock user data (replace later with backend API calls)
  const [profile, setProfile] = useState({
    profilePicture: "/default-avatar.png", // Default profile pic
    handle: "CryptoWarrior",
    bio: "Exploring the depths of Web3 security & development.",
    joinDate: "January 2024",
    challengesCompleted: 5,
    leaderboardRank: 8,
    badges: ["ERC-20 Beginner", "Smart Contract Hacker"],
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState(profile);

  // Handle profile edit
  const handleEditProfile = () => setIsEditing(true);
  const handleSaveProfile = () => {
    setProfile(editedProfile);
    setIsEditing(false);
  };

  return (
    <div className="profile-page">

      {/* Profile Image */}
      <div className="profile-image-container">
        <img src={profile.profilePicture} alt="Profile" className="profile-image" />
      </div>

      {/* Player Handle */}
      <h2>{profile.handle}</h2>

      {/* Edit Profile Button */}
      <button className="edit-button" onClick={handleEditProfile}>
        Edit Profile
      </button>

      {/* Bio Section */}
      <p className="bio">{profile.bio}</p>

      {/* Player Info */}
      <div className="player-info">
        <p><strong>Joined:</strong> {profile.joinDate}</p>
        <p><strong>Challenges Completed:</strong> {profile.challengesCompleted}</p>
        <p><strong>Leaderboard Rank:</strong> #{profile.leaderboardRank}</p>
      </div>

      {/* Badges Section */}
      <h2>Badges</h2>
      <div className="badges-container">
        {profile.badges.map((badge, index) => (
          <span key={index} className="badge">{badge}</span>
        ))}
      </div>

      {/* Edit Profile Modal */}
      {isEditing && (
        <div className="modal">
          <div className="modal-content">
            <h2>Edit Profile</h2>

            {/* Update Username */}
            <label>Handle:</label>
            <input
              type="text"
              value={editedProfile.handle}
              onChange={(e) => setEditedProfile({ ...editedProfile, handle: e.target.value })}
            />

            {/* Update Bio */}
            <label>Bio:</label>
            <textarea
              value={editedProfile.bio}
              onChange={(e) => setEditedProfile({ ...editedProfile, bio: e.target.value })}
            />

            {/* Save & Cancel Buttons */}
            <div className="modal-buttons">
              <button onClick={handleSaveProfile}>Save</button>
              <button onClick={() => setIsEditing(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}