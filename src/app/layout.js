import 'bootstrap/dist/css/bootstrap.css';
import "./globals.css";
import BootstrapClient from "@/components/BootstrapJS/BootstrapClient";
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import BookButton from '@/components/BookButton/BookButton';

export const metadata = {
  title: "Hotel Runway Inn Best Hotel In Varanasi Near Banaras Airport",
  description: "Hotel Runway Inn",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <link rel="shortcut icon" href="runnway.png" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Barlow&amp;family=Barlow+Condensed&amp;family=Gilda+Display&amp;display=swap" />
        <link rel="stylesheet" href="css/plugins.css" />
        <link rel="stylesheet" href="css/style.css" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-52770125-18"></script>
        {/* <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());

          gtag('config', 'UA-52770125-18');
        </script> */}
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <BookButton />

        {/* <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script> */}
        
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
        {/* <script src="js/jquery-3.6.3.min.js"></script> */}
        {/* <script src="jquery-3.7.1.min.js"></script> */}
        <script src="js/jquery-migrate-3.0.0.min.js"></script>
        <script src="js/modernizr-2.6.2.min.js"></script>
        <script src="js/jquery.isotope.v3.0.2.js"></script>
        <script src="js/pace.js"></script>
        <script src="js/popper.min.js"></script>
        <script src="js/scrollIt.min.js"></script>
        <script src="js/jquery.waypoints.min.js"></script>
        <script src="js/owl.carousel.min.js" async></script>
        <script src="js/jquery.stellar.min.js"></script>
        <script src="js/YouTubePopUp.js"></script>
        <script src="js/select2.js"></script>
        <script src="js/datepicker.js"></script>
        {/* <script src="js/bootstrap.min.js"></script> */}
        <script src="js/imagesloaded.pkgd.min.js"></script>
        <script src="js/jquery.magnific-popup.js"></script>
        <script src="js/smooth-scroll.min.js" async></script>
        <script src="js/custom.js" async></script>
        <script src="js/script.js" async></script>
      </body>
    </html>
  );
}
