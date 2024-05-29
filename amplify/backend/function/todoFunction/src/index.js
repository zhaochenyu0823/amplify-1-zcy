

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);

    const params = event.queryStringParameters;
    const prthParams=event.pathParameters;
    const response = {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*', // 或者具体的域名
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Allow-Methods': 'OPTIONS,GET,POST,PUT,DELETE', // 确保包含您需要的所有方法
        },
        body: JSON.stringify({
            message: 'Hello from Lambda! ZCY',
            receivedParamsId:params.id,
            receivedParams: params,
            prthParams:prthParams
        }),
      };
      return response;
};
