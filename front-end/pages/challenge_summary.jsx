import Navbar from "../components/Navbar";
import ChallengeSummary from "../components/ChallengeSummary";

export default function ChallengeSummaryPage() {
    return (
        <>
            <Navbar />
            <div className="challenge-summary-page">
                <ChallengeSummary 
                    challengeTitle="Challenge 0: Getting Warm"
                    devTime={12}  // Mocked data, will be fetched from DB later
                    hackTime={15} // Mocked data
                />
            </div>
        </>
    );
}