// 'use client';


import { Card } from '@tremor/react';
import { useSelector } from 'react-redux';
import useStockCall from '../hook/useStockCall';
import { useEffect } from 'react';
function classNames(...classes) { return classes.filter(Boolean).join(' '); }
const data = [

    { name: 'Recurring revenue', value: '$34.1K', change: '+6.1%', changeType: 'positive', },
    { name: 'Total users', value: '500.1K', change: '+19.2%', changeType: 'positive', },
    { name: 'User growth', value: '11.3%', change: '-1.2%', changeType: 'negative', },];

const KpiCards = () => {
    const { sales } = useSelector(state => state.stock)
    console.log(sales)



    return (
        <>
            <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {data.map((item) => (<Card key={item.name}>
                    <dd className="flex items-start justify-between">              <span className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
                        {item.value}
                    </span>
                        <span className={classNames(item.changeType === 'positive' ? 'text-emerald-700 dark:text-emerald-500' : 'text-red-700 dark:text-red-500', 'text-tremor-default font-medium',)}              >
                            {item.change}
                        </span>
                    </dd>
                    <dt className="mt-1 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                        {item.name}
                    </dt>
                </Card>))}
            </dl>
        </>);
}
export default KpiCards;