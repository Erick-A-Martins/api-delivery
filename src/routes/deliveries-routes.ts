import { Router } from "express";
import { DeliveriesController } from "@/controllers/deliveries-controller.js";
import { ensureAuthenticated } from "@/middlewares/ensure-authenticated.js";

const deliveriesRoutes = Router();
const deliveriesController = new DeliveriesController();

deliveriesRoutes.use(ensureAuthenticated);
deliveriesRoutes.post("/", deliveriesController.create);

export { deliveriesRoutes };