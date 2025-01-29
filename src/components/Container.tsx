import { cn } from "@/lib/utils"

interface Props{
    children:React.ReactNode
    className:string
}

const Container = ({ children, className }: Props) => {
  return (
    <div className={cn("max-w-[1100px] mx-auto px-2 sm:px-4 ", className)}>
      {children}
    </div>
  );
};
export default Container