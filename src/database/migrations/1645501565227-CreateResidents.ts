import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateResidents1645501565227 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "residents",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true   
                    },
                    {
                        name: "name",
                        type: "varchar",
                        length: "100",
                    },
                    {
                        name: "lastname",
                        type: "varchar",
                        length: "100",
                    },
                    {
                        name: "rg",
                        type: "varchar",
                        length: "13",
                        isNullable: true
                    },
                    {
                        name: "cpf",
                        type: "varchar",
                        length: "14",
                        isNullable: true
                    },
                    {
                        name: "extra_information",
                        type: "varchar"
                    },
                    {
                        name: "apartment_id",
                        type: "uuid",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys: [
                    {
                        name: "fk_residents_apartments",
                        columnNames: ["apartment_id"],
                        referencedTableName: "apartments",
                        referencedColumnNames: ["id"]
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("residents")
    }

}
