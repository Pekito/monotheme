import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import classes from "../styles/MButton.module.css";
import { createClassNames } from "../utils/string-utils";

type MButtonProps = {
    label: string;
    htmlTag?: "button" | "div" | "a";
  } & AnchorHTMLAttributes<unknown> & ButtonHTMLAttributes<unknown>;

  function MButton(props: MButtonProps) {
    const HtmlTag = props.htmlTag ?? "div";
    const {htmlTag, ...inheritedProps} = props;
    return (
        <HtmlTag
            {...inheritedProps}
            href={props.href}
            className={
            createClassNames(
                "m-component", 
                classes["m-button"]
            )}
            >
            {props.label}
        </HtmlTag>
    )

  }
  
  export default MButton;