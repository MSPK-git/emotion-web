import React,{ ReactElement } from "react";
import "./Table.css";
import { PartyItem } from "../../states/PartyItemState";

export type TableProps = {
  items: PartyItem[];
};

export default function Table({ items }: TableProps): ReactElement {
  return (
    <div className="table-container">
      <div className="table-row heading">
        <div className="row-item">Wer?</div>
        <div className="row-item">Was?</div>
      </div>
      {items.map((item) => (
        <div className="table-row">
          <div className="row-item">{item.name}</div>
          <div className="row-item">{item.item}</div>
        </div>
      ))}
    </div>
  );
}
