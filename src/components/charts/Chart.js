import React from 'react'
import '../../../node_modules/react-vis/dist/style.css'
import {
    XYPlot,
    LineSeries,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
} from 'react-vis'

import './Chart.css'

const Chart = () => {
    const data = [
        { x: 0, y: 6 },
        { x: 1, y: 5 },
        { x: 2, y: 8 },
        { x: 3, y: 9 },
        { x: 4, y: 3.5 },
        { x: 5, y: 7 },
        { x: 6, y: 6 },
        { x: 7, y: 3 },
        { x: 8, y: 2 },
    ]
    const data2 = [
        { x: 0, y: 3 },
        { x: 1, y: 6 },
        { x: 2, y: 4 },
        { x: 3, y: 8 },
        { x: 4, y: 5 },
        { x: 5, y: 9 },
        { x: 6, y: 2 },
        { x: 7, y: 4 },
        { x: 8, y: 6 },
    ]
    const data3 = [
        { x: 0, y: 4 },
        { x: 1, y: 7 },
        { x: 2, y: 9 },
        { x: 3, y: 4.5 },
        { x: 4, y: 2.5 },
        { x: 5, y: 5 },
        { x: 6, y: 8 },
        { x: 7, y: 2 },
        { x: 8, y: 3 },
    ]

    return (
        <div className={{ marginTop: '15px' }}>
            <XYPlot height={300} width={480}>
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis />
                <YAxis />
                <LineSeries
                    data={data}
                    style={{ stroke: 'violet', strokeWidth: 5 }}
                />
                <LineSeries
                    data={data2}
                    style={{ stroke: 'red', strokeWidth: 5 }}
                />
                <LineSeries
                    data={data3}
                    style={{ stroke: 'green', strokeWidth: 5 }}
                />
            </XYPlot>
        </div>
    )
}

export default Chart
