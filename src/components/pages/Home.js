import React, { useEffect, useState } from 'react'
import LoginForm from '../forms/LoginForm'
import StatsSection from '../sections/StatsSection'

export default function Home() {

    const [data, setData] = useState()

    useEffect(() => {

        const getDashboardStats = async () => {

            let body = {
                jsonrpc: '2.0',
                id: Math.random().toString(36).slice(2),
                method: 'getDashboardStats'
              }
          
              const response = await fetch('https://cors-anywhere.herokuapp.com/https://api.test.treeo2.org/rpc', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json, charset=utf-8',
                    'X-AppType': 'Partner'
                },
                body: JSON.stringify(body)
              });

              const data = await response.json();
              console.log('Data')
              console.log(data)
              setData(data.result)
              sessionStorage.setItem('getDashboardStats', JSON.stringify(data.result));

            }
            getDashboardStats()

        }, [])

    return (
        <div>
             <LoginForm />
             <StatsSection data={data} />
        </div>
    )
}
