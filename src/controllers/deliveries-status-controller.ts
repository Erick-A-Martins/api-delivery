import { Request, Response } from "express";
import { prisma } from "@/database/prisma.js";
import { z } from "zod";

class DeliveriesStatusController {
    async update(request: Request, response: Response){
        const paramsSchema = z.object({
            id: z.string().uuid(),

        });

        const bodysSchema = z.object({
            status: z.enum(["processing", "shipped", "delivered"]),
        });

        const { id } = paramsSchema.parse(request.params);
        const { status } = bodysSchema.parse(request.body);

        await prisma.delivery.update({
            data: {
                status,
            },
            where: {
                id,
            },
        });

        return response.json();
    };
}

export { DeliveriesStatusController };