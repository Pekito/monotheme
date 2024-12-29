import React from "react";
import classes from "../styles/MTree.module.css";
import { createClassNames } from "../utils/string-utils";

type MTreeProps = {
  content: React.ReactNode;
  nodes?: Array<React.ReactElement>; // Ensure nodes are valid React elements
};

function MTree(props: MTreeProps) {
  const nodes = props.nodes ?? [];

  const getNodeKey = (node: React.ReactElement) => node.key ?? undefined;

  const nodeItems = nodes.length > 0 && (
    <ul>
      {nodes.map((node) => (
        <li key={getNodeKey(node)}>{node}</li>
      ))}
    </ul>
  );

  return (
    <ul className={createClassNames("m-component", classes["m-tree"])}>
      {props.content}
      {nodeItems}
    </ul>
  );
}

export default MTree;
