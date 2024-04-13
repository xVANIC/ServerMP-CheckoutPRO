require("dotenv").config();
const port = process.env.PORT || 9000;
const app = require("./src/app");

app.listen(port, () => console.log(`Server listening on port ${port}`));
