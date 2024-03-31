import PaxioCode from 'paxiocode';
import React from 'react';

import { useParams } from 'react-router-dom';

function PaxioApi(){

    const { Unit } = useParams();

    return PaxioCode(Unit);

    
}

export default PaxioApi;