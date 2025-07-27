'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';


export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [isLoading, setLoading] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        await signIn('email', { email, redirect: false });
        setLoading(false);
    };

    return (
    <div className="max-w-sm mx-auto mt-32">
      <h2 className="text-2xl font-bold mb-4">Login with Email</h2>
      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          disabled={isLoading}
        >
          {isLoading ? 'Sending email...' : 'Login via Magic Link'}
        </button>
      </form>
    </div>
  );
}