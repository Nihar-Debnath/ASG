import express from "express";
import cluster from "cluster";
import os from "os";
export const app = express();
const numCPUs = os.cpus().length;

if (cluster.isPrimary) {
    console.log(`Master ${process.pid} is running`);

    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
} else {
    app.get("/", (req, res) => {
        res.send("Hello user");
    });

    app.get("/healthcheck", (req, res) => {
        res.send("The server is working fine");
    });

    app.get("/cpu", (req, res) => {
        for (let i = 0; i < 1000000000; i++) {
            Math.random();
        }
        res.send("Hello cpu");
    });

    app.get("/host", (req, res) => {
        res.send("Hostname: "+os.hostname() + " Woker id: " + process.pid);
    });

    app.listen(3000, () => {
        console.log(`Worker ${process.pid} started`);
    });
}