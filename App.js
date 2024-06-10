import express from 'express'
import Hello from "./Hello.js"
import Lab5 from './Labs/Lab5/index.js'
import CourseRoutes from './Kanbas/Courses/routes.js'
import cors from 'cors'
import ModuleRoutes from './Kanbas/Modules/routes.js'
import AssignmentsRoutes from './Kanbas/Assignments/routes.js'
const app = express()
app.use(cors())
app.use(express.json())
CourseRoutes(app);
ModuleRoutes(app);
AssignmentsRoutes(app);
Lab5(app);
Hello(app);
app.listen(process.env.PORT || 4000)