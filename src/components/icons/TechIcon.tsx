import {
  SiPython,
  SiPandas,
  SiNumpy,
  SiMysql,
  SiScikitlearn,
  SiJupyter,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { FiBarChart2, FiPieChart } from "react-icons/fi";

export type TechKey =
  | "python"
  | "pandas"
  | "numpy"
  | "mysql"
  | "tableau"
  | "powerbi"
  | "scikit-learn"
  | "zoho"
  | "jupyter"
  | "git"
  | "github";

type TechIconProps = {
  tech: string;
  className?: string;
  labelClassName?: string;
  showLabel?: boolean;
};

function cn(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ");
}

function normalize(tech: string): TechKey | null {
  const t = tech.toLowerCase();
  if (t.includes("python")) return "python";
  if (t.includes("pandas")) return "pandas";
  if (t.includes("numpy")) return "numpy";
  if (t.includes("mysql") || t === "sql (mysql)" || t.includes("sql")) return "mysql";
  if (t.includes("tableau")) return "tableau";
  if (t.includes("power bi") || t.includes("powerbi")) return "powerbi";
  if (t.includes("scikit") || t.includes("sklearn")) return "scikit-learn";
  if (t.includes("zoho")) return "zoho";
  if (t.includes("jupyter")) return "jupyter";
  if (t === "git") return "git";
  if (t.includes("github")) return "github";
  return null;
}

export function isKnownTech(tech: string) {
  return normalize(tech) !== null;
}

export function TechIcon({
  tech,
  className,
  labelClassName,
  showLabel = false,
}: TechIconProps) {
  const key = normalize(tech);
  const common = "h-4 w-4";

  const Icon =
    key === "python"
      ? SiPython
      : key === "pandas"
        ? SiPandas
        : key === "numpy"
          ? SiNumpy
          : key === "mysql"
            ? SiMysql
            : key === "tableau"
              ? FiPieChart
              : key === "powerbi"
                ? FiBarChart2
                : key === "scikit-learn"
                  ? SiScikitlearn
                  : key === "jupyter"
                    ? SiJupyter
                    : key === "git"
                      ? SiGit
                      : key === "github"
                        ? SiGithub
                        : FiBarChart2;

  const label = key ?? tech;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-white/75 ring-1 ring-white/10",
        className,
      )}
    >
      <Icon className={common} />
      {showLabel ? <span className={cn(labelClassName)}>{label}</span> : null}
    </span>
  );
}

