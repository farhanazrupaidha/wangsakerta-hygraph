import Alert from "./alert";
import Footer from "./footer";
import TopNav from "./topnav"

export default function Layout({ preview, children }) {
  return (
    <>
      <TopNav />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
