import CreateAccount from "../components/CreateAccount";
import Navbar from "../components/Navbar";
// import { connect } from "../../dbConfig/dbConfig.js";
require("dotenv").config();

//* Sign Up Route
export default function CreateAccountPage() {
  return (
    <main>
      <Navbar />
      <CreateAccount />
    </main>
  );
}
