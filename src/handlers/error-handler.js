process.on("uncaughtException", (err, origin) => {
    console.log(`Caught exception: ${err}\n` + `Exception origin: ${origin}`);
  });
process.on("unhandledRejection", (reason, promise) => {
    console.log("Unhandled Rejection at:", promise, "reason:", reason);
});