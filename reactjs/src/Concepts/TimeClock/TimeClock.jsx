import React, { useState, useEffect } from 'react';

export function TimeClock(props) {
  let time = new Date();
  const sep = ':';
  const [curTime, setCurTime] = useState({
    hour: '00',
    min: '00',
    sec: '00',
   });

  useEffect(() => {
    setCurTime({
      ...curTime,
      hour: time.getHours(),
      min: time.getMinutes(),
      sec: time.getSeconds(),
    });
  }, [curTime]);

  return (
    <div className='App'>
      <span>{curTime.hour}</span>{sep}
      <span>{curTime.min}</span>{sep}
      <span>{curTime.sec}</span>
    </div>
  );
}
