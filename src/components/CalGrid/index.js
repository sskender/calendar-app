import React from "react";
import moment from "moment";
import styled from "styled-components";

const GridWrap = styled.div`
    background-color: ${props => props.isHeader ? "#1e1f21" : "#404040"};
    display: grid;
    grid-gap: 1px;
    grid-template-columns: repeat(7, 1fr);
    ${props => props.isHeader && 'border-bottom: 1px solid #404040'}
`;

const CellWrap = styled.div`
    background-color: ${props => props.isWeekday ? "#272829" : "#1e1f21"};
    color: ${props => props.isSelMonth ? "#dddddd" : "#555759"};
    min-height: ${props => props.isHeader ? 24 : 80}px;
    min-width: 140px;
`;

const CellInRow = styled.div`
    display: flex;
    justify-content: ${props => props.justifyContent ? props.justifyContent : "flex-start"};
    ${props => props.pr && `padding-right: ${props.pr * 8}px`}
`;

const DayWrap = styled.div`
    align-items: center;
    display: flex;
    height: 33px;
    justify-content: center;
    margin: 2px;
    width: 33px;
`;

const CurrDay = styled('div')`
    align-items: center;
    background: #f00;
    border-radius: 50%;
    display: flex;
	font-weight: bold;
    justify-content: center;
    height: 80%;
    width: 82.5%;
`;

const CalGrid = ({startDay, today}) => {
    const totalDays = 42;
    const day = startDay.clone().subtract(1, "day");
    const daysMap = [...Array(totalDays)].map(() => day.add(1, "day").clone());
    
    const isCurrDay = (day) => moment().isSame(day, 'day');
    const isSelMonth = (day) => today.isSame(day, 'month');
    
    return (
        <>
            <GridWrap isHeader>
                {
                    [...Array(7)].map((_, i) => (
                        <CellWrap isHeader isSelMonth>
                            <CellInRow justifyContent={"space-evenly"} pr={1}>
                                {moment().day(i + 1).format('ddd')}
                            </CellInRow>
                        </CellWrap>
                    ))
                }
            </GridWrap>
            <GridWrap>
                {
                    daysMap.map((dayItem) => (
                        <CellWrap
                            isWeekday={dayItem.day() === 0 || dayItem.day() === 6}
                            isSelMonth={isSelMonth(dayItem)}
                        >
                            <CellInRow justifyContent={"flex-end"}>
                                <DayWrap>
                                    {!isCurrDay(dayItem) && dayItem.format("D")}
                                    {isCurrDay(dayItem) && <CurrDay>{dayItem.format("D")}</CurrDay>}
                                </DayWrap>
                            </CellInRow>
                        </CellWrap>
                    ))
                }
            </GridWrap>
        </>
    );
};

export { CalGrid };