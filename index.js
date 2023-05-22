import express from "express";
import listEndpoints from "list_end_points";
const app = express()
listEndpoints.default(app);




app.get("/", (req, res) => {
    res.send("Welcome to Beautiful Termi");
  });

  
  
  
  
  
  const PORT = process.env.PORT || 8080


  const startServer = async () => {
    try {
      app.listen(PORT, () => console.log(`Server Started Listening on Port ${PORT}`));
    } catch (error) {
      console.log(error);
    }
  };
  
  startServer();