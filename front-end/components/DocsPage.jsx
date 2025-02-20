import React, { useState } from "react";

export default function DocsPage() {
  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "getting-started", title: "Getting Started" },
    { id: "challenges", title: "Challenges" },
    { id: "mechanics", title: "Game Mechanics" },
    { id: "security", title: "Smart Contract Security" },
    { id: "faq", title: "FAQs" },
  ];

  const [activeSection, setActiveSection] = useState("introduction");

  return (
    <div className="docs-container">
      {/* Sidebar Navigation */}
      <nav className="docs-sidebar">
        <h2>Documentation</h2>
        <ul>
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={activeSection === section.id ? "active" : ""}
                onClick={() => setActiveSection(section.id)}
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Content */}
      <div className="docs-content">
        <section id="introduction">
          <h1>Introduction</h1>
          <h3>Video Walkthrough</h3>
          {/* Placeholder Video */}
          <div className="video-container">
            <video width="100%" controls poster="/placeholder-thumbnail.jpg">
            <source src="/placeholder-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
            </video>
          </div>

          {/* Future YouTube Embed (Replace LINK when ready) */}
          {/* <div className="video-container">
            <iframe 
                width="100%" 
                height="315" 
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
                title="Minds3t Walkthrough"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
            </iframe>
          </div> */}

          <p>Welcome to Minds3t, an immersive, hands-on learning experience designed to shape the mindset of beginner  Web3 developers and security researchers. This is not just another educational platform—it’s an interactive game that challenges you to think, research, and problem-solve like a real blockchain expert.

        Unlike conventional tutorials that focus on syntax and surface-level explanations, Minds3t is designed to simulate real-world challenges, ensuring you build the right mindset, skills, and confidence to navigate the blockchain space.</p>

        <h3>Why Does Minds3t Exist?</h3>
        <p>The world of blockchain, smart contracts, and decentralized applications (dApps) is incredibly powerful, but also ruthlessly unforgiving. Mistakes in smart contract development can lead to multi-million dollar losses. The rise of DeFi exploits, protocol hacks, and critical security breaches has demonstrated one truth:</p>

        <h4>🛡️ Web3 is a fast paced environment where only the most resilient minds succeed.</h4>

        <p>While there is plenty of technical content available online, there’s a major gap in Web3 education:<br></br><br></br>

        1️⃣ Most learning resources are passive<br></br>
        •	Reading about security concepts is not enough.<br></br>
        •   Researching ability isn't the emphasis of the learning.<br></br><br></br>

        2️⃣ Web3 demands a different mindset<br></br>
	    •	The best developers & security researchers aren’t just coders—they are critical thinkers, hackers, and problem solvers.<br></br>
	    •	This game is built to train how you think, not just what you know.<br></br><br></br>

        3️⃣ Hands-on experience is crucial<br></br>
	    •	In Web3, you don’t learn by just watching videos.<br></br>
	    •	You must break, debug, and exploit code to truly understand blockchain mechanics.<br></br><br></br>

        4️⃣ Security is NOT an afterthought<br></br>
	    •	Every Solidity developer is also a security researcher—whether they realize it or not.<br></br>
	    •	Understanding both development and attack vectors is what makes an elite blockchain engineer.<br></br>

        </p>
        </section>

        <section id="getting-started">
          <h1>Getting Started</h1>
          <p>Whether you’re a beginner looking to learn Solidity or a seasoned blockchain developer sharpening your security skills, this game will push your limits and help you think like a hacker, code like a developer, and secure like an auditor.<br></br>Follow these steps to begin your journey!</p>

          <h3>🚀 Step 1: Understanding the Minds3t Challenge Structure</h3>
          <p>Minds3t is structured as a series of interactive challenges, each designed to help you develop a surfaCE level understanding of blockchain technology, smart contracts, and security exploits. However, the emphasis is one your research ability and resilience of getting the task done.</p><br></br><br></br>

          Every challenge has two parts:<br></br>
            1️⃣ Development Task – Write or complete smart contracts to solve a problem.<br></br>
            2️⃣ Hacking Task – Exploit vulnerabilities in an existing smart contract.<br></br><br></br>

            ✅ No external IDE required! You’ll complete all coding directly within the platform.<br></br>
            ✅ Your solutions are tested automatically—you’ll know immediately if you solved the challenge correctly.<br></br><br></br>
          
          <h3>🔧 Step 2: Creating Your Profile</h3>
          <p>
          Before you start playing, you need to set up your Minds3t profile:<br></br><br></br>
	        1.	Sign up or log in (if required).<br></br>
	        2.	Choose a player handle—your hacker alias.<br></br>
	        3.	Customize your profile picture (coming soon!).<br></br>
	        4.	Write a short bio (optional, but recommended).<br></br><br></br>

            Your progress, achievements, and leaderboard ranking will be stored under your profile.
          </p>

          <h3>🛠️ Step 3: Navigating the Interface</h3>
          <p>Minds3t is designed to be simple, interactive, and intuitive. Here’s a quick overview:<br></br><br></br>

            🔹 🏠 Home Page: Overview of the game and latest updates.<br></br>
            🔹 📜 Storyline Page: A map-based progress tracker that lets you start new challenges.<br></br>
            🔹 🎯 Challenges Page: Lists all available challenges. Click a challenge to begin!<br></br>
            🔹 📖 Docs Page: Your knowledge base for learning blockchain development & security.<br></br>
            🔹 💾 Profile Page: View your stats, rank, and badges.<br></br><br></br>

            Each challenge follows a linear storyline—you must complete them in order to progress.</p>
          <h3>🔥 Step 4: Starting Your First Challenge</h3>
          <p>Ready to begin? Here’s what to expect:<br></br><br></br>

            1️⃣ Click on the first challenge in the Storyline Page.<br></br>
            2️⃣ Read the mission briefing—each challenge is part of a larger cyberpunk-style story.<br></br>
            3️⃣ Complete the Solidity contract (Development Task) OR find and exploit vulnerabilities (Hacking Task).<br></br>
            4️⃣ Run the built-in test cases to validate your solution.<br></br>
            5️⃣ If successful, the next challenge unlocks!<br></br><br></br>

            💡 Tip: If you get stuck, good! That means you're learning. Do anything to complete the task!</p>

          <h3>🏆 Step 5: Track Your Progress</h3>
          <p>Your Progress Page helps you stay motivated and track your achievements:<br></br><br></br>
	        •	Progress Bar – See how much of the storyline you’ve completed.<br></br>
	        •	Challenge Table – Check your best completion times.<br></br>
	        •	Leaderboard Rank – Compare your progress with other players.<br></br>
	        •	Badges Earned – Show off your skills!</p>
        </section>

        <section id="challenges">
          <h1>Challenges - The Core of Minds3t</h1>
          <p>Minds3t is built around interactive challenges designed to push your skills as a Web3 developer and security researcher. Each challenge is a piece of the storyline, guiding you through the fundamentals of smart contract development and security in a real-world inspired setting.<br></br><br></br>

          Unlike traditional tutorials, Minds3t challenges require you to think, break, and build—just like a real blockchain expert.</p>

          <h3>🔍 How Challenges Work</h3>
          <p>Each challenge consists of two tasks:</p>
          <h4>1️⃣ Development Task (Build Mode) 🏗️</h4>
          <p>	•	You will be given an incomplete Solidity smart contract.<br></br>
	            •	Your goal is to write or modify the code to meet specific requirements.<br></br>
	            •	The contract must pass all automated test cases to be considered correct.</p>

          <h4>2️⃣ Hacking Task (Break Mode) 🔓</h4>
          <p>	•	You will be presented with a vulnerable smart contract.<br></br>
	            •	Your mission is to exploit the weakness and “hack” the contract.<br></br>
	            •	You must execute the attack in a way that passes predefined test cases.<br></br><br></br>

            💡 Examples:<br></br>
            ✔ Exploit a reentrancy vulnerability to drain contract funds.<br></br>
            ✔ Manipulate oracles to execute an unintended withdrawal.<br></br>
            ✔ Use flash loans to create an arbitrage opportunity.<br></br><br></br>

            ✅ Both development and hacking tasks are critical for understanding the blockchain security landscape.</p>
        </section>

        <section id="mechanics">
          <h1>Game Mechanics</h1>
          <p>Understand how the game works, including levels, progression, and scoring.</p>
        </section>

        <section id="security">
          <h1>Smart Contract Security</h1>
          <p>Learn about vulnerabilities, exploits, and secure development practices.</p>
        </section>

        <section id="faq">
          <h1>FAQs</h1>
          <p>Common questions answered here.</p>
        </section>
      </div>
    </div>
  );
}