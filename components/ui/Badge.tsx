import React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline" | "danger" | "success";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variants = {
    default: "border-transparent bg-ocean text-sail hover:bg-ocean/80",
    secondary: "border-transparent bg-ocean/10 text-ocean hover:bg-ocean/20",
    outline: "text-ocean border-ocean/20",
    danger: "border-transparent bg-compass text-white hover:bg-compass/80",
    success: "border-transparent bg-teal text-white hover:bg-teal/80",
  }
  
  return (
    <div
      className={cn(
        "inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold font-nunito transition-colors focus:outline-none focus:ring-2 focus:ring-ocean focus:ring-offset-2",
        variants[variant],
        className
      )}
      {...props}
    />
  )
}
