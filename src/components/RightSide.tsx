import React from "react";
import styled from "styled-components";
import ExplainBox from "./ExplainBox";
import PseudoCodeComponent from "./PseudoCode";
import { PseudoCode } from "../models/PseudoCode";

const RightSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  position: absolute;
  z-index: 1;
  top: 10%;
  right: 10px;
  border: 1px solid white;
  width: 20%;

  @media (max-width: 768px) {
    position: static;
    width: 100%;
    margin-top: 20px;
    padding: 0;
    align-items: center; /* Center content on mobile */
  }
`;

export default function RightSide({
  step,
  pseudo_code,
  complexity,
  text,
}: {
  step: number;
  pseudo_code: PseudoCode;
  complexity: string;
  text: string;
}) {
  return (
    <RightSideContainer>
      <ExplainBox text={text} />
      <p style={{ fontWeight: "bold" }}>
        TIME COMPLEXITY: <span style={{ fontWeight: "normal" }}>{complexity}</span>
        <a
          target="_blank"
          style={{
            color: "white",
            fontWeight: "normal",
            fontSize: "13px",
            display: "block",
          }}
          href="https://www.geeksforgeeks.org/time-complexity-and-space-complexity/"
        >
          What is time complexity?
        </a>
      </p>
      <p style={{ fontWeight: "bold" }}>PSEUDO CODE:</p>
      <PseudoCodeComponent step={step} pseudo_code={pseudo_code} />
    </RightSideContainer>
  );
}
