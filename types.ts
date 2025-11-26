export interface ScooterData {
  id: string;
  battery: number;
  status: 'Available' | 'In Use' | 'Maintenance' | 'Charging';
  location: string;
  lastPing: string;
}

export interface RideMetric {
  time: string;
  activeRides: number;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum TabView {
  MARKETING = 'MARKETING',
  DASHBOARD = 'DASHBOARD'
}