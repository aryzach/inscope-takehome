import { IClient } from './IClient';

// TODO: fix type -- (props: { client: IClient }) 
const ClientComponent = (props: any) => { 
    const { client } = props;
    const data = client.data;
    const onClientSelect = client.onClientSelect;

    return (
        <div className="client">
            <button onClick={e => onClientSelect(data)}>
                <div className="name">
                    {data.first_name} {data.last_name} 
                </div>
                <div className="client-since">
                    <b>Joined:</b> {data.client_since} 
                </div>

            </button>
        </div>
    )


};

export default ClientComponent;
