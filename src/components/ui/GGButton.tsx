import { ButtonHTMLAttributes, ReactNode } from "react"
import { twMerge } from "tailwind-merge";

const Button = (props: {
    variant: "primary" | "secondary" | "text"; 
    iconAfter?: ReactNode; 
    } & ButtonHTMLAttributes<HTMLButtonElement>) => {
    const { className, children, variant, iconAfter, ...rest} = props;
    return (
        <button className={twMerge(
            "h-11 px-6 rounded-xl border border-red-500 uppercase inline-flex items-center gap-2 transition duration-500 relative",
            variant === "primary" && "bg-red-500 text-white",
            variant === "secondary" && "hover:bg-red-500 hover:text-white",
            variant === "text" && "h-auto px-0 border-transparent after:transition-all after:duration-500 after:content[''] after:h-px after:w-0 after:absolute after:top-full after:bg-red-500 hover:after:w-full",
            className
        )}
        {...rest}>
            <span>
                {children}
            </span>
            {iconAfter && <span>{iconAfter}</span>}
        </button>
    )
}

export default Button;