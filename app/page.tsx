'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const remainingTime = getRemainingTime('2024-05-31T11:00:00');
  const [state, setState] = useState(remainingTime);

  useInterval(() => {
    setState(remainingTime);
  }, 1000);

  return (
    <main className='flex min-h-screen flex-col items-center gap-6 p-10 md:p-24'>
      <h1 className='uppercase text-4xl md:text-6xl font-extrabold'>countdown</h1>

      <Image src='/test.gif' width={300} height={300} alt='image' />
      <span>계체까지 얼마나 남았냐면...</span>
      <div className='flex flex-col items-center text-lg md:text-xl gap-1'>
        {state.days !== 0 && <span className='block'>{state.days}일하고도</span>}
        <span className='text-extrabold bg-blue-800/20 '>
          {state.hours}시간 {state.minutes}분 {state.seconds}초 남았...
        </span>
      </div>
    </main>
  );
}

//

// 지정된 시간까지 남은 시간을 계산하는 함수
const getRemainingTime = (deadline: string) => {
  const currentTime = new Date().getTime();
  const targetTime = new Date(deadline).getTime();
  const remainingTime = targetTime - currentTime;

  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  return {
    days,
    hours,
    minutes,
    seconds,
  };
};

function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef(callback);
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
