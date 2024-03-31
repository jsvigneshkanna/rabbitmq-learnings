import amqplib from "amqplib";

const consume = async (queue) => {
  const url = "amqp://user:password@localhost";

  const connection = await amqplib.connect(url);
  const channel = await connection.createChannel();
  const result = await channel.assertQueue(queue, { durable: true });
  console.log(`Waiting for messages in queue: ${queue}`);
  channel.consume(queue, (message) => {
    console.log(`Message received: ${message.content.toString()}`);
    channel.ack(message);
  });
};

consume("testQueue");
