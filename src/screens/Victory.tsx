import { FC } from 'react';
import { VictoryChart, VictoryLine, VictoryVoronoiContainer, VictoryZoomContainer, VictoryTooltip } from 'victory';

import { Layout } from '../components/Layout';

export const Victory: FC = () => {
  return (
    <Layout>
      <h1>Victory</h1>

      <div style={{ overflow: 'hidden' }}>
        <VictoryChart
          containerComponent={
            <VictoryZoomContainer />
          }
        >
          <VictoryLine
            labelComponent={<VictoryTooltip />}
            animate={{
              duration: 1000,
              onLoad: { duration: 1000 }
            }}
            style={{
              data: { stroke: '#0058ff' },
              parent: { border: '1px solid #ccc' },
            }}
            containerComponent={
              <VictoryVoronoiContainer
                labels={({ datum }) => `${datum.y}`}
              />
            }
            data={[
              { x: 1, y: 2, label: '2' },
              { x: 2, y: 3, label: '3' },
              { x: 3, y: 5, label: '5' },
              { x: 4, y: 4, label: '4' },
              { x: 5, y: 7, label: '7' },
              { x: 6, y: 7, label: '7' },
            ]}
          />
        </VictoryChart>
      </div>
    </Layout>
  );
};
