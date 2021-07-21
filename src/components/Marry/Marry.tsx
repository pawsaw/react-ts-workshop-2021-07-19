import React from 'react';


export interface Person {
  first: string;
  last: string;
  address: {
    street: string;
    city: string;
  }
}

export interface OnPersonMarried {
  (person: Person): void;
}

export interface MarryProps {
  person: Person;
  onPersonMarried: OnPersonMarried;
}

export const Marry: React.FC<MarryProps> = ({ person, onPersonMarried } ) => {

  const { first, last, address: { street } }  = person;

  const marry = () => {


    const newLast = 'Mayer';
    const newStreet = 'Bar Str.';

    onPersonMarried({
      ...person,
      address: {
        ...person.address,
        street: newStreet
      },
      last: newLast,
    });

  };

  return <div>  
    <p>
      {first} heißt mit Nachnamen <em>{last}</em> und wohnt in <em>{street}</em>
    </p>
    <button type="button" onClick={marry}>heirate Frau Mayer</button>
  </div>


}