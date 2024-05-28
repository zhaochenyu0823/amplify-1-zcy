import React, { useEffect, useState } from 'react';
import { get } from 'aws-amplify/api';


// 定义一个异步函数，用于从API Gateway获取数据
async function getTodo() {
    try {
        const restOperation = get({
            apiName: 'apifb86c90f',
            path: '/todo'
        });
        const response = await restOperation.response;
        console.log('GET call succeeded: ', response);
    } catch (err) {
        if (err instanceof Error) {
            console.log('GET call failed: ' + err.message);
        } else {
            console.log('GET call failed: An unknown error occurred');
        }
    }
}


const TestApiTodo: React.FC = () => {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await getTodo();
                setData(result);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError('An unknown error occurred');
                }
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>TestAPI</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default TestApiTodo;
