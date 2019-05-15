import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom';
import { DragDropContext } from 'react-beautiful-dnd';
import styled from 'styled-components';
import initialData from './selectDateHour/group/Initial-data';
import Column from './selectDateHour/group/Column';

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-flow: column wrap;
  height: 80vh;
`;

class AddTeams extends Component {
    state = initialData;

    onDragEnd = result => {
      const { destination, source, draggableId } = result;

      if (!destination) {
        return;
      }

      if (destination.droppableId === source.droppableId && destination.index === source.index) {
        return;
      }

      const start = this.state.columns[source.droppableId];
      const finish = this.state.columns[destination.droppableId];

      if (start === finish) {
        const newTaskIds = Array.from(start.taskIds);
        newTaskIds.splice(source.index, 1);
        newTaskIds.splice(destination.index, 0, draggableId);

        const newColumn = {
          ...start,
          taskIds: newTaskIds,
        };

        const newState = {
          ...this.state,
          columns: {
            ...this.state.columns,
            [newColumn.id]: newColumn
          },
        };

        this.setState(newState);
        return;
      };

      const startTaskIds = Array.from(start.taskIds);
      startTaskIds.splice(source.index,1);
      const newStart= {
        ...start,
        taskIds: startTaskIds,
      };

      const finishTaskIds = Array.from(finish.taskIds);
      finishTaskIds.splice(destination.index,0,draggableId);
      const newFinish= {
        ...finish,
        taskIds: finishTaskIds,
      };

      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newStart.id]: newStart,
          [newFinish.id]: newFinish
        },
      };

      this.setState(newState);

    };

    render(){
      return (
      <div>

        <div className="Groups_Buttons">
          <button className="AddGroup__Button--Reset mr-20">  Reiniciar equipos  </button>
          <button className="AddGroup__Button--Random mr-20">  Crear Aleatoriamente Equipos  </button>
          <button className="AddGroup__Button--End mr-20"> <a href="/dashboard" className="FormField_ButtonLink"> Finalizar </a> </button>
        </div>

        <DragDropContext onDragEnd={this.onDragEnd}>
          <Container>
            {this.state.columnOrder.map(columnId => {
            const column = this.state.columns[columnId];
            const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);

            return <Column key={columnId} column={column} tasks={tasks} />;
            })}
          </Container>
        </DragDropContext>

      </div>
      );
    }
}

export default AddTeams;
