import "./css/main.css";
import DisplayBucket from "./components/DisplayBucket";
import Buckets from "./components/Buckets";

import { motion } from "framer-motion";
function App() {
  return (
    <div className="App">
      <motion.h1
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
        Travel Bucket List
      </motion.h1>
      <motion.div
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 1 }}
      >
        <Buckets />
        <DisplayBucket />
      </motion.div>
    </div>
  );
}

export default App;
