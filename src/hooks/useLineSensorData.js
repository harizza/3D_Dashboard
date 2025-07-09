import { useEffect, useState } from "react";

const floors = [1, 2, 3, 4, 5, 6];
const lines = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

const useLineSensorData = () => {
  const [suhu, setSuhu] = useState({});
  const [rh, setRh] = useState({});
  const [pressure, setPressure] = useState({});

  useEffect(() => {
    const sockets = [];

    // Suhu dan RH
    floors.forEach((floor) => {
      lines.forEach((line) => {
        const suhuKey = `SL${floor}${line}`;
        const rhKey = `RHL${floor}${line}`;

        const socketSuhu = new WebSocket(`ws://10.171.28.118:1880/ws/${suhuKey}`);
        socketSuhu.onmessage = (e) => {
          setSuhu((prev) => ({ ...prev, [suhuKey]: parseFloat(e.data) }));
        };
        sockets.push(socketSuhu);

        const socketRh = new WebSocket(`ws://10.171.28.118:1880/ws/${rhKey}`);
        socketRh.onmessage = (e) => {
          setRh((prev) => ({ ...prev, [rhKey]: parseFloat(e.data) }));
        };
        sockets.push(socketRh);
      });
    });

    // Pressure khusus lantai 1
    lines.forEach((line) => {
      const pressureKey = `PAL1${line}`;
      const socketPressure = new WebSocket(`ws://10.171.28.118:1880/ws/${pressureKey}`);
      socketPressure.onmessage = (e) => {
        setPressure((prev) => ({ ...prev, [pressureKey]: parseFloat(e.data) }));
      };
      sockets.push(socketPressure);
    });

    return () => {
      sockets.forEach((socket) => socket.close());
    };
  }, []);

  return { suhu, rh, pressure };
};

export default useLineSensorData;
