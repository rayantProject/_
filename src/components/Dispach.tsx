import {useEffect, useState} from 'react';
import ScanResult from '../views/ScanResult';
import advices from '../data/Advise';
import Advise from '../types/Advise';
import { useParams } from 'react-router-dom';

export default function Dispach() {
    const { id } = useParams();

    const [advise, setAdvise] = useState<Advise>(advices[0]);

    useEffect(() => {
        const advise = advices.find(advise => advise.id === id);
        if (advise) {
            setAdvise(advise);
        }else{
            setAdvise(advices[0]);
        }
    });


    return (
        <div>
        <ScanResult
            title={advise.title}
            description={advise.text}
            type={advise.type}
        />
        </div>
    );
    }