'use client';
import { getRemainingTime } from '@/hooks/getRemaningTime';
// import { useInterval } from '@/hooks/useInterval';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Home() {
  const targetDate = '2024-05-31T11:00:00';
  const [state, setState] = useState(() => getRemainingTime(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setState(getRemainingTime(targetDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <main className='flex min-h-screen flex-col items-center gap-6 p-10 md:p-24 overflow-x-hidden'>
      <h1 className='uppercase text-4xl md:text-6xl font-extrabold'>countdown</h1>

      <Image src='/test.gif' width={300} height={300} alt='image' className='object-contain w-52 md:w-[300px]' />
      <span>계체까지 얼마나 남았냐면...</span>
      <div className='flex flex-col items-center text-lg md:text-xl gap-1'>
        {state.days !== 0 && <span className='block text-2xl'>{state.days}일하고도🤬</span>}
        <span className='text-extrabold bg-blue-800/20 '>
          {state.hours}시간 {state.minutes}분{' '}
          {state.days === 0 && state.hours < 12 ? <span>{state.seconds}초 남았드아ㅏㅏㅏ🥶🥶🥶</span> : <span>{state.seconds}초 남았...😥</span>}
        </span>
      </div>
    </main>
  );
}
