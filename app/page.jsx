'use client'
import { useEffect } from 'react';
import { useRouter } from "next/navigation";

const Homepage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/login');
  }, [router]);

  return (
    <div>Redirecting to Login...</div>
  );
}

export default Homepage;
