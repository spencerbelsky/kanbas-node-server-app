
const module = {
    id: 2,
    name: "spencer's module",
    description: "this is a module",
    course: "cs602",
}


  export default function WorkingWithModule(app) {
    app.get("/lab5/module", (req, res) => {
      res.json(module);
    });
    app.get("/lab5/module/name", (req, res) => {
        res.json(module.name);
      });

    // app.get("/lab5/assignment/title/:newTitle", (req, res) => {
    // const { newTitle } = req.params;
    //     assignment.title = newTitle;
    //     res.json(assignment);
    //   });
    
  };
  