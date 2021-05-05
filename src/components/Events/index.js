import React, { useState, useEffect } from "react";
import styled from "styled-components";

import moment from "moment";

import * as service from "../../services/event.service";

const EventWrap = styled.div`
  background-color: ${(props) => (props.thisday ? "#507AE6" : "#449246")};
  border-radius: 0.25rem;
  color: white;
  cursor: pointer;
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
  font-size: 0.9rem;
  padding-left: 0.3rem;
`;

const EventTime = styled.div`
  font-size: 0.6rem;
  position: absolute;
  right: 0.2rem;
  top: 0.025rem;
`;

const Events = ({ dayItem, today, editEventHandler }) => {
  const [eventsList, setEventsList] = useState([]);
  const maxTitleSize = 18;

  const isCurrDay = (day) => moment().isSame(day, "day");
  const isSelMonth = (day) => today.isSame(day, "month");

  useEffect(() => {
    const fetchEvents = async (dayItem) => {
      const dayItemFormat = dayItem.format("YYYY-MM-DD");
      const events = await service.getEvents(dayItemFormat);
      setEventsList(events);
    };
    fetchEvents(dayItem);
  }, [dayItem]);

  return eventsList.map((eventItem) => {
    const displayTitle =
      eventItem.title.length <= maxTitleSize
        ? eventItem.title
        : eventItem.title.substring(0, maxTitleSize) + "...";

    return (
      <EventWrap
        onClick={() => {
          editEventHandler(eventItem);
        }}
        thismonth={isSelMonth(dayItem) || ""}
        thisday={isCurrDay(dayItem) || ""}
      >
        <EventTitle title={eventItem.title}>{displayTitle}</EventTitle>
        <EventTime>{eventItem.startTime}</EventTime>
      </EventWrap>
    );
  });
};

export { Events };
