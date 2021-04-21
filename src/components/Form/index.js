import React from "react";
import styled from "styled-components";

import { FaTrashAlt } from "react-icons/fa";

const FormWrap = styled.div`
  text-align: center;
  background-color: #272829;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-bottom: 2px solid #464648;
  border-left: 2px solid #464648;
  border-radius: 8px;
  border-right: 2px solid #464648;
  border-top: 2px solid #737374;
  box-shadow: 0 0 0 1px #1a1a1a, 0px 0px 25px 10px #888;
  overflow: hidden;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 50px;
  padding-right: 50px;
  z-index: 999;
`;

const FormTitle = styled.div`
  color: #e6e6e6;
  margin-top: 10px;
  margin-bottom: 15px;
  font-size: 1.4rem;
  font-weight: bold;
`;

const SubmitButton = styled.button`
  color: #e6e6e6;
  background-color: #449246;
  border: unset;
  border-radius: 4px;
  font-size: 0.95rem;
  font-weight: bold;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.15rem;
  padding-bottom: 0.15rem;
  margin-top: 1rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  width: 6rem;
`;

const CancelButton = styled(SubmitButton)`
  background-color: #aa2c2c;
`;

const InputLabel = styled.label`
  color: #e6e6e6;
  font-size: 1rem;
`;

const TitleInput = styled.input`
  background: #565759;
  color: #e6e6e6;
  font-size: 1.1rem;
  font-style: italic;
  width: 15rem;
  border-style: solid;
  border-width: 2px;
  border-radius: 4px;
  margin-top: 5px;
`;

const TimeInput = styled(TitleInput)`
  width: auto;
  font-size: 1.2rem;
  margin-left: 0.25rem;
  margin-right: 0.25rem;
`;

const TrashButton = styled.button`
  color: #e6e6e6;
  background-color: #aa2c2c;
  border: unset;
  border-radius: 4px;
  margin-left: 2rem;
  padding-top: 0.25rem;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  font-size: 1.25rem;
`;

const Form = ({
  eventItem,
  saveButtonHandler,
  deleteButtonHandler,
  quitButtonHandler,
}) => {
  const [title, setTitle] = React.useState(eventItem?.title || "");
  const [startTime, setStartTime] = React.useState(
    eventItem?.startTime || "09:00"
  );
  const [endTime, setEndTime] = React.useState(eventItem?.endTime || "10:30");

  const handleChange = (event) => {
    const name = event.target.name;
    if (name === "title") {
      const title = event.target.value;
      setTitle(title);
    } else if (name === "start-time") {
      const startTime = event.target.value;
      setStartTime(startTime);
    } else {
      const endTime = event.target.value;
      setEndTime(endTime);
    }
  };

  const handleDelete = (event) => {
    event.preventDefault();
    const eventId = eventItem.id;
    deleteButtonHandler(eventId);
    quitButtonHandler();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedEvent = {
      id: eventItem?.id || null,
      title,
      startTime,
      endTime,
    };
    // TODO validate data before sending
    saveButtonHandler(updatedEvent);
    quitButtonHandler();
  };

  const handleQuit = (event) => {
    event.preventDefault();
    quitButtonHandler();
  };

  return (
    <FormWrap>
      <FormTitle>
        {eventItem == null ? "Novi događaj" : "Uredi događaj"}
        {eventItem != null ? (
          <TrashButton name="delete" onClick={handleDelete}>
            <FaTrashAlt />
          </TrashButton>
        ) : null}
      </FormTitle>
      <form onSubmit={handleSubmit}>
        <div>
          <InputLabel>Naziv događaja:</InputLabel>
          <br />
          <TitleInput
            type="text"
            name="title"
            placeholder="Insert event title"
            value={title}
            onChange={handleChange}
          ></TitleInput>
        </div>
        <br />
        <div>
          <InputLabel>Početak i kraj:</InputLabel>
          <br />
          <TimeInput
            type="time"
            name="start-time"
            value={startTime}
            onChange={handleChange}
          ></TimeInput>
          <TimeInput
            type="time"
            name="end-time"
            value={endTime}
            onChange={handleChange}
          ></TimeInput>
        </div>
        <br />
        <div>
          <SubmitButton type="submit" onClick={handleSubmit} name="save">
            Spremi
          </SubmitButton>
          <CancelButton onClick={handleQuit} name="quit">
            Odustani
          </CancelButton>
        </div>
      </form>
    </FormWrap>
  );
};

export { Form };
