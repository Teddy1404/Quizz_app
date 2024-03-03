import React from 'react'
import QuizmeCard from './QuizmeCard'
import HistoryCard from './HistoryCard'
import HotTopics from './HotTopics'
import RecentActivity from './RecentActivity'
type Props = {}

const Dashboard = (props: Props) => {
  return (
    <main className="p-8 mx-auto max-w-7xl">
    <div className="flex items-center">
      <h2 className="mr-2 text-3xl font-bold tracking-tight">Dashboard</h2>
    </div>

    <div className="grid gap-4 mt-4 md:grid-cols-2">
      <QuizmeCard/>
      <HistoryCard />
    </div>
    <div className="grid gap-4 mt-4 md:grid-cols-2 lg:grid-cols-7">
      <HotTopics/>
      <RecentActivity/>
    </div>
  </main>
  )
}

export default Dashboard