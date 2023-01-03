import styled from 'styled-components';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
import useContainerSize from 'hooks/useContainerSize';

const Wrapper = styled.div`
  margin-left: -40px;
  margin-top: 22px;
  height: 100%;
  width: 100%;
`;

const CustomTooltipWrapper = styled.div`
  border-radius: 20px;
  padding: 8px;
  background-color: white;
`;

const Indicator = styled.div<{ color?: string }>`
  border-radius: 50%;
  height: 8px;
  width: 8px;
  background-color: ${p => p.color};
  margin-right: 0.5ch;
`;

const CustomTooltipCopy = styled.div<{ color?: string }>`
  color: ${p => p.color};
  font-size: 0.75rem;
  margin-right: 0.5ch;
`;

const Rows = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

type PayloadObject = {
  chartType?: string;
  color?: string;
  dataKey?: string;
  formatter?: unknown;
  name?: string;
  payload?: {
    [key: string]: string | number;
  };
  points?: unknown;
  stroke?: string;
  strokeWidth?: number;
  type?: unknown;
  unit?: unknown;
  value?: number;
};

const CustomTooltip = ({
  payload = [],
  xLabel,
  yLabel,
}: {
  payload?: PayloadObject[];
  xLabel?: string;
  yLabel?: string;
}) => {
  return (
    <>
      {xLabel && yLabel && payload?.length > 0 && (
        <CustomTooltipWrapper>
          {payload.map((p: PayloadObject) => {
            return (
              <Rows key={p.value}>
                <Indicator color={p.stroke} />
                <CustomTooltipCopy color={p.stroke}>
                  {p.payload?.[xLabel]}:{' '}
                </CustomTooltipCopy>
                <b>
                  <CustomTooltipCopy color={p.stroke}>
                    {p.payload?.[yLabel]}
                  </CustomTooltipCopy>
                </b>
              </Rows>
            );
          })}
        </CustomTooltipWrapper>
      )}
    </>
  );
};

const LineGraph = ({ visits }: { visits: unknown[] }) => {
  const { ref, width } = useContainerSize();
  return (
    <Wrapper ref={ref}>
      <LineChart height={200} width={width} data={visits}>
        <Line
          dataKey="count"
          stroke="#8884d8"
          type="monotone"
          strokeWidth={2}
          dot={{ fill: '#8884d8' }}
        />
        <CartesianGrid stroke="#B3B0CB" strokeDasharray="2" vertical={false} />
        <XAxis
          dataKey="date"
          axisLine={false}
          tick={{ stroke: '#EAEAEC', strokeWidth: 0.1 }}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          tick={{ stroke: '#EAEAEC', strokeWidth: 0.1 }}
        />
        <Tooltip
          wrapperStyle={{
            outline: 'none',
            boxShadow: '0px 0px 8px #e0e0e0',
            borderRadius: '4px',
          }}
          content={<CustomTooltip xLabel="date" yLabel="count" />}
        />
      </LineChart>
    </Wrapper>
  );
};

export default LineGraph;
