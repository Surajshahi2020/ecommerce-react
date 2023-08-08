import Header from "../components/header";
import MainContent from "../components/maincontent";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";

const HomePage = () => {
    return (
        <div>
            <Header />
            <Sidebar />
            <MainContent />
            <Footer />
        </div>
    );
};
export default HomePage;
