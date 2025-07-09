import { useEffect, useState } from "react";

const useChillerData = () => {
  const [flowRate, setFlowRate] = useState(null);
  const [velocity, setVelocity] = useState(null);
  const [consumption, setConsumption] = useState(null);
  const [frequency, setFrequency] = useState(null);

  useEffect(() => {
    const socketFlow = new WebSocket("ws://http://10.171.28.118/:1880/ws/flowChiller");
    socketFlow.onmessage = (e) => setFlowRate(parseFloat(e.data));

    const socketVel = new WebSocket("ws://http://10.171.28.118/:1880/ws/velocityChiller");
    socketVel.onmessage = (e) => setVelocity(parseFloat(e.data));

    const socketCon = new WebSocket("ws://http://10.171.28.118/:1880/ws/consumptionChiller");
    socketCon.onmessage = (e) => setConsumption(parseFloat(e.data));

    const socketFreq = new WebSocket("ws://http://10.171.28.118/:1880/ws/frequencyChiller");
    socketFreq.onmessage = (e) => setFrequency(parseFloat(e.data));

    return () => {
      socketFlow.close();
      socketVel.close();
      socketCon.close();
      socketFreq.close();
    };
  }, []);

  return { flowRate, velocity, consumption, frequency };
};

export default useChillerData;
