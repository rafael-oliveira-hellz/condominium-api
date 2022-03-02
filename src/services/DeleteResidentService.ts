import { getRepository } from 'typeorm';
import { Resident } from '../entities/Residents';

export class DeleteResidentService {
    async execute(id: string) {
        const repo = getRepository(Resident);

        if (!(await repo.findOne(id))) {
            return new Error("Resident does not exist!");
        }

        await repo.delete(id);
    }
}