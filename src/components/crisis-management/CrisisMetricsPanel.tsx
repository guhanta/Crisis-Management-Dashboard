import React from 'react';

const CrisisMetricsPanel: React.FC = () => {
    const [metrics, setMetrics] = React.useState({
        pollution: 0,
        energy: 0,
        water: 0,
        health: 0
    });

    const fetchMetrics = async () => {
        try {
            const response = await fetch('/api/metrics');
            const data = await response.json();
            if (data.success) {
                setMetrics(data.data);
            }
        } catch (error) {
            console.error('Error fetching metrics:', error);
        }
    };

    React.useEffect(() => {
        fetchMetrics();
        const intervalId = window.setInterval(fetchMetrics, 5000);
        return () => window.clearInterval(intervalId);
    }, []);

    return (
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <div className="space-y-4">
                <div>
                    <p className="mb-2 text-white">Pollution Level: {metrics.pollution}%</p>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                        <div className="bg-red-600 h-2.5 rounded-full" style={{ width: `${metrics.pollution}%` }}></div>
                    </div>
                </div>
                <div>
                    <p className="mb-2 text-white">Energy Status: {metrics.energy}%</p>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                        <div className="bg-cyan-500 h-2.5 rounded-full" style={{ width: `${metrics.energy}%` }}></div>
                    </div>
                </div>
                <div>
                    <p className="mb-2 text-white">Water Resources: {metrics.water}%</p>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                        <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: `${metrics.water}%` }}></div>
                    </div>
                </div>
                <div>
                    <p className="mb-2 text-white">Health Status: {metrics.health}%</p>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                        <div className="bg-green-500 h-2.5 rounded-full" style={{ width: `${metrics.health}%` }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CrisisMetricsPanel; 