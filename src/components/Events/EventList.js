import React from "react";

import { EventItem } from "./EventItem";

/**
 * TODO fetching events from server for this day (dayItem.format("D-M-yyyy"))
 * TODO parsing each event from fetched list (as EventItem)
 **/

const allEvents = [
  { id: 1, title: "Event 1", time: "12.15 AM" },
  { id: 2, title: "Event 2.1", time: "4.30 PM" },
];

const generateEvent = () => {
  const flag = Math.trunc((Math.random() * 10) % 2);
  if (flag) {
    return {};
  } else {
    const hour = Math.trunc((Math.random() * 12) % 12);
    const minute = Math.trunc((Math.random() * 60) % 60);
    const eventNumber = Math.trunc((Math.random() * 1000) % 100);
    return {
      id: 1,
      title: `Event ${eventNumber}`,
      time: `${hour}.${minute} AM`,
    };
  }
};

const EventList = ({ dayItem }) => {
  {
    /*
    return (allEvents.map(event => {
        return <EventItem event={event}/>
    }))
    */
  }
  return <EventItem event={generateEvent()} />;
};

export { EventList };

