import React from 'react';
import styled from 'styled-components';

import CourseGoalItem from '../CourseGoalItem/CourseGoalItem';
import './CourseGoalList.css';



const Ul = styled.ul`
 list-style: none;
  margin: 0;
  padding: 0;
  border-radius: 0.90rem;
`;

const CourseGoalList = props => {
  return (
    <Ul>
      {props.items.map(goal => (
        <CourseGoalItem
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem}
        >
          {goal.text}
        </CourseGoalItem>
      ))}
    </Ul>
  );
};

export default CourseGoalList;
