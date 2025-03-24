import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/temp/')({
  component: Leaderboard,
})

function Leaderboard() {
  return (
    <>
      <h1>This is the leaderboard</h1>
    </>
  )
}
