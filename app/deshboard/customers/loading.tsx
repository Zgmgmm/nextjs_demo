'use client';

import DashboardSkeleton from '@/app/ui/skeletons';
import { useEffect, useState } from 'react';

export default function Loading() {
  const [start] = useState(new Date());
  const [last, setLast] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      console.log('update', new Date());
      // setLast(Math.floor((new Date() - start) / 1000));
      setLast(new Date().getSeconds());
    }, 300);
  }, [last]);
  return (
    <>
      <p>{`Loading ${last} seconds`}</p>
    </>
  );
}
