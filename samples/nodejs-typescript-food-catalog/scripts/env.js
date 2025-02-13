const fs = require("fs");
const path = require("path");

console.log("Ensuring env files exist...");

const envPath = path.join(__dirname, "..", "env");
const envs = [
  {
    name: ".env.local",
    content: `TEAMSFX_ENV=local\nAPP_NAME=Foodsie\nTUNNEL_ID=\nNOTIFICATION_ENDPOINT=\nNOTIFICATION_DOMAIN=\n`,
  },
  {
    name: ".env.local.user",
    content: `SECRET_ENTRA_APP_CLIENT_SECRET=`,
  },
  {
    name: ".env.dev",
    content: `TEAMSFX_ENV=dev\nAPP_NAME=Foodsie\nRESOURCE_SUFFIX=`,
  },
  {
    name: ".env.dev.user",
    content: `SECRET_ENTRA_APP_CLIENT_SECRET=`,
  },
];

envs.forEach((env) => {
  const envFilePath = path.join(envPath, env.name);
  if (!fs.existsSync(envFilePath)) {
    fs.mkdirSync(envPath, { recursive: true });
    fs.writeFileSync(envFilePath, env.content);
  }
});

console.log("Done!");
