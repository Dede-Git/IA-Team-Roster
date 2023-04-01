import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import Link from 'next/link';
import { deleteSingleFighter } from '../api/fighterData';

export default function FighterCard({ fighterObj, onUpdate }) {
  const deleteThisFighter = () => {
    if (window.confirm(`Delete ${fighterObj.firebaseKey}?`)) {
      deleteSingleFighter(fighterObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={fighterObj.image} alt={fighterObj.first_name} style={{ height: '300px' }} />
      <Card.Body>
        <Card.Title>{fighterObj.first_name}</Card.Title>
        <Card.Title>{fighterObj.last_name}</Card.Title>
        {/* DYNAMIC LINK TO VIEW THE FIGHT DETAILS  */}
        <Link href={`/fighter/${fighterObj.firebaseKey}`} passHref>
          <Button variant="primary" className="m-2">VIEW</Button>
        </Link>
        {/* DYNAMIC LINK TO EDIT THE FIGHT DETAILS  */}
        <Link href={`/fighter/edit/${fighterObj.firebaseKey}`} passHref>
          <Button variant="info">EDIT</Button>
        </Link>
        <Button variant="danger" onClick={deleteThisFighter} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

FighterCard.propTypes = {
  fighterObj: PropTypes.shape({
    firebaseKey: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    image: PropTypes.string,
    uid: PropTypes.string,
    favorite: PropTypes.bool,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
