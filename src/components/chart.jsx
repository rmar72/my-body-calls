import React, { useState } from 'react';
import './chart.css';
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import MyPDF from './myPdf';
import ModalView from '../utils/modal';

const foo = [...Array(31).keys()];

const foo2 = [...Array(23).keys()];

var symptomsList = [
  {
    key: 0,
    description: 'sharp left chest pain'
  },
  {
    key: 1,
    description: 'sharp right chest pain'
  },
  {
    key: 2,
    description: 'sharp center chest pain'
  },
  {
    key: 3,
    description: 'solar plexus pain'
  },
  {
    key: 4,
    description: 'lodged feeling throat'
  },
  {
    key: 5,
    description: 'costocondrithis tenderness'
  },
  {
    key: 6,
    description: 'radiating heart burn'
  },
  {
    key: 7,
    description: 'acid reflux shooting up throat'
  },
  {
    key: 8,
    description: 'fatigue'
  },
  {
    key: 9,
    description: 'nausea/lightheadedness/dizziness'
  },
  {
    key: 10,
    description: 'migraine'
  },
  {
    key: 11,
    description: 'burning left chest pain'
  },
  {
    key: 12,
    description: 'burning right chest pain'
  },
  {
    key: 13,
    description: 'burning center chest pain'
  },
  {
    key: 14,
    description: 'throbbing left hand pain'
  },
  {
    key: 15,
    description: 'throbbing right hand pain'
  },
  {
    key: 16,
    description: 'throbbing left foot pain'
  },
  {
    key: 17,
    description: 'throbbing right foot pain'
  },
  {
    key: 18,
    description: 'burning upper left back/shoulder back sensation'
  },
  {
    key: 19,
    description: 'burning upper right back/shoulder sensation'
  },
  {
    key: 20,
    description: 'burning upper center back sensation'
  },
  {
    key: 21,
    description: 'pulled muscle ache'
  },
  {
    key: 22,
    description: 'stomach burn discomfort'
  },
  {
    key: 23,
    description: 'illness feeling when swallowing saliva'
  },
  {
    key: 24,
    description: 'fake mind pain'
  },
];

function Chart() {
  const [pdfPreview, setpdfPreview] = useState(false);

  return (
    <div className="chart" style={{width: '99%'}}>
      <button onClick={() => setpdfPreview(true)}>Preview PDF</button>
      <h1>Chart</h1>
      <table style={{width: '99%'}}>
        <thead style={{width: 500}}>
          <tr>
            {
              foo.map((day, i) => (
                <th 
                  key={`elem-${i}`}
                  className="chart-day"
                  style={{width: 5}}
                >
                  {
                    (day === 0 && 'Symptoms') || day
                  }
                </th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {
             symptomsList.map( ({description: symptom}, index) => 
              (
                <tr key={`elemcol-${index}`}>
                  {
                    foo.map((day, i) => (
                      <td 
                        key={`elem-${i}`}
                        className="chart-day"
                        style={{textAlign: 'center'}}
                      >
                        {
                          (day === 0 && symptom) || (<input type="checkbox" />)
                        }
                      </td>
                    ))
                  }
                </tr>
              )
            )
          }
        </tbody>
      </table>
      
      {pdfPreview &&
        <div>
          <ModalView 
            title="PDF Preview"
            closePreview={() => setpdfPreview(false)}
            renderContent={() => {
              return (
                <div>
                  <PDFViewer style={{width: 850, height: 500}}>
                    <MyPDF />
                  </PDFViewer>
                  {/* <div>
                    <PDFDownloadLink document={<MyPDF />} fileName="pdfSample.pdf">
                      {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
                    </PDFDownloadLink>
                  </div> */}
                </div>
              )
            }}
          />
        </div>
      }
    </div>
  );
}

export default Chart;