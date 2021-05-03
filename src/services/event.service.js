import database from "./firebase";

const COLLECTION_NAME = "events";

// Get all events for a given day
const getEvents = async (dayItem) => {
  const dbQuery = database
    .collection(COLLECTION_NAME)
    .where("date", "==", dayItem);

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
};

// TODO wrap try catch block

// Delete event
const deleteEvent = async (eventItem) => {
  const eventId = eventItem.id;

  const eventRef = database.collection(COLLECTION_NAME).doc(eventId);
  await eventRef.delete();
};

const insertNewEvent = async (eventItem) => {
  const newEvent = {
    title: eventItem.title,
    date: eventItem.date,
    start_time: eventItem.startTime,
    end_time: eventItem.endTime,
  };

  await database.collection(COLLECTION_NAME).add(newEvent);
};

const updateEvent = async (eventItem) => {
  const eventId = eventItem.id;
  const updatedEvent = {
    title: eventItem.title,
    date: eventItem.date,
    start_time: eventItem.startTime,
    end_time: eventItem.endTime,
  };

  const eventRef = database.collection(COLLECTION_NAME).doc(eventId);
  await eventRef.update(updatedEvent);
};

// Save event
const saveEvent = async (eventItem) => {
  // TODO check and verify data
  console.log("saving event:");
  console.log(eventItem);

  // create new or update existing
  if (eventItem.id === null) {
    // create new
    await insertNewEvent(eventItem);
    console.log("it should be inserted");
  } else {
    await updateEvent(eventItem);
    console.log("it should be updated");
  }
};

export { getEvents, deleteEvent, saveEvent };
