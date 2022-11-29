import express from "express";
const app = express();
 
import PokemonControllers from "../controllers/PokemonControllers";

const routes = express.Router();

routes.get("/pokemon/:page", PokemonControllers.index);
routes.delete("/pokemon/:name",PokemonControllers.delete);
routes.patch("/pokemon/:name",PokemonControllers.update);
routes.post("/pokemon/add", PokemonControllers.add);

export default routes;