import express from "express";
import cluster from "cluster";
import os from "os";
export const app = express();
const numCPUs = os.cpus().length;

if (cluster.isPrimary) {
    console.log(`Master ${process.pid} is running`);

    // Fork workers.
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
} else {
    app.get("/", (req, res) => {
        res.send("Hello World");
    });

    app.get("/cpu", (req, res) => {
        for (let i = 0; i < 1000000000; i++) {
            Math.random();
        }
        res.send("Hello cpu: "+process.pid);
    });

    app.get("/host", (req, res) => {
        res.send(os.hostname() + " Woker id: " + process.pid);
    });

    app.listen(3000, () => {
        console.log(`Worker ${process.pid} started`);
    });
}