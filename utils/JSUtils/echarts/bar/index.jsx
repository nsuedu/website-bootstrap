import React, { Component } from 'react'
import PropTypes from 'prop-types'
// 引入 ECharts 主模块
var echarts = require('echarts/lib/echarts');
// 引入柱状图
require('echarts/lib/chart/bar');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
require('echarts/lib/component/legend');

export default class Index extends Component {
    static propTypes = {
        //prop: PropTypes
    }
    componentDidMount() {
        this.initData();
    }
    initData() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(this.refs.barReact);
        // 绘制图表
        myChart.setOption({
            title: {
                text: "硬盘",
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            
            color:["dodgerblue","lightskyblue"],
            legend: {
                //orient: 'horizontal',
                right: 30,
                data: ['已使用(GB)','总数(GB)']
               
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value'
            },
            yAxis: {
                type: 'category',
                data: ['硬盘1', '硬盘2', '硬盘3', '硬盘4', '硬盘5', '硬盘6']
            },
            series: [
                {
                    name: '已使用(GB)',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight'
                        }
                    },
                    data: [3200, 3002, 3001, 3304, 3900, 3300,]
                },
                {
                    name: '总数(GB)',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight'
                        }
                    },
                    data: [1200, 1302, 1001, 1304, 2000, 3700,]
                },
              
            ]
        });
    }


    render() {
        return (
            <div ref="barReact" style={{ width: "100%", height: 600 }}></div>
        )
    }
}
