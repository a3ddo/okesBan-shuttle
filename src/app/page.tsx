// app/welcome/page.tsx for Next.js 13+ App Router
'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function WelcomePage() {
  const router = useRouter();

  return (
    <div className="relative h-screen w-full overflow-hidden font-sans">
      {/* Background */}
      <Image
        src="/c1_h1.jpeg"
        alt="Shuttle background"
        fill
        className="object-cover object-center"
        priority
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60" />

      {/* Glassmorphic Hero Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
        <div className="max-w-2xl w-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 text-white">
          <h1 className="text-2xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
            OkesBan Shuttle Services
          </h1>
          <p className="text-base md:text-lg lg:text-xl mb-6">
            Reliable. Comfortable. On-time. Book your ride and experience the difference.
          </p>
          <button
            onClick={() => router.push('/services')}
            className="mt-2 inline-block bg-blue-500/70 hover:bg-blue-500/90 transition-colors duration-300 text-white font-semibold px-6 py-3 rounded-xl shadow-md uppercase tracking-wide backdrop-blur-sm"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
