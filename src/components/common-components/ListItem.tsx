import React from "react";
import styled, { css } from "styled-components";
import { themes } from "../../constants/themes";

interface IListItemProps {
  margin?: string;
  padding?: string;
  backgroundColor?: string;
}

export const ListItem = styled.li<IListItemProps>`
  margin: ${p => p.margin};
  padding: ${p => p.padding};
  
  background-color: ${p => p.backgroundColor};
`