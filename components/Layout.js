/*
  ./components/Layout.js
  Layout component
*/
// component import
import Header from "./Header";
import Nav from "./Nav";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD"
};

const Layout = props => (
  <div style={layoutStyle}>
    <Header />
    <Nav />
    {props.children}
  </div>
);

export default Layout;
