import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const alertVariants = cva("relative rounded-xl border transition-all", {
  variants: {
    variant: {
      default: "border-[#D9D4CC]/80 bg-[#FAF8F5]/98 text-[#183321] backdrop-blur-md shadow-2xl",
      warning: "border-amber-500/50 text-amber-600 bg-amber-50",
      error: "border-red-500/50 text-red-600 bg-red-50",
      success: "border-emerald-500/50 text-emerald-700 bg-emerald-50",
      info: "border-blue-500/50 text-blue-600 bg-blue-50",
    },
    size: {
      sm: "px-4 py-3",
      lg: "p-4 sm:p-5",
    },
    isNotification: {
      true: "z-[100] max-w-[420px] shadow-2xl shadow-black/20",
      false: "",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "sm",
    isNotification: false,
  },
});

interface AlertProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  icon?: React.ReactNode;
  action?: React.ReactNode;
  layout?: "row" | "complex";
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      className,
      variant,
      size,
      isNotification,
      icon,
      action,
      layout = "row",
      children,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      role="alert"
      className={cn(
        alertVariants({ variant, size, isNotification }),
        className,
      )}
      {...props}
    >
      {layout === "row" ? (
        <div className="flex items-center gap-2">
          <div className="grow flex items-center">
            {icon && <span className="me-3 inline-flex">{icon}</span>}
            {children}
          </div>
          {action && <div className="flex items-center shrink-0">{action}</div>}
        </div>
      ) : (
        <div className="flex gap-2">
          {icon && children ? (
            <div className="flex grow gap-3">
              <span className="mt-0.5 shrink-0">{icon}</span>
              <div className="grow">{children}</div>
            </div>
          ) : (
            <div className="grow">
              {icon && <span className="me-3 inline-flex">{icon}</span>}
              {children}
            </div>
          )}
          {action && <div className="flex items-start shrink-0">{action}</div>}
        </div>
      )}
    </div>
  ),
);
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5 ref={ref} className={cn("text-sm sm:text-base font-semibold leading-tight text-[#183321]", className)} {...props} />
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-xs sm:text-sm text-[#4A5D4F] leading-relaxed", className)}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

const AlertContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("space-y-1.5", className)} {...props} />
));
AlertContent.displayName = "AlertContent";

export { Alert, AlertTitle, AlertDescription, AlertContent };
export default Alert;
