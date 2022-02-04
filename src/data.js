const pages = [
    {
        id: 1,
        title: "list",
        path: "/list"
    },
    {
        id: 2,
        title: "analytics",
        path: "/analytics"
    },
    {
        id: 3,
        title: "invoice",
        path: "/invoice"
    },
    {
        id: 4,
        title: "registration",
        path: "/registration"
    },
    {
        id: 4,
        title: "mail",
        path: "/mail"
    }
]

const files = [
    {
        id: 1,
        title: "my resume",
        path: "null",
        img: "/images/doc.png",
        name: "arthur gonzales"
    },
    {
        id: 2,
        title: "weather api",
        path: "null",
        img: "/images/json.png",
        name: "ashura ark"
    },
    {
        id: 3,
        title: "passport image",
        path: "null",
        img: "/images/pdf.png",
        name: "sunny islam"
    }
]

const contacts = [
    {
        id: 1,
        title: "michella niez",
        path: "null",
        img: "/images/pic1.png",
        mail: "michella-niez@gmail.com"
    },
    {
        id: 2,
        title: "vivek roy",
        path: "null",
        img: "/images/pic2.png",
        mail: "vivek-roy@yahoo.com"
    },
    {
        id: 3,
        title: "rave vermillion",
        path: "null",
        img: "/images/pic3.png",
        mail: "rave@hotmail.com"
    },
    {
        id: 4,
        title: "arthur law",
        path: "null",
        img: "/images/pic4.png",
        mail: "arthur-law@gmail.com"
    }
]

const customAngleChart = {
  series: [86],
  options: {
    stroke: {
      lineCap: "round"
    }, 
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "vertical",
        gradientToColors: ["#df3636", "#ee7a7a"],
        stops: [0, 100]
      }
    },
    chart: {
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        track:{
          background: '#ebebeb',
          strokeWidth: '55%',
        },
        offsetY: 0,
        startAngle: -155,
        endAngle: 155,
        hollow: {
          margin: 10,
          size: '75%',
          background: 'transparent',
          image: undefined,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show:true,
            fontSize: '34px',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 500,
            color: "#6b6b6b",
          }
        }
      }
    },
    colors: ['#ee7a7a'],
  },
}

const radialBarChart = {
  series1: [54],
  series2: [8.6],
  series3: [25.7],
  series4: [6.8],
  series5: [13.5],

  options: {
    colors1: ['#e44444'],
    colors2: ['#64e444'],
    colors3: ['#4477e4'],
    colors4: ['#b144e4'],
    colors5: ['#d9e444'],
    stroke: {
      lineCap: "round"
    }, 
    grid: {
      padding: {
          top: -15,
          bottom: -15
      }
  },
    chart: {
      height: 350,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        track:{
          background: '#ebebeb',
        },
        hollow: {
          size: '23%'
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show:false,
          }
        }
      },
    },
  },
}

const doubleBarChart = {
  series: [{
    data: [100, 200, 300, 250, 100, 80, 170, 220, 100]
  },
  {
    data: [-160, -100, -90, -200, -130, -80, -110, -90, -130]
  }
  ],
  options: {
    legend: {
      show: false,
  },
    chart: {
      type: 'bar',
      stacked: true,
      toolbar: {
        show: false
    }
    },
    colors: ['#2563eb', '#fb923c'],
    plotOptions: {
      bar: {
        borderRadius: [10,10],
        columnWidth: '52%',
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 8,
      colors: ["#fff"]
    },
    
    grid: {
    show: false,
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      axisBorder:{
        show: false
    },
    labels:{
      style: {
        colors: ['#6e6b7b'],
        fontSize: '12px',
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 400,
        cssClass: 'apexcharts-xaxis-label',
    }
    }
    },
    yaxis: {
      min: -200,
      max: 300,
      tickAmount: 5,
      labels: {
        formatter: function (y) {
          return y.toFixed(0);
        },
        style: {
          colors: ['#6e6b7b'],
          fontSize: '12px',
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 400,
          cssClass: 'apexcharts-xaxis-label',
      }
      }
    },
  tooltip: {
    enabled: false,
  },
}
}

const barChart = {
    series: [{
        data: [1100,8000,2000,1000,3000]
      },
      {
        data: [1300,1300,1300,1300,1300]
      }],
      options: {
        chart: {
          type: 'bar',
          stacked: true,
          stackType: '100%',
          toolbar: {
              show: false
          }
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            columnWidth: '22%',
          }
        },
        colors: ['#f39c12', '#dfe6e9'],
        dataLabels: {
          enabled: false
        },
        xaxis:{
            labels:{
                show: false
            },
            axisBorder:{
                show: false
            }
        },
        yaxis: {
          show: false,
        },
        legend: {
            show: false,
        },
        tooltip: {
            enabled: false,
        },
        grid:{
            show: false
        },
      },
    }

