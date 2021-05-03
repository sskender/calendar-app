import React, { useState } from "react";
import moment from "moment";
  import "moment/locale/hr";
import styled from "styled-components";

import {CalGrid} from "../CalGrid";
import {CalNav} from "../CalNav";
import {TitleBar} from "../TitleBar";
import {Form} from "../Form";

import * as EventService from "../../services/event.service";

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
  
  // Show and hide edit form
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Current event that will be shown in the form
  const [eventItem, setEventItem] = useState(null);

  // Keep track of month and current day
  const [today, setToday] = useState(moment());
  const startDay = today.clone().startOf("month").startOf("week");
  
  // Navigate calendar months
  const prevMontHandler = () => setToday(prev => prev.clone().subtract(1, 'month'));
  const currMontHandler = () => setToday(moment());
  const nextMontHandler = () => setToday(prev => prev.clone().add(1, 'month'));
  
  // Save reference of event for editing form and show form
  const handleFormOpen = (eventItem) => {
    if (isFormOpen) { return; }
    setEventItem(eventItem);
    setIsFormOpen(true);
  };

  // Clear event from editing form and hide form
  const handleFormClose = () => {
    setEventItem(null);
    setIsFormOpen(false);
  };

  return (
    <ShadoWrap>
      <TitleBar newEventHandler={() => { handleFormOpen(null); }} />
      <CalNav
        today={today}
        prevMontHandler={prevMontHandler}
        currMontHandler={currMontHandler}
        nextMontHandler={nextMontHandler}
      />
      <CalGrid startDay={startDay} today={today} editEventHandler={handleFormOpen} />
      {isFormOpen ? (
        <Form
          eventItem={eventItem}
          saveButtonHandler={EventService.saveEvent}
          deleteButtonHandler={EventService.deleteEvent}
          quitButtonHandler={handleFormClose}
        />
      ) : null}
    </ShadoWrap>
  );
};

export default App;