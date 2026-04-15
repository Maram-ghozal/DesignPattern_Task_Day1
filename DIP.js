
class Logger {
  log(msg) { throw new Error("log() not implemented"); }
}


class FileLogger extends Logger {
  log(msg) { console.log(`[FILE] ${msg}`); }
}

class ConsoleLogger extends Logger {
  log(msg) { console.log(`[CONSOLE] ${msg}`); }
}

class CloudLogger extends Logger {
  log(msg) { console.log(`[CLOUD] ${msg}`); }
}


class App {
  constructor(logger) { 
    if (!(logger instanceof Logger)) {
      throw new Error("Must provide a Logger instance");
    }
    this.logger = logger;
  }

  run() {
    this.logger.log("App is running...");
  }
}


new App(new FileLogger()).run();
new App(new ConsoleLogger()).run();
new App(new CloudLogger()).run();