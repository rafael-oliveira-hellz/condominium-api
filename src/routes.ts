import { Router } from "express";
import { CreateApartmentController } from "./controllers/CreateApartmentController";
import { CreateResidentController } from "./controllers/CreateResidentController";
import { DeleteApartmentController } from "./controllers/DeleteApartmentController";
import { DeleteResidentController } from "./controllers/DeleteResidentController";
import { GetAllApartmentsController } from "./controllers/GetAllApartmentsController";
import { GetAllResidentsController } from "./controllers/GetAllResidentsController";
import { UpdateApartmentController } from "./controllers/UpdateApartmentController";
import { UpdateResidentController } from "./controllers/UpdateResidentController";

const routes = Router();

routes.post("/apartments", new CreateApartmentController().handle);
routes.get("/apartments", new GetAllApartmentsController().handle);
routes.delete("/apartments/:id", new DeleteApartmentController().handle);
routes.put("/apartments/:id", new UpdateApartmentController().handle);

routes.post("/residents", new CreateResidentController().handle);
routes.get("/residents", new GetAllResidentsController().handle);
routes.delete("/residents/:id", new DeleteResidentController().handle);
routes.put("/residents/:id", new UpdateResidentController().handle);

export { routes };