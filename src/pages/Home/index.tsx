import React, { memo } from 'react';
import { Row, Col, Button, List, Card } from 'tdesign-react';
import { IconFont } from 'tdesign-icons-react';
import { BrowserRouterProps } from 'react-router-dom';
import ReactEcharts from 'echarts-for-react';
import { TEAMS } from './consts';
import { visitData } from './chart';
import ProductA from 'assets/svg/assets-product-1.svg?component';
import ProductB from 'assets/svg/assets-product-2.svg?component';
import ProductC from 'assets/svg/assets-product-3.svg?component';
import ProductD from 'assets/svg/assets-product-4.svg?component';
import useDynamicChart from 'hooks/useDynamicChart';

import styles from './index.module.less';

const { ListItem, ListItemMeta } = List;

const Home: React.FC<BrowserRouterProps> = () => {
  const chartData = useDynamicChart(visitData, {
    placeholderColor: ['legend.textStyle.color', 'xAxis.axisLabel.color', 'yAxis.axisLabel.color'],
  });
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col xs={12} lg={12} xl={9}>
          <Card className={styles.welcome}>
            <Row justify='space-between'>
              <Col className={styles.name}>
                Hi! <span className={styles.regular}>Good afternoon, today is your 100th day with this website.</span>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col xs={12} lg={12} xl={3}>
          <Card className={styles.welcome}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/MtGUTs_HgcE"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen>
            </iframe>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default memo(Home);
