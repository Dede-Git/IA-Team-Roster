import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleFighter } from '../../../api/fighterData';
import FighterForm from '../../../components/forms/FighterForm';

export default function EditFighter() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  // TODO: grab the firebasekey
  const { firebaseKey } = router.query;

  // TODO: make a call to the API to get the book data
  useEffect(() => {
    getSingleFighter(firebaseKey).then(setEditItem);
  }, [firebaseKey]);

  // TODO: pass object to form
  return (<FighterForm obj={editItem} />);
}
