import { getRepository } from 'typeorm';
import { Resident } from '../entities/Residents';

type ResidentUpdateRequest = {
    id: string;
    name: string;
    lastname: string;
    rg: string;
    cpf: string;
    extra_information: string;
    apartment_id: string;
}

export class UpdateResidentService {
    async execute({ id, name, lastname, rg, cpf, extra_information, apartment_id }: ResidentUpdateRequest) {
        const repo = getRepository(Resident);

        const resident = await repo.findOne(id);

        if(!resident) {
            return new Error("Resident does not exist!");
        }

        resident.name = name ? name : resident.name;
        resident.lastname = lastname ? lastname : resident.lastname;
        resident.rg = rg ? rg : resident.rg;
        resident.cpf = cpf ? cpf : resident.cpf;
        resident.extra_information = extra_information ? extra_information : resident.extra_information;
        resident.apartment_id = apartment_id ? apartment_id : resident.apartment_id;

        await repo.save(resident);

        return resident;
    }
}