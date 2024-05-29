'use client';

import { useState } from 'react';
import { useInterval } from 'usehooks-ts';

export function Content() {
  const countDownDate = new Date('2024-05-31T11:00:00').getTime();
  const [countDown, setCountDown] = useState(countDownDate - new Date().getTime());
  console.log(countDown);

  useInterval(() => {
    setCountDown(countDownDate - new Date().getTime());
  }, 1000);

  return <div>{countDown}</div>;
}
