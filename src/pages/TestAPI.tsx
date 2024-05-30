import React, { useEffect, useState } from 'react';
import { get, put, post } from 'aws-amplify/api';

const apiName = 'apifb86c90f';

// 定义一个异步函数，用于从API Gateway获取数据
async function getTodo() {
  try {
    const restOperation = get({
      apiName: apiName,
      path: '/todo/3456',
      options: {
        queryParams: {
          id: '123'
        }
      }
    });
    const { body } = await restOperation.response;
    const response = await body.json();

    console.log('GET call succeeded: ', response);

    return response;
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

  const postTodo = async () => {
    try {
      const restOperation = post({
        apiName: apiName,
        path: '/todo',
        options: {
          body: {
            message: 'Mow the lawn'
          }
        }
      });
      const { body } = await restOperation.response;
      const response = await body.json();
      setData(response);

      console.log('POST call succeeded: ', response);
    } catch (e) {
      if (e instanceof Error) {
        console.log('POST call failed: ', e.message);
      } else {
        setError('An unknown error occurred');
      }
    }
  };

  const updateTodo = async () => {
    try {
      const todo = { name: 'My first todo', message: 'Hello world!' };
      const restOperation = put({
        apiName: apiName,
        path: '/todo/1',
        options: {
          body: todo
        }
      });
      const { body } = await restOperation.response;
      const response = await body.json();
      setData(response);
      
      console.log('PUT call succeeded: ', response);
    } catch (e) {
      if (e instanceof Error) {
        console.log('PUT call failed: ', e.message);
      } else {
        setError('An unknown error occurred');
      }
    }
  };

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
      <button onClick={updateTodo}>Update Todo</button>
      <button onClick={postTodo}>Test Post Todo</button>
    </div>
  );
};

export default TestApiTodo;
