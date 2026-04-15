class Config {
  constructor() {
    this.settings = {
      theme: "dark",
      language: "en",
      version: "1.0.0",
    };
  }

  static getInstance() {
    if (!Config._instance) {
      Config._instance = new Config();
    }
    return Config._instance;
  }

  get(key) {
    return this.settings[key];
  }

  set(key, value) {
    this.settings[key] = value;
  }
}


const config1 = Config.getInstance();
const config2 = Config.getInstance();

config1.set("theme", "light");

console.log(config2.get("theme")); 
console.log(config1 === config2);  