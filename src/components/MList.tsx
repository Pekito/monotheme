import React from "react";
import classes from "../styles/MList.module.css";
import { classNamesFromObj} from "../utils/string-utils";
type MListProps = {
    tag: "ul" | "ol";
    children: Array<React.ReactElement>
}
function MList(props: MListProps) {
    const isUnordered = props.tag === "ul";
    return (
        <props.tag className={classNamesFromObj({
            "m-component": true,
            [classes["m-list"]]: true,
            [classes["m-list--unordered"]]: isUnordered
        })}>
            {props.children.map(child => <li key={child.key}>{child}</li>)}
        </props.tag>
    )
}

export default MList;