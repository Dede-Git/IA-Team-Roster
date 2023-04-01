/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import { getSingleFighter } from '../../api/fighterData';

export default function ViewFighter() {
  const [fighterDetails, setFighterDetails] = useState({});
  const router = useRouter();

  // TODO: grab firebaseKey from url
  const { firebaseKey } = router.query;

  // TODO: make call to API layer to get the data
  useEffect(() => {
    getSingleFighter(firebaseKey).then(setFighterDetails);
  }, [firebaseKey]);

  return (
    <>
      <div className="mt-5 d-flex flex-wrap">
        <div className="d-flex flex-column">
          <img src={fighterDetails.image} alt={fighterDetails.first_name} style={{ width: '300px' }} />
        </div>
        <div className="text-white ms-5 details">
          <h5>
            {fighterDetails.first_name} {fighterDetails.last_name}
            {fighterDetails.favorite ? ' 🤍' : ''}
          </h5>
          <hr />
          <Link passHref href="/">
            <Button variant="outline-dark" className="m-2">Return To Goats</Button>
          </Link>
        </div>
      </div>
      <hr />
    </>
  );
}
