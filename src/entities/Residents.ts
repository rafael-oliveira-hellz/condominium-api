import { Entity, Column, CreateDateColumn, PrimaryColumn, OneToOne, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Apartment } from "./Apartment";


@Entity("residents")
export class Resident {

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    lastname: string;

    @Column()
    rg: string;

    @Column()
    cpf: string;

    @Column()
    extra_information: string;

    @Column()
    apartment_id: string;

    @OneToOne(() => Apartment)
    @JoinColumn({ name: "apartment_id" })
    apartment: Apartment;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }
}