import { IClientData } from './IClientData';
import { IClientDetail, IClientResults } from './IClientDetail';
import React, { useEffect, useState } from 'react';

const ClientDetail = (props: any) => { 
    const { id, first_name, last_name, previous_period_balance } = props;

    const [balance, setBalance] = useState<Number>(0);

    const getClientDetail = async (): Promise<IClientResults[]> => {
        const result = await fetch(`https://inscope-takehome-service.onrender.com/clients/${id}/transactions`)
        return (await result.json()).results
    }

    useEffect(() => {
        (async () => {
            const response: IClientResults[] = await getClientDetail();
            const balance = previous_period_balance + response.reduce((c,r) => c = c + (Number(r.amount)/10), 0);
            setBalance(balance);
        })();
    }, [id]);


    return (
        <div className="client-detail">
            <div className="name">
                <b> {first_name} {last_name}</b> 
            </div>
            <div>
                Current balance: {balance.toString()}
            </div>
            <button>
                Check Eligibility
            </button>
        </div>
    )


};

export default ClientDetail;
