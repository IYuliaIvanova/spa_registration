import React from "react";
import styled from "styled-components";

interface IUnorderedListProps {
  display?: string;
  margin?: string;
  padding?: string;
  justifyContent?: string;
  rowGap?: string;
  columnGap?: string;
}

export const UnorderedList = styled.ul<IUnorderedListProps>`
  display: ${p => p.display};

  justify-content: ${p => p.justifyContent};
  row-gap: ${p => p.rowGap}px;
  column-gap: ${p => p.columnGap}px;

  list-style-type: none;
`