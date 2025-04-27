import React, { useEffect, useRef } from 'react';

function ComplexCalcResults({ values, chartName, xAxisName, yAxisName }) {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    function loadChartJs(callback) {
      if (window.Chart) {
        callback();
        return;
      }
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
      script.onload = callback;
      document.body.appendChild(script);
    }

    if (Array.isArray(values) && values.length > 0 && chartRef.current) {
      loadChartJs(() => {
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }
        chartInstance.current = new window.Chart(chartRef.current, {
          type: 'line',
          data: {
            labels: values.map((_, idx) => idx + 1),
            datasets: [
              {
                label: yAxisName || 'Values',
                data: values,
                fill: false,
                borderColor: 'rgba(75,192,192,1)',
                tension: 0.3,
              },
            ],
          },
          options: {
            responsive: true,
            plugins: {
              title: {
                display: !!chartName,
                text: chartName,
              },
            },
            scales: {
              x: {
                title: {
                  display: !!xAxisName,
                  text: xAxisName,
                },
              },
              y: {
                title: {
                  display: !!yAxisName,
                  text: yAxisName,
                },
              },
            },
          },
        });
      });
    }
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [values, chartName, xAxisName, yAxisName]);

  return (
    <div>
      <h4>Complex Calculation Results</h4>

      <div style={{ marginTop: '2rem' }}>
        <canvas id="complexChart" ref={chartRef} width={400} height={200} />
        {Array.isArray(values) && values.length > 0 ? null : (
          <span>Results will appear here...</span>
        )}
      </div>
    </div>
  );
}

export default ComplexCalcResults;
