import React from "react";
import styled from "styled-components";

import moment from "moment";

import { Form } from "./Form";

const EventWrap = styled.div`
  background-color: ${(props) => (props.thisday ? "#507AE6" : "#449246")};
  border-radius: 0.25rem;
  color: white;
  border-style: solid;
  border: 0.1rem;
  border-color: #272829;
  margin-left: 0.25rem;
  margin-right: 0.25rem;
  margin-top: 0.1rem;
  margin-bottom: 0.1rem;
  position: relative;
  opacity: ${(props) => (props.thismonth ? "1.0" : "0.6")};
`;

const EventTitle = styled.div`
  font-size: 0.85rem;
  padding-left: 0.3rem;
`;

const EventTime = styled.div`
  font-size: 0.55rem;
  position: absolute;
  right: 0.2rem;
  top: 0.025rem;
`;

const EventItem = ({ event, dayItem, today }) => {
  const [isEditingOpen, setIsEditingOpen] = React.useState(false);

  const toggleEditingPopup = () => {
    setIsEditingOpen(!isEditingOpen);
  };

  const isCurrDay = (day) => moment().isSame(day, "day");
  const isSelMonth = (day) => today.isSame(day, "month");

  const updateEvent = (event) => {
    toggleEditingPopup();
    console.log(`Event modified: ${event}`);
    console.log(event);
    // TODO connect with service
  };

  const deleteEvent = (eventId) => {
    toggleEditingPopup();
    console.log(`deleting event with id: ${eventId}`);
    // TODO connect with service
  };

  return (
    <>
      <EventWrap
        onClick={toggleEditingPopup}
        thismonth={isSelMonth(dayItem) || ""}
        thisday={isCurrDay(dayItem) || ""}
      >
        <EventTitle>{event.title}</EventTitle>
        <EventTime>{event.startTime}</EventTime>
      </EventWrap>
      {isEditingOpen ? (
        <Form
          eventItem={event}
          submitEvent={updateEvent}
          deleteEvent={deleteEvent}
          closeForm={toggleEditingPopup}
        />
      ) : null}
    </>
  );
};

export { EventItem };
