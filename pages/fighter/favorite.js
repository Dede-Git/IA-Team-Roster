import React, { useEffect, useState } from 'react';
import { useAuth } from '../../utils/context/authContext';
import FighterCard from '../../components/FighterCard';
import { getFavoriteFighters } from '../../api/fighterData';

export default function GetFavoriteFighters() {
  const { user } = useAuth();
  const [fighters, setFighters] = useState([]);

  const getFavFighters = () => {
    getFavoriteFighters(user.uid).then(setFighters);
  };
  useEffect(() => {
    getFavFighters();
  }, []);

  return (
    <div className="d-flex flex-wrap">
      {fighters.map((fighter) => (
        <FighterCard key={fighter.firebaseKey} fighterObj={fighter} onUpdate={getFavFighters} />
      ))}
    </div>
  );
}
