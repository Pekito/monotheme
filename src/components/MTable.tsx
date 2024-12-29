import React from "react";
import styles from "../styles/MTable.module.css"
import { createClassNames } from "../utils/string-utils";
type MTableProps = {
  children?: React.ReactNode;
};
type MTableCellProps<T> = MTableProps & T & {
  expand?: boolean
  as?: "heading" | "data"
}

type MTableCell = MTableCellProps<React.DetailedHTMLProps<React.TdHTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement>>
const MTable: React.FC<MTableProps> = ({ children }) => (
  <table className={createClassNames(styles["m-table"])}>{children}</table>
);

const MTableHeader: React.FC<MTableProps> = ({ children }) => (
  <thead className={createClassNames(styles["m-table-header"])}>{children}</thead>
);

const MTableBody: React.FC<MTableProps> = ({ children }) => (
  <tbody className={createClassNames(styles["m-table-body"])}>{children}</tbody>
);

const MTableRow: React.FC<MTableProps> = ({ children }) => (
  <tr className={createClassNames(styles["m-table-row"])}>{children}</tr>
);

const getExpandClass = (expand?: boolean ) => {
  if(expand === undefined) return "";
  else if (expand) return "m-table-cell--expand"
  else return "";
}
const MTableCell: React.FC<MTableCell> = (props) => {
  const as = props.as ?? "data";
  const Tag = as === "heading" ? "th" : "td";
  const expandClass = getExpandClass(props.expand);
  return (
  <Tag 
    className={
      createClassNames(
      styles["m-table-cell"],
      styles[expandClass]
    )} 
    colSpan={props.colSpan}
    >
      {props.children}
    </Tag>
  )
};

const MTableFooter: React.FC<MTableProps> = ({ children }) => (
  <tfoot className={createClassNames(styles["m-table-footer"])}>{children}</tfoot>
);

export { MTable, MTableHeader, MTableBody, MTableRow, MTableCell, MTableFooter};
