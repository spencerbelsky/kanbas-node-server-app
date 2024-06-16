
import * as dao from "./dao.js";

export default function CourseRoutes(app) {

  const createCourse = async (req, res) => {
    const course = await dao.createCourse(req.body);
    res.json(course);
  }

  const deleteCourse = async (req, res) => {
    const status = await dao.deleteCourse(req.params.courseId);
    res.json(status);
  }

  const findAllCourses = async (req, res) => {
    const courses = await dao.findAllCourses();
    res.json(courses);
  }

  const findCourseById = async (req, res) => {
    const course = await dao.findCourseById(req.params.courseId);
    res.json(course);
  }

  const updateCourse = async (req, res) => {
    const { courseId } = req.params;
    const status = await dao.updateCourse(courseId, req.body);
    res.json(status);
  }

  const findCourseNumber = async (req, res) => {
    const { courseId } = req.params;
    const courseNumber = await dao.findCourseNumber(courseId);
    res.json(courseNumber);
  }

  app.post("/api/Courses", createCourse);
  app.delete("/api/Courses/:courseId", deleteCourse);
  app.get("/api/Courses", findAllCourses);
  app.get("/api/Courses/:courseId", findCourseById);
  app.put("/api/Courses/:courseId", updateCourse);
  app.get("/api/Courses/:courseId/CourseNumber", findCourseNumber);
}

 

// import Database from "../Database/index.js";
// export default function CourseRoutes(app) {

//     app.delete("/api/courses/:id", (req, res) => {
//         const { id } = req.params;
//         Database.courses = Database.courses.filter((c) => c._id !== id);
//         res.sendStatus(204);
//       });    

//     app.post("/api/courses", (req, res) => {
//         const course = {
//             ...req.body,
//             _id: new Date().getTime().toString()
//         };
//         Database.courses.push(course);
//         res.send(course);
//     });

//     app.get("/api/courses", (req, res) => {
//         const courses = Database.courses;
//         res.send(courses);
//     });
    
//   app.put("/api/courses/:id", (req, res) => {
//     const { id } = req.params;
//     const course = req.body;
//     Database.courses = Database.courses.map((c) =>
//       c._id === id ? { ...c, ...course } : c
//     );
//     res.sendStatus(204);
//   });

// }
