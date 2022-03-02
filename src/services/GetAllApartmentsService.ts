import { getRepository } from "typeorm";
import { Apartment } from "../entities/Apartment";

export class GetAllApartmentsService {
    async execute() {
        const repo = getRepository(Apartment);

        const apartments = await repo.find();

        return apartments;
    }
}