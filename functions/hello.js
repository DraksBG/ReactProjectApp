
exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    body: 'HELLOO WORLD'
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
}