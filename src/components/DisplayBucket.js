import React, { useState } from "react";
import { connect } from "react-redux";
import {
  addBuckets,
  completeBuckets,
  removeBuckets,
  updateBuckets,
} from "../redux/reducer";
import BucketItem from "./BucketItem";
import { AnimatePresence, motion } from "framer-motion";

const mapStateToProps = (state) => {
  return {
    buckets: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addBucket: (obj) => dispatch(addBuckets(obj)),
    removeBucket: (id) => dispatch(removeBuckets(id)),
    updateBucket: (obj) => dispatch(updateBuckets(obj)),
    completeBucket: (id) => dispatch(completeBuckets(id)),
  };
};

const DisplayBucket = (props) => {
  const [sort, setSort] = useState("active");
  return (
    <div className="displaybuckets">
      <div className="buttons">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSort("active")}
        >
          Active
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSort("completed")}
        >
          Completed
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSort("all")}
        >
          All
        </motion.button>
      </div>
      <ul>
        <AnimatePresence>
          {props.buckets.length > 0 && sort === "active"
            ? props.buckets.map((item) => {
                return (
                  item.completed === false && (
                    <BucketItem
                      key={item.id}
                      item={item}
                      removeBucket={props.removeBucket}
                      updateBucket={props.updateBucket}
                      completeBucket={props.completeBucket}
                    />
                  )
                );
              })
            : null}
          {/* for completed items */}
          {props.buckets.length > 0 && sort === "completed"
            ? props.buckets.map((item) => {
                return (
                  item.completed === true && (
                    <BucketItem
                      key={item.id}
                      item={item}
                      removeBucket={props.removeBucket}
                      updateBucket={props.updateBucket}
                      completeBucket={props.completeBucket}
                    />
                  )
                );
              })
            : null}
          {/* for all items */}
          {props.buckets.length > 0 && sort === "all"
            ? props.buckets.map((item) => {
                return (
                  <BucketItem
                    key={item.id}
                    item={item}
                    removebucket={props.removebucket}
                    updatebucket={props.updatebucket}
                    completebucket={props.completebucket}
                  />
                );
              })
            : null}
        </AnimatePresence>
      </ul>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayBucket);
