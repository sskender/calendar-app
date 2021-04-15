import React, { useState } from "react";
import moment from "moment";
  import "moment/locale/hr";
import styled from "styled-components";

import {CalGrid} from "../CalGrid";
import {CalNav} from "../CalNav";
import {TitleBar} from "../TitleBar";

const ShadoWrap = styled('div')`
  border-bottom: 2px solid #464648;
  border-left: 1px solid #464648;
  border-radius: 8px;
  border-right: 1px solid #464648;
  border-top: 1px solid #737374;
  box-shadow: 0 0 0 1px #1a1a1a, 0 8px 20px 6px #888;
  overflow: hidden;
`;

function App() {
  moment.locale('hr');
  
  const [today, setToday] = useState(moment());
  const startDay = today.clone().startOf("month").startOf("week");
  
  const prevMontHandler = () => setToday(prev => prev.clone().subtract(1, 'month'));
  const currMontHandler = () => setToday(moment());
  const nextMontHandler = () => setToday(prev => prev.clone().add(1, 'month'));
  
  return (
    <ShadoWrap>
      <TitleBar />
      <CalNav
        today={today}
        prevMontHandler={prevMontHandler}
        currMontHandler={currMontHandler}
        nextMontHandler={nextMontHandler}
      />
      <CalGrid startDay={startDay} today={today} />
    </ShadoWrap>
  );
};

export default App;