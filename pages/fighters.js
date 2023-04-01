import React, { useEffect, useState } from 'react';
import { getFighters } from '../api/fighterData';
import FighterCard from '../components/FighterCard';
import { useAuth } from '../utils/context/authContext';

export default function ShowFighters() {
  const [fighters, setFighters] = useState([]);
  const { user } = useAuth();

  const getAllFighters = () => {
    getFighters(user.uid).then(setFighters);
  };

  useEffect(() => {
    getAllFighters();
  }, []);

  return (
    <div>{fighters.map((fighter) => (
      <FighterCard key={fighter.firebaseKey} fighterObj={fighter} onUpdate={getAllFighters} />
    ))}
    </div>
  );
}
