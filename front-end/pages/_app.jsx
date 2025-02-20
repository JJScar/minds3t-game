import "../styles/globals.css";  // Ensure global styles are included
import Navbar from "../components/Navbar";

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Navbar />  {/* Navbar always visible */}
            <Component {...pageProps} />
        </>
    );
}