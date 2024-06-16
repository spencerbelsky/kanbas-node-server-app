import "dotenv/config";
import express from 'express'
import session from "express-session";
import mongoose from 'mongoose'
import Hello from "./Hello.js"
import Lab5 from './Labs/Lab5/index.js'
import CourseRoutes from './Kanbas/Courses/routes.js'
import cors from 'cors'
import ModuleRoutes from './Kanbas/Modules/routes.js'
import AssignmentsRoutes from './Kanbas/Assignments/routes.js'
import UserRoutes from './Kanbas/Users/routes.js'
const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kanbas-su1"
mongoose.connect(CONNECTION_STRING)
const app = express()
app.use(cors({
    credentials: true,
    origin: process.env.NETLIFY_URL || "http://localhost:3000",
 }))
 const sessionOptions = {
    secret: "process.env.SESSION_SECRET" || "kanbas",
    resave: false,
    saveUninitialized: false,
  };
  if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
      sameSite: "none",
      secure: true,
      domain: process.env.NODE_SERVER_DOMAIN,
    };
  }  
  app.use(
    session(sessionOptions)
  );
  
app.use(express.json())
CourseRoutes(app);
ModuleRoutes(app);
AssignmentsRoutes(app);
Lab5(app);
Hello(app);
UserRoutes(app);
app.listen(process.env.PORT || 4000)
console.log("Server is running")