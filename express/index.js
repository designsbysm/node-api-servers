const dotenv = require("dotenv");
const app = require("./app");

dotenv.config();
const port = process.env.PORT;

// console.log(Array.map);

// const result = [1, 2, 3, 4, 5]
//   |> Array.filter(#, v => v % 2 === 0)
//   |> Array.map(#, v => v + 1)
//   |> Array.slice(#, 0, 3)
//   |> Array.from;

app.listen(port, () => console.info("express server listening on %s", port));
