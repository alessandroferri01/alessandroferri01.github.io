'use client'

import React from "react";

//Chart
import { Radar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
  } from 'chart.js';

//Utils
import { generalSkills } from "@/utils/generalSkills";

//Custom Hooks
import { useIsMobile } from "@/hooks/useIsMobile";

export default function RadarSkills() {
    const isMobile = useIsMobile()

    ChartJS.register(
        RadialLinearScale,
        PointElement,
        LineElement,
        Filler,
        Tooltip,
        Legend
    );

    const options = {
        scales: {
          r: {
            min: 0,
            max: 10,
            ticks: {
                beginAtZero: true,
                stepSize: 1,
                color: 'white',
                backdropColor: '#6600cc',
            },
            angleLines: {
              display: true,
              color: '#6600cc'
            },
            grid: {
              color: '#6600cc'
            },
            pointLabels: {
              color: '#00b3e6',
              font: {
                size: 14
              },
              display: !isMobile
            },
          }
        },
        plugins: {
            legend: {
              display: false
            }
          }
      };

    return (
        <div style={{width: "100%"}}>
            <Radar data={generalSkills} options={options}/>
        </div>
    )
}