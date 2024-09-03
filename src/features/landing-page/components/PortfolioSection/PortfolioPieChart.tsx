import React, { useEffect, useRef, useState } from "react";
import { InvestmentStyle } from "./InvestmentStyle";
import { css, Interpolation, Theme } from "@emotion/react";
import { PieChart, Pie, ResponsiveContainer, Cell } from "recharts";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";

interface PortfolioPieChartProps {
  investmentStyle: InvestmentStyle;
  css?: Interpolation<Theme>;
  className?: string;
}

const PortfolioPieChart = ({
  investmentStyle,
  ...rest
}: PortfolioPieChartProps) => {
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const pieRef = useRef(null);
  const [data, setData] = useState([
    { name: "Part 1", value: 0, color: "rgba(163,255,0,1)" },
    { name: "Part 2", value: 0, color: "rgba(0,255,154,1)" },
  ]);

  useEffect(() => {
    if (inView) {
      gsap.to(data, {
        duration: 2,
        value: (i: number) => (i === 0 ? 20 : 100),
        onUpdate: () => setData([...data]),
      });
    }
  }, [inView, data]);

  return (
    <div
      css={css`
        position: relative;
      `}
      {...rest}
    >
      <div ref={inViewRef}>
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              innerRadius="60%"
              outerRadius="80%"
              startAngle={0}
              endAngle={360}
              paddingAngle={2}
              ref={pieRef}
              isAnimationActive={false} // Disable Recharts built-in animation
            >
              tmkc
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const MemoizedPortfolioPieChart = React.memo(PortfolioPieChart);

export { MemoizedPortfolioPieChart as PortfolioPieChart };
