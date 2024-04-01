import React from "react";
import { PseudoCode } from "../models/PseudoCode";

export default function PseudoCodeComponent({
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
        padding: "20px",
        position: "absolute",
        zIndex: 1,
        bottom: "10%",
        right: "10px",
        border: "1px solid white",
      }}
    >
      <div>
        {Object.keys(pseudo_code.pseudo_code).map((key) => {
          return step === parseInt(key) ? (
            <p key={key} style={{ color: "white", background: "green" }}>
              {pseudo_code.pseudo_code[parseInt(key)]}
            </p>
          ) : (
            <p key={key} style={{ color: "white" }}>
              {pseudo_code.pseudo_code[parseInt(key)]}
            </p>
          );
        })}
      </div>
    </div>
  );
}
