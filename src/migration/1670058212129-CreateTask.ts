import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTask1670058212129 implements MigrationInterface {
    name = 'CreateTask1670058212129'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "task" ("task_id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "title" varchar(20) NOT NULL, "due_date" date NOT NULL, "status" tinyint NOT NULL DEFAULT (1), "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "task"`);
    }

}
