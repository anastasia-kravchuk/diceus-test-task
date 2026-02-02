import type { PortfolioGoal } from "../../../../types/dashboard/portfolioGoal"

interface PortfolioGoalsProps {
  data: PortfolioGoal[]
}

export const PortfolioGoals = ({data}: PortfolioGoalsProps) => {
  return (
    <p>Portfolio goals</p>
  )
}