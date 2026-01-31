import { Router } from "express";
import { DeliveryLogsController } from "@/controllers/delivery-logs-controller.js";
import { ensureAuthenticated } from "@/middlewares/ensure-authenticated.js";
import { verifyUserAuthorization } from "@/middlewares/verify-user-authorization.js";

const deliveryLogsRoutes = Router();
const deliveryLogsController = new DeliveryLogsController();

deliveryLogsRoutes.post(
    "/",
    ensureAuthenticated,
    verifyUserAuthorization(["sale"]),
    deliveryLogsController.create
);

deliveryLogsRoutes.get(
    "/:delivery_id/show",
    ensureAuthenticated,
    verifyUserAuthorization(["sale", "customer"]),
    deliveryLogsController.show
);

export { deliveryLogsRoutes }