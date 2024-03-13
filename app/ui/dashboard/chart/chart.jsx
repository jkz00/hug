"use client";
import styles from './chart.module.css';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: 'Gennaio',
      completate: 4000,
      rifiutate: 2400,
      
    },
    {
      name: 'Febbraio',
      completate: 3000,
      rifiutate: 1398,
    },
    {
      name: 'Marzo',
      completate: 2000,
      rifiutate: 9800,
    },
    {
      name: 'Aprile',
      completate: 2780,
      rifiutate: 3908,
    },
    {
      name: 'Maggio',
      completate: 1890,
      rifiutate: 4800,
    },
    {
      name: 'Giugno',
      completate: 2390,
      rifiutate: 3800,
    },
    {
      name: 'Luglio',
      completate: 3490,
      rifiutate: 4300,
    },
    {
      name: 'Agosto',
      completate: 3490,
      rifiutate: 4300,
    },
    {
      name: 'Settembre',
      completate: 3490,
      rifiutate: 4300,
    },
    {
      name: 'Ottobre',
      completate: 3490,
      rifiutate: 4300,
      insoluto: 30,
    },
    {
      name: 'Novembre',
      completate: 3490,
      rifiutate: 4300,
    },
    {
      name: 'Dicembre',
      completate: 3490,
      rifiutate: 4300,
    },
  ];

const Chart = () => {
    return(
        <div className={styles.container}>
            <h2 className={styles.title}>Grafico Mensile</h2>
            <ResponsiveContainer width="100%" height="90%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}>

                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip contentStyle={{background: "#151c2c", border:"none"}} />
                    <Legend />
                    <Line type="monotone" dataKey="rifiutate" stroke="#8884d8" strokeDasharray="5 5" />
                    <Line type="monotone" dataKey="completate" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
                    <Line type="monotone" dataKey="insoluto" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
export default Chart;