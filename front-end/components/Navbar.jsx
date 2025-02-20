import Link from "next/link";
import WalletButton from "./WalletButton";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="cyberpunk-navbar">
            {/* Logo Section */}
            <div className="navbar-left">
                <Link href="/">
                    <Image src="/logo.png" alt="Minds3t Logo" width={50} height={50} />
                </Link>
            </div>

            {/* Navigation Links */}
            <div className="navbar-center">
                <Link href="/challenges" className="nav-link">Challenges</Link>
                <Link href="/leaderboard" className="nav-link">Leaderboard</Link>
                <Link href="/progress" className="nav-link">Progress</Link>
                <Link href="/docs" className="nav-link">Docs</Link>
                <Link href="/contact" className="nav-link">Contact</Link>
            </div>

            {/* Wallet Button */}
            <div className="navbar-right">
                <WalletButton />
            </div>
        </nav>
    );
}