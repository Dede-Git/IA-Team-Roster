import React, { useEffect, useState } from 'react';
import { getFighters } from '../api/fighterData';
import FighterCard from '../components/FighterCard';
import { useAuth } from '../utils/context/authContext';

function Home() {
  const [fighters, setFighters] = useState([]);
  const { user } = useAuth();

  const getAllTheFighters = () => {
    getFighters(user.uid).then(setFighters);
  };

  useEffect(() => {
    getAllTheFighters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>Wassup {user.displayName}! </h1>
      <p>Here Is Where Fighters Become Goats</p>
      <div className="d-flex flex-wrap">
        {fighters.map((fighter) => (
          <FighterCard key={fighters.firebaseKey} fighterObj={fighter} onUpdate={getAllTheFighters} />
        ))}
      </div>
    </div>
  );
}

export default Home;
