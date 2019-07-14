
import { postOffice } from './postOffice';
import { shipmentWeight } from './shipmentWeight';
import { shipmentType } from './shipmentType';

export interface shipment {
    id: number;
    origin: boolean;
    destination: boolean,
    delivered: boolean,
    office: postOffice,
    weight: shipmentWeight,
    type: shipmentType
}
