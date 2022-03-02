import { getRepository } from 'typeorm';
import { Resident } from '../entities/Residents';

export class GetAllResidentsService {
    async execute() {
        const repo = getRepository(Resident);

        const residents = await repo.find({
            relations: ["apartment"]
        });

        return residents;
    }
}