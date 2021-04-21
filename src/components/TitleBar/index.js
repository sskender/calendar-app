import React from "react";
import styled from "styled-components";

const DivWrap = styled('div')`
  background-color: #2a2b2d;
  height: 36px;
`;

const ButtonsWrap = styled('div')`
  align-items: center;
  display: flex;
`;

const ButtonWrap = styled('button')`
  background-color: #565759;
  border: unset;
  border-radius: 4px;
  color: #e6e6e6;
  font-weight: bold;
  height: 20px;
  margin-right: 2px;
  outline: unset;
`;

const NewBtn = styled(ButtonWrap)`
  background-color: #449246;
  font-weight: bold;
  margin-bottom: 9px;
  margin-left: 9px;
  margin-top: 9px;
  padding-left: 16px;
  padding-right: 16px;
`;

const ExitBtn = styled(ButtonWrap)`
  background-color: #aa2c2c;
  cursor: not-allowed;
  font-weight: bold;
  margin-bottom: 9px;
  margin-left: 82%;
  margin-top: 9px;
  padding-left: 16px;
  padding-right: 16px;
`;

const TitleBar = ({newEventHandler}) => (
  <DivWrap>
	<NewBtn onClick={newEventHandler}> Novi događaj </NewBtn>
	<ExitBtn /*onClick={ exitBtnHandler}*/> X </ExitBtn>
  </DivWrap>
);

export { TitleBar };