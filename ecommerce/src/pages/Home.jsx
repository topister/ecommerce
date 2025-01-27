import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div
      style={{
        height: "100vh",
        padding: "20px",
        backgroundColor: "#232323",
        color: "white",
      }}
    >
      {" "}
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>Home</h1>
      <ul style={{ listStyle: "none", padding: "0" }}>
        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/ecommercehome"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            Home
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/signup"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            SignUp
          </Link>
        </li>

        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/login"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            LogIn{" "}
          </Link>{" "}
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/account dropdownwithaccount"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            {" "}
            AccountDropdownWithaccount
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/categorydropdown"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            CategoryDropdown
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/wishlist"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            Wishlist
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/cart" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Cart
          </Link>
        </li>

        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/checkout"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            {" "}
            CheckOut{" "}
          </Link>{" "}
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/account"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            Account{" "}
          </Link>{" "}
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/about"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            About{" "}
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/contact"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            {" "}
            Contact
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/error"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            Error
          </Link>
        </li>

        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/productdetails"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            ProductDetails
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
