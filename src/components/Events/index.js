import React from "react";
import styled from "styled-components";

import moment from "moment";

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

// TODO remove dummy
const allEvents = [
  {
    id: 1,
    title: "Event 1",
    time: "12.15 AM",
    startTime: "12:15",
    endTime: "16:00",
  },
  {
    id: 2,
    title: "Event 2",
    time: "13.45 AM",
    startTime: "13:45",
    endTime: "14:30",
  },
];

const Events = ({ dayItem, today, editEventHandler }) => {
  const isCurrDay = (day) => moment().isSame(day, "day");
  const isSelMonth = (day) => today.isSame(day, "month");

  return allEvents.map((eventItem) => {
    return (
      <EventWrap
        onClick={() => {
          editEventHandler(eventItem);
        }}
        thismonth={isSelMonth(dayItem) || ""}
        thisday={isCurrDay(dayItem) || ""}
      >
        <EventTitle>{eventItem.title}</EventTitle>
        <EventTime>{eventItem.startTime}</EventTime>
      </EventWrap>
    );
  });
};

export { Events };
