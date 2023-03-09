import React, { useState } from 'react';
import { Button, Card } from 'tdesign-react';
import ReactEcharts from 'echarts-for-react';
import LastWeekDatePicker from 'components/DatePicker';
import useDynamicChart from 'hooks/useDynamicChart';
import { getScatterChartOptions } from '../chart';
import Style from './Satisfaction.module.less';

const Satisfaction = () => {
  const options = getScatterChartOptions();
  const [customOptions, setCustomOptions] = useState(options);
  const onTimeChange = (value: Array<string>) => {
    const options = getScatterChartOptions(value);
    setCustomOptions(options);
  };

  const dynamicChartOption = useDynamicChart(customOptions, {
    placeholderColor: ['legend.textStyle.color', 'xAxis.axisLabel.color', 'yAxis.axisLabel.color'],
  });

  return (
    <div className={Style.satisfactionPanel}>
      <Card
        title='Satisfaction distribution of purchased goods'
        header
        actions={
          <div className={Style.operation}>
            {LastWeekDatePicker(onTimeChange)}
            <Button className={Style.exportBtn}>Export data</Button>
          </div>
        }
      >
        <ReactEcharts
          option={dynamicChartOption}
          notMerge={true}
          lazyUpdate={true}
          style={{ height: 374 }}
        />
      </Card>
    </div>
  );
};

export default React.memo(Satisfaction);
