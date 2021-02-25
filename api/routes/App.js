const express = require("express");

// const {getJobFilters} = require("../controllers/jobs/filters");
const {getStudents, createStudent, updateStudent, deleteStudent} = require("../controllers/users/students");

const router = express.Router();

//users
router.get("/students", getStudents);
router.post("/students",  createStudent);
router.patch("/students/:id", updateStudent);
router.delete("/students/:id", deleteStudent);

module.exports = router;
