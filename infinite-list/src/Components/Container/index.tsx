import { TProps } from "./types";
export function Container({ className, children }: TProps) {
  return <div className={className}>{children}</div>;
}
