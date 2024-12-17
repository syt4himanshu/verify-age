"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'

const platforms = ['Facebook', 'Twitter', 'LinkedIn', 'Instagram']

export default function Share() {
  const [permissions, setPermissions] = useState<Record<string, boolean>>(
    platforms.reduce((acc, platform) => ({ ...acc, [platform]: false }), {})
  )

  const handlePermissionChange = (platform: string) => {
    setPermissions(prev => ({ ...prev, [platform]: !prev[platform] }))
  }

  return (
    <div className="max-w-md mx-auto">
      <motion.h2 
        className="text-2xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Verification Sharing
      </motion.h2>

      <Card>
        <CardHeader>
          <CardTitle>Privacy Shield</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {platforms.map((platform, index) => (
              <motion.div 
                key={platform}
                className="flex items-center justify-between"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Label htmlFor={platform}>{platform}</Label>
                <Switch
                  id={platform}
                  checked={permissions[platform]}
                  onCheckedChange={() => handlePermissionChange(platform)}
                />
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      <motion.div 
        className="mt-6 p-4 bg-blue-100 dark:bg-blue-900 rounded-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h3 className="font-bold mb-2">Sharing Recommendation</h3>
        <p>Based on your privacy settings, we recommend sharing your verification on LinkedIn for professional purposes.</p>
      </motion.div>
    </div>
  )
}

