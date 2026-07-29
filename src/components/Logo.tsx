import { Brain } from "lucide-react";

interface LogoProps {
  collapsed?: boolean;
  className?: string;
}

export function Logo({ collapsed = false, className = "" }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
        <Brain className="h-5 w-5 text-primary-foreground" />
        <div className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-background bg-secondary" />
      </div>
      {!collapsed && (
        <div className="flex flex-col">
          <span className="text-lg font-bold leading-tight tracking-tight text-foreground">
            Placement
          </span>
          <span className="text-[10px] font-medium uppercase tracking-widest text-primary">
            Path
          </span>
        </div>
      )}
    </div>
  );
}
