/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getFighters } from '../../api/fighterData';
import FighterCard from '../../components/FighterCard';
import { useAuth } from '../../utils/context/authContext';

export default function SearchResult() {
  const [searchResults, setSearchResults] = useState([]);
  const { user } = useAuth();
  const router = useRouter();
  const { searchInput } = router.query;

  const getSearchResults = () => {
    getFighters(user.uid).then((searchResultsArray) => {
      const filterResults = searchResultsArray.filter((fighters) => fighters.first_name.toLowerCase().includes(searchInput)
      || fighters.last_name.toLowerCase().includes(searchInput));
      setSearchResults(filterResults);
    });
  };

  useEffect(() => {
    getSearchResults();
    return () => {
      setSearchResults([]);
    };
  }, [searchInput]);
  return (
    <div>
      <div className="d-flex flex-wrap">
        {searchResults.map((obj) => (
          <FighterCard key={obj.firebaseKey} fighterObj={obj} onUpdate={getSearchResults} />
        ))}
      </div>
    </div>
  );
}
