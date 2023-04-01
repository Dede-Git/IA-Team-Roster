import { getSingleFighter } from './fighterData';

const viewFighterDetails = (fighterFirebaseKey) => new Promise((resolve, reject) => {
  getSingleFighter(fighterFirebaseKey)
    .then(() => {
    }).catch((error) => reject(error));
});

export default viewFighterDetails;
