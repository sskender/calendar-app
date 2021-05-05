import React from "react";
import styled from "styled-components";

import moment from "moment";

const FormWrap = styled.div`
  text-align: center;
  background-color: #272829;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-bottom: 2.5px solid #dcdddd;
  border-left: 2px solid #dcdddd;
  border-right: 2px solid #dcdddd;
  border-top: 2px solid #dcdddd;
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
  cursor: pointer;
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

const DeleteButton = styled(SubmitButton)`
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
  width: 15rem;
  border-style: solid;
  border-width: 2px;
  border-radius: 4px;
  margin-top: 5px;
`;

const DateInput = styled(TitleInput)`
  width: auto;
  font-size: 1.2rem;
`;

const TimeInput = styled(TitleInput)`
  width: auto;
  font-size: 1.2rem;
  margin-left: 0.25rem;
  margin-right: 0.25rem;
`;

const ExitBtn = styled(DeleteButton)`
  width: auto;
  height: 20px;
  cursor: pointer;
  position: fixed;
  top: 0;
  right: 0;
  margin-left: 5px;
  margin-top: 5px;
  outline: unset;
`;

const Form = ({
  eventItem,
  saveButtonHandler,
  deleteButtonHandler,
  quitButtonHandler,
}) => {
  const [title, setTitle] = React.useState(eventItem?.title || "");
  const [date, setDate] = React.useState(
    eventItem?.date || moment().format("YYYY-MM-DD")
  );
  const [startTime, setStartTime] = React.useState(
    eventItem?.startTime || "09:00"
  );
  const [endTime, setEndTime] = React.useState(eventItem?.endTime || "10:30");

  const handleChange = (event) => {
    const name = event.target.name;
    if (name === "title") {
      const title = event.target.value;
      setTitle(title);
    } else if (name === "date") {
      const date = event.target.value;
      setDate(date);
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
    deleteButtonHandler(eventItem);
    quitButtonHandler();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedEvent = {
      id: eventItem?.id || null,
      title,
      date,
      startTime,
      endTime,
    };
    saveButtonHandler(updatedEvent);
    quitButtonHandler();
  };

  const handleQuit = (event) => {
    event.preventDefault();
    quitButtonHandler();
  };

  return (
    <FormWrap>
      <ExitBtn onClick={handleQuit}>X</ExitBtn>
      <FormTitle>
        {eventItem == null ? "Novi događaj" : "Uredi događaj"}
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
          <InputLabel>Datum:</InputLabel>
          <br />
          <DateInput
            type="date"
            name="date"
            value={date}
            onChange={handleChange}
          ></DateInput>
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
          {eventItem !== null ? (
            <DeleteButton onClick={handleDelete} name="delete">
              Obriši
            </DeleteButton>
          ) : null}
        </div>
      </form>
    </FormWrap>
  );
};

export { Form };
