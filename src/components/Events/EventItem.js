import React from "react";
import styled from "styled-components";

/**
 * TODO onClick open event form for editing
 * TODO nicely parse event time variable
 **/

const EventWrap = styled.div`
  background-color: #449246;
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

const EventItem = ({ event }) => {
  return (
    <EventWrap>
      <EventTitle>{event.title}</EventTitle>
      <EventTime>{event.time}</EventTime>
    </EventWrap>
  );
};

export { EventItem };
