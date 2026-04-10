import express,{Request,Response} from "express";
// import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import emailRoutes from "./routes/emailRoutes";
import { errorHandler } from "./middlewares/errorHandler";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use("/email", emailRoutes);

app.get("/",(req:Request,res:Response)=>{
    res.send("Server is working...🥳🥳")
})



app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});