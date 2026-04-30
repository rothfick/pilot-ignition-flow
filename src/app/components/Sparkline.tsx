import { motion } from "framer-motion";

interface Props {
  data: number[];
  height?: number;
  className?: string;
  fillOpacity?: number;
}

const Sparkline = ({ data, height = 56, className = "", fillOpacity = 0.08 }: Props) => {
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const w = 100;
  const points = data
    .map((v, i) => {
      const x = (i / (data.length - 1)) * w;
      const y = ((max - v) / range) * 30 + 2;
      return `${x},${y}`;
    })
    .join(" ");

  const pathD = `M${points.split(" ").join(" L")}`;
  const areaD = `${pathD} L${w},34 L0,34 Z`;

  return (
    <svg
      viewBox={`0 0 ${w} 36`}
      preserveAspectRatio="none"
      className={className}
      style={{ width: "100%", height }}
    >
      <defs>
        <linearGradient id="spark-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity={fillOpacity} />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={areaD} fill="url(#spark-fill)" />
      <motion.path
        d={pathD}
        fill="none"
        stroke="white"
        strokeWidth="0.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.85"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.4, ease: "easeInOut" }}
      />
    </svg>
  );
};

export default Sparkline;