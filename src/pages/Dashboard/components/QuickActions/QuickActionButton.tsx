import type { QuickAction } from "../../../../types/dashboard/quickAction"

interface QuickActionButtonProps {
  button: QuickAction;
}

export const QuickActionButton = ({button}: QuickActionButtonProps) => {
  return (
    <button className="actions-button">
      {button.label}
    </button>
  )
}