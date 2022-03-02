import { getRepository } from 'typeorm';
import { Apartment } from '../entities/Apartment';

type ApartmentUpdateRequest = {
    id: string;
    apartment_number: number;
    tower_letter: string;
    isOccuppied: boolean;
}

export class UpdateApartmentService {
    async execute({ id, apartment_number, tower_letter, isOccuppied }: ApartmentUpdateRequest) {
        const repo = getRepository(Apartment);

        const apartment = await repo.findOne(id);

        if(!apartment) {
            return new Error("Apartment does not exist!");
        }

        apartment.apartment_number = apartment_number ? apartment_number : apartment.apartment_number;
        apartment.tower_letter = tower_letter ? tower_letter : apartment.tower_letter;
        apartment.isOccuppied = isOccuppied ? isOccuppied : apartment.isOccuppied;

        await repo.save(apartment);

        return apartment;
    }
}