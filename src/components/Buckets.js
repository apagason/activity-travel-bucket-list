import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import { addBuckets } from "../redux/reducer";
import { GoPlus } from "react-icons/go";
import { motion } from "framer-motion";

const mapStateToProps = (state) => {
  return {
    buckets: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addBucket: (obj) => dispatch(addBuckets(obj)),
  };
};

const Buckets = (props) => {
  const [bucket, setBucket] = useState("");

  const handleChange = (e) => {
    setBucket(e.target.value);
  };
  console.log("props from store", props);

  const add = () => {
    if (bucket === "") {
      alert("Input is Empty");
    } else {
      props.addBucket({
        id: Math.floor(Math.random() * 1000),
        item: bucket,
        completed: false,
      });
      setBucket("");
    }
  };

  return (
    <Container className="addBuckets">
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        className="bucket-input"
        value={bucket}
      />

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="add-btn"
        onClick={() => add()}
      >
        <GoPlus />
      </motion.button>
      <br />
    </Container>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Buckets);
