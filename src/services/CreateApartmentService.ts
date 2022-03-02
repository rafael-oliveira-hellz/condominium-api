import { getRepository } from "typeorm";
import { Apartment } from "../entities/Apartment";

type ApartmentRequest = {
    apartment_number: number;
    tower_letter: string;
    isOccuppied: boolean;
}

export class CreateApartmentService {

    async execute({ apartment_number, tower_letter, isOccuppied }: ApartmentRequest): Promise<Apartment | Error> {
        const repo = getRepository(Apartment);

        if( await repo.findOne({ apartment_number, tower_letter }) ) {
            return new Error("Apartment number already exists!");
        }

        const apartment = repo.create({
            apartment_number,
            tower_letter,
            isOccuppied
        });

        await repo.save(apartment);

        return apartment;
    }
}