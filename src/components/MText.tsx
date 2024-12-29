import React from "react";
import classes from "../styles/MText.module.css";
import { createClassNames } from "../utils/string-utils"
type MTextTags = "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
type MTextSizes = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl"
const defaultTextSize: Record<MTextTags, MTextSizes> = {
    span: "md",
    p: "md",
    h1: "5xl",
    h2: "4xl",
    h3: "3xl",
    h4: "2xl",
    h5: "xl",
    h6: "lg"
}
type MTextProps = {
    text: string
    tag?: MTextTags
    size?: MTextSizes
}
function MText(props: MTextProps) {
    const Tag = props.tag ?? "p";
    const size = props.size ?? defaultTextSize[Tag];
    const sizeAttribute = "text-size-" + size;
    return (
        <Tag 
            className={createClassNames("m-component", classes["m-text"])} 
            style={{
                fontSize: `var(--${sizeAttribute})`
            } as React.CSSProperties}
            >
            {props.text}
        </Tag>
    )
}

export default MText