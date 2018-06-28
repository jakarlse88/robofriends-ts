import * as React from 'react';
import Card from '../card/Card';
import { IRobots } from '../mainpage/MainPage';

const CardList = ({ robots }: { robots: IRobots[] }): JSX.Element => {
  return (
    <div>
      {
        robots.map((user, i) => {
          return (
            <Card
              email={robots[i].email}
              id={robots[i].id}
              key={i}
              name={robots[i].name}
            />
          );
        })
      }
    </div>
  );
}

export default CardList;