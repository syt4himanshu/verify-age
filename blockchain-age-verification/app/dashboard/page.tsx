"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import BlockchainVisualization from '@/components/blockchain-visualization'

export default function Dashboard() {
  const [verificationProgress, setVerificationProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setVerificationProgress((prev) => Math.min(prev + 10, 100))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Verification Status</CardTitle>
          </CardHeader>
          <CardContent>
            <BlockchainVisualization progress={verificationProgress} />
            <Progress value={verificationProgress} className="mt-4" />
            <p className="text-center mt-2">
              {verificationProgress < 100 ? 'Verifying...' : 'Verification Complete!'}
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Privacy Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center text-4xl font-bold text-green-500">
              85%
            </div>
            <p className="text-center mt-2">Your privacy is well protected!</p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

