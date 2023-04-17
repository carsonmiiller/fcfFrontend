import React, { memo } from 'react';
import { Row, Col, Button, List, Card } from 'tdesign-react';
import { IconFont } from 'tdesign-icons-react';
import { BrowserRouterProps } from 'react-router-dom';
import ReactEcharts from 'echarts-for-react';
import { TEAMS } from './consts';
import { visitData } from './chart';
import useDynamicChart from 'hooks/useDynamicChart';

import styles from './index.module.less';

const { ListItem, ListItemMeta } = List;

const User: React.FC<BrowserRouterProps> = () => {
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
          <Card
            className={styles.userinfo}
            title='Personal Information'
            actions={
              <Button shape='square' theme='default' variant='text'>
                <IconFont name='edit' />
              </Button>
            }
            header
          >
            <Row gutter={[16, 16]}>
              <Col span={3}>
                <div className={styles.label}>Phone number</div>
                <div className={styles.value}>+1 123 456 7890</div>
              </Col>
              <Col span={3}>
                <div className={styles.label}>Email</div>
                <div className={styles.value}>xxx@gmail.com</div>
              </Col>
            </Row>
            <Row gutter={[16, 16]}>
              <Col span={3}>
                <div className={styles.label}>Management Subjects</div>
                <div className={styles.value}>Richie Company</div>
              </Col>
              <Col span={3}>
                <div className={styles.label}>Immediate supervisor</div>
                <div className={styles.value}>Michael Wang</div>
              </Col>
              <Col span={3}>
                <div className={styles.label}>Role</div>
                <div className={styles.value}>Frontend Developer</div>
              </Col>
              <Col span={3}>
                <div className={styles.label}>Onboarding Date</div>
                <div className={styles.value}>2021-07-01</div>
              </Col>
            </Row>
          </Card>
          <Card className={styles.statistics} title='Home page access data' subtitle='(Click)' header>
            <ReactEcharts option={chartData} notMerge={true} lazyUpdate={true} style={{ height: 360, marginTop: 16 }} />
          </Card>
        </Col>
        <Col xs={12} lg={12} xl={3}>
          <Card className={styles.postmsg}>
            <div className={styles.avatar}>
              <span>T</span>
            </div>
            <div className={styles.name}>My Account</div>
            <div className={styles.position}>Frontend Developer</div>
          </Card>
          <Card
            className={styles.teams}
            title='Team Members'
            header
            actions={
              <Button shape='square' theme='default' variant='text'>
                <IconFont name='edit' />
              </Button>
            }
          >
            <List split={false}>
              {TEAMS.map((item) => (
                <ListItem key={item.id}>
                  <ListItemMeta title={item.name} description={item.position} image={item.avatar} />
                </ListItem>
              ))}
            </List>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default memo(User);
