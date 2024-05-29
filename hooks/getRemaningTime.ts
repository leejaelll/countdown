// 지정된 시간까지 남은 시간을 계산하는 함수
export const getRemainingTime = (deadline: string) => {
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
