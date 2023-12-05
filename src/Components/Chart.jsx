import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const data = [
  createData('01 Nov', 0),
  createData('02 Nov', 30),
  createData('03 Nov', 45),
  createData('04 Nov', 25),
  createData('05 Nov', 62),
  createData('06 Nov', 58),
  createData('07 Nov', 65),
];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Weekly Progress</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis
            dataKey="time"
            stroke='white'
            style={theme.typography.body2}
          />
          <YAxis
            stroke='white'
            style={theme.typography.body2}
          >
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: 'middle',
                fill: 'white'
              }}
            >
              Percentage (%)
            </Label>
          </YAxis>
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="amount"
            stroke='#B142F5'
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}