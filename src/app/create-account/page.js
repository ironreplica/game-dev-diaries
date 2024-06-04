import CreateAccount from "../components/CreateAccount";
import Navbar from "../components/Navbar";
import { connect } from "../../dbConfig/dbConfig.js";
// require("dotenv").config();

export default function CreateAccountPage() {
  connect();
  require("dotenv").config();

  return (
    <main>
      <Navbar />
      <CreateAccount />
    </main>
  );
}
