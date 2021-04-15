import React from "react";
import styled from "styled-components";

const DivWrap = styled('div')`
  background-color: #1e1f21;
  color: #dcdddd;
  display: flex;
  justify-content: space-between;
  padding: 16px;
`;

const TextWrap = styled('span')`
  font-size: 32px;
  font-weight: bold;
`;

const TitleWrap = styled(TextWrap)`
  font-weight: bold;
  margin-right: 8px;
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
  cursor: pointer;
  font-weight: bold;
  height: 20px;
  margin-right: 2px;
  outline: unset;
`;

const TodayBtn = styled(ButtonWrap)`
  font-weight: bold;
  padding-left: 16px;
  padding-right: 16px;
`;

const CalNav = ({today, prevMontHandler, currMontHandler, nextMontHandler}) => (
  <DivWrap>
    <div>
      <TitleWrap>{today.format('MMMM')}</TitleWrap>
      <TextWrap>{today.format('YYYY')}</TextWrap>
    </div>
    <ButtonsWrap>
      <ButtonWrap onClick={prevMontHandler}> &lt; </ButtonWrap>
      <TodayBtn onClick={currMontHandler}> Danas </TodayBtn>
      <ButtonWrap onClick={nextMontHandler}> &gt; </ButtonWrap>
    </ButtonsWrap>
  </DivWrap>
);

export { CalNav };