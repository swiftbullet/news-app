// import logo from './logo.svg';
import "./App.css";
import { Provider } from "react-redux";
import store from "./store/store";
import Header from "./containers/Header/";
import Content from "./containers/Content/";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <Content />
      </Provider>
    </div>
  );
}

export default App;
