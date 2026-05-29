import Header from "../components/common/Header/Header";
import Footer from "../components/common/Footer/Footer";
import NotFound from "../components/common/NotFound/NotFound";

const NotFoundPage = () => (
  <div>
    <Header />
    <NotFound
      title="Page not found"
      description="The page you're looking for doesn't exist."
      linkTo="/"
      linkLabel="Back to Home"
    />
    <Footer />
  </div>
);

export default NotFoundPage;