const dashesLineChart = {
    series1: [{
      name: "Session Duration",
      data: [23, 20, 25, 22, 23, 19, 26, 22, 21.6, 18, 23]
    },
    {
      name: "Page Views",
      data: [17, 14, 19, 16, 17, 13, 20, 14, 14.8, 12, 17]
    },
  ],
  series2: [{
    data: [14, 16, 18, 16, 15, 18, 17, 19, 16]
  },
  {
    data: [11, 13, 15, 13, 12, 15, 14, 16, 13]
  }
  ],
  series3: [{
    data: [20, 22, 25, 23, 24, 21, 22, 20, 22]
  },
  {
    data: [16, 18, 21, 19, 20, 17, 18, 16, 18]
  }
  ],
options: {
  colors: ['#2563eb', '#d8d8d8'],
  chart: {
    type: 'line',
    zoom: {
      enabled: false
    },
    toolbar:{
      show: false
  },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: [2, 1.2],
    curve: 'smooth',
    dashArray: [0, 5]
  },
  xaxis: {
    labels:{
      show: false
  },
  axisBorder:{
      show: false
  }
  },
  yaxis: {
    show: false,
},
legend: {
    show: false,
},
  tooltip: {
    enabled: false,
  },
  grid: {
    show: false,
  }
},

}

const lineChart = {
    series: [{
        name: "series-1",
        data: [10, 31, 17, 38, 22, 48]
    }],
    options: {
      chart: {
        type: 'line',
        zoom: {
          enabled: false
        },
        toolbar:{
            show: false
        },
      },
      colors: ['#00d2d3'],
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight',
        width: 3.5
      },
      grid: {
        show: true,
        strokeDashArray: 5,
        xaxis: {
            lines: {
              show: true,
            }
          },
          yaxis: {
            lines: {
              show: false,
            }
          },
      },
      xaxis:{
        labels:{
            show: false
        },
        axisBorder:{
            show: false
        }
    },
    yaxis: {
        show: false,
    },
    legend: {
        show: false,
    },
    tooltip: {
        enabled: true,
        x: {
            show: false,
        },
    },
    markers: {
        size: 2.3,
        strokeColors: '#00d2d3',
        colors: '#00d2d3',
        hover: {
            size: 2.3,
            sizeOffset: 3
        },
        discrete: [{
            seriesIndex: 0,
            dataPointIndex: 5,
            fillColor: '#fff',
            strokeColor: '#00d2d3',
            size: 5,
            shape: "circle"
        }],
    }
    },
}

const pieChart = {
    series: [31, 53, 16],
    options: {
        stroke: {
            width: 0
        },
        labels: ['Product', 'App', 'Service'],
      chart: {
        type: 'donut',
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show:false
      },
      plotOptions: {
        pie: {
          customScale: 1.1,
          donut: {
            size: '60%',
            labels: {
                show: true,
                name: {
                    show: true,
                    fontSize: '12px',
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 400,
                    color: "#95a5a6",
                    offsetY: 14,
                    formatter: function (val) {
                      return val
                    }
                },
                value: {
                    show: true,
                    fontSize: '16px',
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 600,
                    color: "#576574",
                    offsetY: -16,
                    formatter: function (val) {
                        return val + "%"
                    }
                },
                total: {
                    show: true,
                    label: 'App',
                    fontSize: '12px',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontWeight: 400,
                    color: '#95a5a6',
                    formatter: function (w) {
                      return w.globals.seriesTotals.reduce((a, b) => {
                        return"53%"
                      }, 0)
                    }
                }
              }
          }
        },
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
        }
      }]
    },
  
}

const role = ['Select Role', 'Admin', 'Author', 'Editor', 'Maintainer', 'Subscriber']

export {contacts, files, pages, barChart, lineChart, pieChart, doubleBarChart, dashesLineChart, customAngleChart, radialBarChart, role}