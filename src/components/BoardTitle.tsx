'use client'

import { cn } from '@/lib/utils'
import { Board } from '@prisma/client'
import { usePathname } from 'next/navigation'
import React from 'react'

type BoardTitleProps = {
  boards: Board[]
  className?: string
}

export default function BoardTitle({ boards, className }: BoardTitleProps) {
  const path = usePathname()
  const boardId = path.split('/').pop()

  return (
    <h1 className={cn(className)}>
      {boards.find((board) => board.id === boardId)?.name || 'Choose the board'}
    </h1>
  )
}
