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

export { getEvents };
