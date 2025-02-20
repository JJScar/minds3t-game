import Image from "next/image";

export default function HomeContent() {
    return (
        <div className="content-container">
            {/* Left: Why This Game? */}
            <div className="why-section">
                <h1>Why Minds3t?</h1>
                <p>
                    While there is plenty of educational content on blockchain development and security,<br></br> we at Minds3t feel there is a lack of emphasis on the mindset an individual needs to possess in order to successfully add value to the industry. 
                    <br></br><br></br>
                    In Web3, knowing how to code is not enough.  
                    Understanding how to think is what separates the average from the elite.  
                </p>
                <h3>Why listen to us?</h3>  
                <p>
                    The founder, JJSOnChain, is an army veteran turned blockchain developer and security researcher. Using the skills he learned in the military, he managed to go from knowing nothing about blockchain to contributing to open-source projects and making valid security findings in public competitions.  
                    <br/><br/>
                    Minds3t is an interactive browser-based game designed to teach you fundamental concepts of smart contract development and security vulnerabilities. The emphasis is on cultivating the mindset required to build secure systems and add meaningful value to the blockchain space.
                </p>
            </div>

            {/* Middle: Logo */}
            <Image src="/logo.png" alt="logo" width={300} height={300} className="logo-section"></Image>

            {/* Right: What You Will Learn */}
            <div className="learn-section">
                <h1>What You Will Learn</h1>
                <p>
                    In this world, answers are not given—they are uncovered.  
                    Knowledge is not a checklist—it is a weapon, forged in fire and earned through continuous research.  
                </p>
                <h3>What You’ll Face</h3>
                <ul>
                    <li>🛠 Building Smart Contracts — Learn the fundamentals of smart contract development</li>
                    <li>🔎 Exploiting the Code — Learn how to think like a hacker.</li>
                    <li>⚡ The Unknown — Some challenges will have no clear path forward. That’s intentional.</li>
                    <li>🧠 Mental Fortitude — Research. Experiment. Fail. Try again. Keep going.</li>
                    <li>🎯 Precision & Adaptability — Become the kind of developer who never accepts surface-level knowledge.</li>
                </ul>

                <h3>Will You Give Up?</h3>
                <p>
                    Many will start this journey. Few will finish.
                    The ones who succeed won’t be the smartest, the fastest, or the most experienced.  
                    They will be the ones who refuse to quit.  
                </p>
            </div>

            {/* 🏆 Special Thanks Section */}
            <div className="thanks-section">
                <h2>⚡ Special Thanks ⚡</h2>
                <p>
                    This project wouldn’t be possible without the incredible individuals who contributed their time, skills, and effort.
                </p>
                <div className="thanks-grid">
                    <div className="thanks-card">JJSOnChain - Founder</div>
                    <div className="thanks-card">Contributor Name 1 - Smart Contract Developer</div>
                    <div className="thanks-card">Contributor Name 2 - UI/UX Designer</div>
                    <div className="thanks-card">Contributor Name 3 - Game Logic & Testing</div>
                    <div className="thanks-card">Open-Source Community - Continuous Support</div>
                </div>
                <p>🚀 Minds3t is built by the community, for the community.</p>
            </div>
        </div>
    );
}