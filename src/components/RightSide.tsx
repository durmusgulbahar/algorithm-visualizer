import React from "react";
import ExplainBox from "./ExplainBox";
import PseudoCodeComponent from "./PseudoCode";
import { PseudoCode } from "../models/PseudoCode";
export default function RightSide({
  step,
  pseudo_code,
}: {
  step: number;
  pseudo_code: PseudoCode;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        padding: "20px",
        position: "absolute",
        zIndex: 1,
        top: "10%",
        right: "10px",
        border: "1px solid white",
        width: "20%",
      }}
    >
      <ExplainBox />
      <p style={{ fontWeight: "bold" }}>
        TIME COMPLEXITY: <span style={{ fontWeight: "normal" }}>O(N)</span>
        <a target="_blank" style={
            {
                color: "white",
                fontWeight: "normal",
                fontSize: "13px",
                display: "block",
            }
        } href="https://www.geeksforgeeks.org/time-complexity-and-space-complexity/">What is time complexity?</a>
      </p>
      <p style={{ fontWeight: "bold" }}>PSEUDO CODE:</p>
      <PseudoCodeComponent step={step} pseudo_code={pseudo_code} />
    </div>
  );
}
