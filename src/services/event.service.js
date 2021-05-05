import database from "./firebase";

const COLLECTION_NAME = "events";

// Get all events for a given day
const getEvents = async (dayItem) => {
  const dbQuery = database
    .collection(COLLECTION_NAME)
    .where("date", "==", dayItem)
    .orderBy("start_time");

  try {
    const querySnaphost = await dbQuery.get();

    const eventsList = [];
    querySnaphost.forEach((doc) => {
      const id = doc.id;
      const data = doc.data();

      const eventItem = {
        id,
        title: data.title,
        date: data.date,
        startTime: data.start_time,
        endTime: data.end_time,
      };

      eventsList.push(eventItem);
    });

    return eventsList;
  } catch (err) {
    return [];
  }
};

// Delete event
const deleteEvent = async (eventItem) => {
  const eventId = eventItem.id;

  try {
    const eventRef = database.collection(COLLECTION_NAME).doc(eventId);
    await eventRef.delete();
  } catch (err) {}
};

const insertNewEvent = async (eventItem) => {
  const newEvent = {
    title: eventItem.title,
    date: eventItem.date,
    start_time: eventItem.startTime,
    end_time: eventItem.endTime,
  };

  try {
    await database.collection(COLLECTION_NAME).add(newEvent);
  } catch (err) {}
};

const updateEvent = async (eventItem) => {
  const eventId = eventItem.id;
  const updatedEvent = {
    title: eventItem.title,
    date: eventItem.date,
    start_time: eventItem.startTime,
    end_time: eventItem.endTime,
  };

  try {
    const eventRef = database.collection(COLLECTION_NAME).doc(eventId);
    await eventRef.update(updatedEvent);
  } catch (err) {}
};

// Save event - create new event or update existing one
const saveEvent = async (eventItem) => {
  if (eventItem.id === null) {
    await insertNewEvent(eventItem);
  } else {
    await updateEvent(eventItem);
  }
};

export { getEvents, deleteEvent, saveEvent };
