import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateApartments1645501288198 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "apartments",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true   
                    },
                    {
                        name: "apartment_number",
                        type: "int"
                    },
                    {
                        name: "tower_letter",
                        type: "varchar",
                        length: "10"
                    },
                    {
                        name: "isOccuppied",
                        type: "boolean",
                        default: "false"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("apartments")
    }

}
