import * as React from 'react';
import Card from '../card/Card';

interface IRobots {
  id: number,
  name: string,
  username: string,
  email: string
};

const CardList = ({ robots }:{robots: IRobots[]}) => {
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