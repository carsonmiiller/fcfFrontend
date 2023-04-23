import React, { useEffect, useState } from 'react';
import { Col, Row, Card } from 'tdesign-react';
import ReactEcharts from 'echarts-for-react';
import useDynamicChart from 'hooks/useDynamicChart';
import LastWeekDatePicker from 'components/DatePicker';
import { getLineChartOptions, getPieChartOptions } from '../chart';
import Style from './MiddleChart.module.less';

const lineOptions = getLineChartOptions();
const pieOptions = getPieChartOptions();

const MiddleChart = () => {
  const [customOptions, setCustomOptions] = useState(lineOptions);
  const [stats, setStats] = useState<any>([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/v1/stats/all', {
      method: 'GET',
      headers: {}
      })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then((data) => {
        setStats(data)
        console.log(data)
        return data
      }
    )
  }, []);

  const onTimeChange = (value: Array<string>) => {
    const options = getLineChartOptions(value);
    console.log(options)
    setCustomOptions(options);
  };

  const dynamicLineChartOption = useDynamicChart(customOptions, {
    placeholderColor: ['legend.textStyle.color', 'xAxis.axisLabel.color', 'yAxis.axisLabel.color'],
    borderColor: ['series.0.itemStyle.borderColor', 'series.1.itemStyle.borderColor'],
  });

  const dynamicPieChartOption = useDynamicChart(pieOptions, {
    placeholderColor: ['legend.textStyle.color'],
    containerColor: ['series.0.itemStyle.borderColor'],
    textColor: ['label.color', 'label.color'],
  });

  return (
    <Row gutter={[16, 16]} className={Style.middleChartPanel}>
      <Col xs={12} xl={9}>
        <Card title='Bird Detection Data' header actions={LastWeekDatePicker(onTimeChange)}>
          <ReactEcharts option={dynamicLineChartOption} notMerge={true} lazyUpdate={false} />
        </Card>
      </Col>
      <Col xs={12} xl={3}>
        <Card title='Detection Pie Chart'>
          <ReactEcharts option={dynamicPieChartOption} notMerge={true} lazyUpdate={true} />
        </Card>
      </Col>
    </Row>
  );
};

export default React.memo(MiddleChart);
