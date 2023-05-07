// import '@/styles/globals.css'

import { Provider, useDispatch, useSelector, useStore } from "react-redux";
import store from "../store/store";

export default function App({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
