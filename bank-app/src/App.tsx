import React, { useEffect, useState, MouseEvent } from 'react';
import './App.css';
import { IClient } from './IClient';
import { IClientData } from './IClientData';
import ClientComponent from './ClientComponent';
import ClientDetail from './ClientDetail';

function App() {
    const [clients, setClients] = useState<IClient[]>([]);
    const [selected, setSelected] = useState<IClientData | undefined>(undefined);

    const getClients = async (): Promise<IClientData[]> => {
        const result = await fetch(`https://inscope-takehome-service.onrender.com/clients`)
        return (await result.json()).results;
    }

    const onClientSelect = (data: IClientData) => { 
        setSelected(data);
    };

    useEffect(() => {
        (async () => {
            const response = await getClients();
            const clients: IClient[] = 
                response.map(c => ({ data: c, onClientSelect: onClientSelect}));
            setClients(clients);
        })();
    }, []);

    useEffect(() => {

    }, [selected]);

    return (
        <div className="App">
            <div className="sidebar">
                <h1>The Bank</h1>
            </div>
            <div className="content-container">
                <div className="client-container">
                    {clientDetail(selected)}
                </div>
                <div className="clients-container">
                    <h2>The Clients</h2>
                    <div className="clients-list-container">
                        {clients.length &&
                            clients.map(client =>
                                (<ClientComponent 
                                    key={client.data.id} 
                                    client={client}>
                                </ClientComponent>)
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )




}

const clientDetail = (selected: IClientData | undefined) => {
    if (selected == undefined) {
        return('Select client to view detail')
    } else {
        return(
            <ClientDetail {...selected}></ClientDetail>
        )}
}


export default App;
