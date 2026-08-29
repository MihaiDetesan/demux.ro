import { Eye, Cpu, Sun, Network, type LucideIcon } from "lucide-react";

const icons: Record<string, LucideIcon> = { Eye, Cpu, Sun, Network };

export default function PillarIcon({ name, className }: { name: string; className?: string }) {
  const Icon = icons[name] ?? Eye;
  return <Icon className={className} />;
}
