import express from "express"

const router = express.Router();

router.post("/signup");
router.post("/login");
router.post("/logout");
router.get("/current");


export default router;