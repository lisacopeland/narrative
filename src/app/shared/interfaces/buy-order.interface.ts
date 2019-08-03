
export interface BuyOrderInterface {
  name: string;
  max_bid_price: number;
  data_package_type: 'Device Location' | 'Device Behavior' | 'ID Mapping';
}

export interface BuyOrderInterfaceWithId extends BuyOrderInterface {
  id: string;
}

