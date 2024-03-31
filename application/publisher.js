import amqplib from "amqplib";

const publish = async (queue, message) => {
  const url = "amqp://user:password@localhost";

  const connection = await amqplib.connect(url);
  const channel = await connection.createChannel();
  const result = await channel.assertQueue(queue, { durable: true });
  channel.sendToQueue(queue, Buffer.from(message), { persistent: true });
  console.log(`Message sent to queue: ${queue}`);
  setTimeout(() => {
    connection.close();
  }, 1000);
};

publish("testQueue", "vigmesh");
