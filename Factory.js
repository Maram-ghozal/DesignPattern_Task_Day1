class Notification {
  send(message) { throw new Error("send() not implemented"); }
}

class EmailNotification extends Notification {
  send(message) { console.log(`Email: ${message}`); }
}

class SMSNotification extends Notification {
  send(message) { console.log(`SMS: ${message}`); }
}

class PushNotification extends Notification {
  send(message) { console.log(`Push: ${message}`); }
}

class NotificationFactory {
  static create(type) {
    const types = {
      email: EmailNotification,
      sms:   SMSNotification,
      push:  PushNotification,
    };

    const NotificationClass = types[type.toLowerCase()];

    if (!NotificationClass) {
      throw new Error(`Unknown notification type: "${type}"`);
    }

    return new NotificationClass();
  }
}


NotificationFactory.create("email").send("Welcome aboard!");
NotificationFactory.create("sms").send("Your OTP is 4821");
NotificationFactory.create("push").send("You have a new message");