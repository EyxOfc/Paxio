import PaxioCode from 'paxiocode';

import { useParams } from 'react-router-dom';

function PaxioApi(){

    const { Unit } = useParams();

    return JSON.stringify(PaxioCode(Unit));

}

export default PaxioApi;