# rabbitmq-learnings

Learning rabbitmq for my work in propertyguru. Come lets learn together 🕺

### What is RabbitMQ?

RabbitMQ is a message broker which is used to send and receive messages. It is open source and widely used in the industry. It is written in Erlang and implements Advanced Message Queuing Protocol (AMQP).

### What is RMQ queue exchange?

RabbitMQ is a message broker that accepts and forwards messages. The producer is the user application that sends messages. A queue is the buffer that stores messages. A consumer is the user application that receives messages. The exchange is the routing agent that forwards messages to queues.

### What is producer and consumer in RabbitMQ?

Producer: A producer is an application that sends a message. A message can include any kind of information. It could, for example, contain information about an order, a task, an event, or any other kind of data. It could also be empty.

Consumer: A consumer is an application that receives messages. Consuming a message is also known as subscribing to a queue. In general, a queue can have multiple consumers, that is, multiple applications that receive messages from a queue.

---

## Steps to run RabbitMQ in local

```
# Pull the rabbitmq image from docker hub
docker pull rabbitmq

# Run the rabbitmq image
docker run --name rmq -p 5672:5672 -p 15672:15672 -e RABBITMQ_DEFAULT_USER=user -e RABBITMQ_DEFAULT_PASS=password rabbitmq

# Enabling the management plugin
docker exec -it rmq
rabbitmq-plugins enable rabbitmq_management

# Access the rabbitmq management console
http://localhost:8080

# Username and password for the management console
username: guest
password: guest

```

## Node JS application

#### Pre-requisite:

1. NodeJS
2. Install amqplib package
