import { getRepository } from 'typeorm';
import { Apartment } from '../entities/Apartment';
import { Resident } from '../entities/Residents';

type ResidentRequest = {
    name: string;
    lastname: string;
    rg: string;
    cpf: string;
    extra_information: string;
    apartment_id: string;
}

export class CreateResidentService {
    async execute({ 
        name, 
        lastname, 
        rg, 
        cpf, 
        extra_information, 
        apartment_id 
    }: ResidentRequest): Promise<Error | Resident> {
        const repo = getRepository(Resident);
        const repoApartment = getRepository(Apartment); 

        if (!await repoApartment.findOne(apartment_id)) {
            return new Error("Apartment does not exist!")
        }

        const resident = await repo.create({ name, lastname, rg, cpf, extra_information, apartment_id });

        await repo.save(resident);

        return resident;
    }
}