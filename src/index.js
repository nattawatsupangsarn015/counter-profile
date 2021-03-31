const express = require("express");
const router = express();
const cors = require("cors");

const PORT = 8080;

router.use(express.json());
router.use(express.urlencoded({ extended: true }));
router.use(cors({ origin: true, credentials: true }));
router.options("*", cors());

router.use("/get", require("./routes/get"));
router.use("/post", require("./routes/post"));

router.listen(PORT, () => {
  console.log(`Start server with port : ${PORT}`);
});
