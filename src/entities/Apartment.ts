import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";


@Entity("apartments")
export class Apartment {

    @PrimaryColumn()
    id: string;

    @Column()
    apartment_number: number;

    @Column()
    tower_letter: string;

    @Column()
    isOccuppied: boolean;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }
}