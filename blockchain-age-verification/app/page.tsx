import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold mb-8">
          Welcome to{' '}
          <span className="text-blue-600">BlockVerify</span>
        </h1>
        <p className="text-2xl mb-8">
          Cutting-edge blockchain-based age verification
        </p>
        <div className="flex space-x-4">
          <Link href="/register">
            <Button>Register</Button>
          </Link>
          <Link href="/dashboard">
            <Button variant="outline">Dashboard</Button>
          </Link>
          <Link href="/share">
            <Button variant="outline">Share</Button>
          </Link>
        </div>
      </main>
    </div>
  )
}

