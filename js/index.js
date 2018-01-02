//整体安全趋势图
(function(){
    var myChart = echarts.init(document.getElementById("qushi"))
    $.get('data/beijing-api.json', function (data) {
        myChart.setOption(option = {
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                data: data.map(function (item) {
                    return item[0];
                })
            },
            yAxis: {
                splitLine: {
                    show: false
                }
            },
            dataZoom: [{
                startValue: '2014-06-01'
            }, {
                type: 'inside'
            }],
            visualMap: {
                top: 0,
                right:-2,
                pieces: [{
                    gt: 0,
                    lte: 50,
                    color: '#096'
                }, {
                    gt: 50,
                    lte: 100,
                    color: '#ffde33'
                }, {
                    gt: 100,
                    lte: 150,
                    color: '#ff9933'
                }, {
                    gt: 150,
                    lte: 200,
                    color: '#cc0033'
                }, {
                    gt: 200,
                    lte: 300,
                    color: '#660099'
                }, {
                    gt: 300,
                    color: '#7e0023'
                }],
                outOfRange: {
                    color: '#999'
                }
            },
            series: {
                name: '风险状态',
                type: 'line',
                data: data.map(function (item) {
                    return item[1];
                })
            }
        });
    });
})(),
// 互联网出口攻击事件类别统计
(function(){
    var myChart = echarts.init(document.getElementById("chukou"))
    option = {
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        top:0,
        left:0,
        data: ['网络访问','HTTP攻击','扫描','溢出攻击','拒绝服务','蠕虫','WEBCGI攻击']
    },
    series : [
        {
            type: 'pie',
            radius : '55%',
            center: ['55%', '50%'],
            data:[
                {value:335, name:'WEBCGI攻击'},
                {value:210, name:'HTTP攻击'},
                {value:104, name:'扫描'},
                {value:135, name:'溢出攻击'},
                {value:1548, name:'网络访问'},
                {value:100, name:'拒绝服务'},
                {value:130, name:'蠕虫'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
    myChart.setOption(option)
})(),
// DMZ区流量趋势
(function(){
    var myChart = echarts.init(document.getElementById("DMZ"))
    var base = +new Date(1968, 9, 3);
    var oneDay = 24 * 3600 * 1000;
    var date = [];

    var data = [Math.random() * 300];

    for (var i = 1; i < 20000; i++) {
        var now = new Date(base += oneDay);
        date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
        data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
    }

    option = {
        tooltip: {
            trigger: 'axis',
            position: function (pt) {
                return [pt[0], '10%'];
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: date
        },
        yAxis: {
            type: 'value',
            boundaryGap: [0, '100%']
        },
        dataZoom: [{
            type: 'inside',
            start: 0,
            end: 10
        }, { 
            start: 0,
            end: 10,
            handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            handleSize: '90%',
            handleStyle: {
                color: '#fff',
                shadowBlur: 3,
                shadowColor: 'rgba(0, 0, 0, 0.6)',
                shadowOffsetX: 2,
                shadowOffsetY: 2
            }
        }],
        series: [
            {
                name:'流量数',
                type:'line',
                smooth:true,
                symbol: 'none',
                sampling: 'average',
                itemStyle: {
                    normal: {
                        color: 'rgb(255, 70, 131)'
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgb(255, 158, 68)'
                        }, {
                            offset: 1,
                            color: 'rgb(255, 70, 131)'
                        }])
                    }
                },
                data: data
            }
        ]
    };
    myChart.setOption(option)
})(),
// 主干网最多的攻击类型
(function(){
    var myChart = echarts.init(document.getElementById("tab_2"))
    option = {
        color: ['#3398DB'],
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : ['第一周', '第二周', '第三周', '第四周', '第五周', '第六周', '第七周'],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'攻击类型',
                type:'bar',
                barWidth: '60%',
                data:[10, 52, 200, 334, 390, 330, 220]
            }
        ]
    };
    myChart.setOption(option)
})(),
(function(){
    // 信号量
    var idx = 0;
    // 定时器
    var timer = setInterval(function(){
        idx ++;
        if(idx >= ($(".box .box-body ul li").length / 2)){
            idx = 0;
            // 瞬间移动到0
            $(".guanli2 .box .box-body ul").css("top",0);
        }
        $(".guanli2 .box .box-body ul").animate({"top": -25 * idx},1000);
    },500)
})(),
(function(){
    // 信号量
    var idx = 0;
    // 定时器
    var timer = setInterval(function(){
        idx ++;
        if(idx >= ($(".box .box-body ul li").length / 2)){
            idx = 0;
            // 瞬间移动到0
            $(".guanli3 .box .box-body ul").css("top",0);
        }
        $(".guanli3 .box .box-body ul").animate({"top": -25 * idx},1000);
    },500)
})()