import { Provider } from "react-redux";
import "tailwindcss/tailwind.css";
import { store } from "../app/store";
import "../styles/global.css";
import "../styles/products.css";
import "../styles/checkout.css";
import { signIn, signOut, useSession } from "next-auth/client";
import { Provider as AuthPro } from "next-auth/client";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";

const progress = new ProgressBar({
  size: 5,
  color: "#191919",
  className: "z-50",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }) {
  const [session] = useSession();
  return (
    <AuthPro session={pageProps.session}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </AuthPro>
  );
}

export default MyApp;
