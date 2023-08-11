import router from 'next/router';
import { useEffect } from 'react';

export default function Start() {
  useEffect(() => {
    // @ts-ignore
    const student_id =
      typeof window !== 'undefined' && localStorage?.getItem('student_id');

    if (student_id === null) {
      router.push('/login');
      return;
    } else {
      router.push('/home');
    }
  });
  return <></>;
}
