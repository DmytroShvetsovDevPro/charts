import { FC } from 'react';
import { VictoryChart, VictoryLine, VictoryVoronoiContainer } from 'victory';

export const Victory: FC = () => {
  return (
    <div>
      <h1>Victory 3</h1>

      <div style={{ maxWidth: 400 }}>
        <VictoryChart>
          <VictoryLine
            // labelComponent={
            //   <VictoryTooltip
            //     cornerRadius={({ datum }) => datum.x > 6 ? 0 : 20}
            //     pointerLength={({ datum }) => datum.y > 0 ? 5 : 20}
            //     flyoutStyle={{
            //       stroke: ({ datum }) => datum.x === 10
            //         ? "tomato"
            //         : "black"
            //     }}
            //   />
            // }
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
            ]}
          />
        </VictoryChart>
      </div>
    </div>
  );
};
