import { Router } from "express";
import { usersRoutes } from "@/routes/users-routes.js";
import { sessionsRoutes } from "@/routes/sessions-routes.js";
import { deliveriesRoutes } from "@/routes/deliveries-routes.js";
import { deliveryLogsRoutes } from "@/routes/delivery-logs-routes.js";

const routes = Router();

routes.use("/users", usersRoutes);
routes.use("/sessions", sessionsRoutes);
routes.use("/deliveries", deliveriesRoutes);
routes.use("/delivery-logs", deliveryLogsRoutes);

export { routes };