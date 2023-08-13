import { IClientData } from './IClientData';
import { MouseEvent } from 'react';

export interface IClient {
    data: IClientData,
    onClientSelect: (data: IClientData) => void
}
