# IoT Sensor Backend Service (Node.js + MongoDB + MQTT)

## 📌 Project Overview

This project is a Node.js backend service built as part of a pre-assessment assignment.  
It ingests IoT sensor temperature readings, stores them in MongoDB Atlas, and exposes REST APIs to retrieve the latest reading for a given device.  

Additionally, the project implements an **MQTT subscriber** to consume real-time sensor data published on MQTT topics and persist it automatically to the database.

---

## 🚀 Features

- REST API to ingest sensor temperature data
- REST API to fetch the latest reading per device
- MongoDB Atlas integration using Mongoose
- Input validation for required fields
- Automatic timestamp handling
- MQTT subscriber for real-time IoT ingestion (Bonus Task)
- Clean and modular project structure

---

## 🛠️ Tech Stack

- **Node.js** (v18+)
- **Express.js**
- **MongoDB Atlas**
- **Mongoose**
- **MQTT.js**
- **MQTTX (for testing MQTT)**
- **Postman (for API testing)**

---

## 📂 Project Structure

iot-backend/
│
├── src/
│ ├── models/
│ │ └── SensorReading.js
│ ├── routes/
│ │ └── sensorRoutes.js
│ ├── mqttSubscriber.js
│ └── app.js
│
├── server.js
├── .env
├── package.json
├── README.md
└── node_modules/

# IoT Backend System

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone <your-github-repo-url>
cd iot-backend