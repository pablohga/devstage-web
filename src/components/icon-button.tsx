import { ComponentProps, ReactNode } from "react"

interface IconButtonProps extends ComponentProps<'button'> {}

export function IconButton(props: IconButtonProps) {
  return (
    <button className="p-1.5 bg-grey-500 text-blue rounded-md cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-grey-900"
    {...props} />
  )
}