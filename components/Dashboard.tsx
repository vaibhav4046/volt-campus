
import React, { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Battery, MapPin, Activity, AlertTriangle, User, RefreshCw, Smartphone } from 'lucide-react';
import { ScooterData } from '../types';

const generateMockData = (): ScooterData[] => {
  return Array.from({ length: 8 }, (_, i) => ({
    id: `VC-${1000 + i}`,
    battery: Math.floor(Math.random() * 60) + 40,
    status: Math.random() > 0.8 ? 'In Use' : Math.random() > 0.9 ? 'Charging' : 'Available',
    location: ['Block A', 'Library', 'Canteen', 'Main Gate', 'Sports Complex'][Math.floor(Math.random() * 5)],
    lastPing: 'Just now'
  }));
};

const chartData = [
  { time: '08:00', activeRides: 12 },
  { time: '09:00', activeRides: 45 },
  { time: '10:00', activeRides: 38 },
  { time: '11:00', activeRides: 52 },
  { time: '12:00', activeRides: 65 },
  { time: '13:00', activeRides: 85 },
  { time: '14:00', activeRides: 40 },
];

const Dashboard: React.FC = () => {
  const [fleet, setFleet] = useState<ScooterData[]>([]);
  const [riderId] = useState(`R-${Math.random().toString(36).substr(2, 9).toUpperCase()}`);

  // Simulate real-time updates
  useEffect(() => {
    setFleet(generateMockData());
    const interval = setInterval(() => {
      setFleet(prev => prev.map(scooter => ({
        ...scooter,
        battery: scooter.status === 'In Use' ? Math.max(0, scooter.battery - 1) : scooter.battery,
        lastPing: 'Just now'
      })));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 mb-2">
            <span className="flex h-3 w-3 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.6)]"></span>
            <h2 className="text-sm font-bold text-slate-500 uppercase tracking-widest">Operations Dashboard</h2>
          </div>
          <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">Real-Time Fleet Status</h1>
          <p className="text-slate-600 mt-2">Monitor active rides, battery levels, and fleet distribution.</p>
        </div>

        {/* Top Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Card 1: User ID */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-slate-500 text-sm font-bold uppercase tracking-wide">Your Rider ID</h3>
              <div className="bg-emerald-100 p-2 rounded-lg">
                <User size={20} className="text-emerald-600" />
              </div>
            </div>
            <div className="font-mono text-xl md:text-2xl font-bold text-slate-900 bg-slate-100 p-3 rounded-lg border border-slate-200 inline-block break-all">
              {riderId}
            </div>
            <p className="text-xs text-slate-500 mt-3 leading-relaxed">
              Unique, encrypted ID for ride tracking and account security.
            </p>
          </div>

          {/* Card 2: Fleet Health */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-slate-500 text-sm font-bold uppercase tracking-wide">Fleet Health</h3>
              <div className="bg-blue-100 p-2 rounded-lg">
                <Activity size={20} className="text-blue-600" />
              </div>
            </div>
            <div className="text-4xl font-black text-slate-900 tracking-tight">98.5%</div>
            <p className="text-xs text-emerald-600 mt-2 flex items-center font-bold">
              <span className="inline-block w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[6px] border-b-emerald-600 mr-1.5"></span>
              Fully Operational
            </p>
          </div>

          {/* Card 3: Active Chart */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow md:col-span-2 lg:col-span-1">
             <div className="flex items-center justify-between mb-4">
              <h3 className="text-slate-500 text-sm font-bold uppercase tracking-wide">Ride Volume</h3>
              <div className="bg-orange-100 p-2 rounded-lg">
                <Activity size={20} className="text-orange-600" />
              </div>
            </div>
            <div className="h-32 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="colorRides" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                    itemStyle={{ color: '#059669', fontWeight: 'bold' }}
                    cursor={{ stroke: '#cbd5e1', strokeWidth: 1 }}
                  />
                  <Area type="monotone" dataKey="activeRides" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorRides)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Live Fleet Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4 px-1">
            <h3 className="font-bold text-slate-800 flex items-center">
              <RefreshCw size={18} className="mr-2 text-slate-400" /> 
              Live Scooter Feed
            </h3>
            <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100 animate-pulse">Live Updating</span>
          </div>
          
          {/* Desktop Table View (Hidden on Mobile) */}
          <div className="hidden md:block bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm whitespace-nowrap">
                <thead className="bg-slate-50 text-slate-500 font-semibold uppercase text-xs tracking-wider">
                  <tr>
                    <th className="px-6 py-4">ID</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Battery</th>
                    <th className="px-6 py-4">Location</th>
                    <th className="px-6 py-4">Last Ping</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {fleet.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 font-mono font-medium text-slate-700">{item.id}</td>
                      <td className="px-6 py-4">
                        <StatusBadge status={item.status} />
                      </td>
                      <td className="px-6 py-4">
                        <BatteryIndicator level={item.battery} />
                      </td>
                      <td className="px-6 py-4 text-slate-600 flex items-center font-medium">
                        <MapPin size={14} className="mr-1.5 text-slate-400" />
                        {item.location}
                      </td>
                      <td className="px-6 py-4 text-slate-400 text-xs font-mono">{item.lastPing}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Card View (Visible on Mobile) */}
          <div className="md:hidden space-y-4">
            {fleet.map((item) => (
              <div key={item.id} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
                <div className="flex justify-between items-start mb-4">
                   <div className="flex items-center space-x-2">
                     <span className="bg-slate-100 p-1.5 rounded-lg text-slate-600"><Smartphone size={16} /></span>
                     <span className="font-mono font-bold text-slate-800 text-lg">{item.id}</span>
                   </div>
                   <StatusBadge status={item.status} />
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-slate-50 p-3 rounded-lg">
                    <p className="text-xs text-slate-500 mb-1 uppercase tracking-wide">Battery</p>
                    <BatteryIndicator level={item.battery} compact />
                  </div>
                  <div className="bg-slate-50 p-3 rounded-lg">
                    <p className="text-xs text-slate-500 mb-1 uppercase tracking-wide">Location</p>
                    <div className="flex items-center text-slate-700 font-medium text-sm truncate">
                       <MapPin size={14} className="mr-1 text-slate-400 flex-shrink-0" />
                       <span className="truncate">{item.location}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center text-xs border-t border-slate-100 pt-3">
                   <span className="text-slate-400">Last updated</span>
                   <span className="font-mono text-slate-500 font-medium">{item.lastPing}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Disclaimer */}
        <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl flex items-start shadow-sm">
          <AlertTriangle className="text-amber-600 flex-shrink-0 mt-0.5 mr-3" size={20} />
          <div>
            <h4 className="text-sm font-bold text-amber-800">Prototype Disclaimer</h4>
            <p className="text-sm text-amber-700 mt-1 leading-relaxed">
              This is a live MVP prototype using mock data. Ride duration, GPS coordinates, and payment processing are simulated for demonstration purposes.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

const StatusBadge: React.FC<{ status: string }> = ({ status }) => {
  const styles = status === 'Available' 
    ? 'bg-emerald-50 text-emerald-700 border-emerald-200' 
    : status === 'In Use' 
    ? 'bg-blue-50 text-blue-700 border-blue-200' 
    : 'bg-amber-50 text-amber-700 border-amber-200';
    
  const dotColor = status === 'Available' ? 'bg-emerald-500' : status === 'In Use' ? 'bg-blue-500' : 'bg-amber-500';

  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold border ${styles}`}>
      <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${dotColor}`}></span>
      {status}
    </span>
  );
};

const BatteryIndicator: React.FC<{ level: number, compact?: boolean }> = ({ level, compact }) => (
  <div className="flex items-center w-full">
    {!compact && <Battery size={16} className={`mr-2 flex-shrink-0 ${level < 20 ? 'text-red-500' : 'text-slate-400'}`} />}
    <span className="font-medium text-slate-700 w-8 text-sm mr-2">{level}%</span>
    <div className="flex-grow h-1.5 bg-slate-200 rounded-full overflow-hidden max-w-[80px]">
      <div 
        className={`h-full rounded-full transition-all duration-500 ${level < 20 ? 'bg-red-500' : 'bg-emerald-500'}`} 
        style={{ width: `${level}%` }}
      ></div>
    </div>
  </div>
);

export default Dashboard;
