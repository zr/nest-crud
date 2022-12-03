import { DataSource } from 'typeorm';

const dataSource = new DataSource({
  type: 'sqlite',
  database: 'db.sqlite',
  entities: ['dist/src/entities/*.entity.js'],
  migrations: ['src/migration/**/*.ts'],
  synchronize: true,
})

export default dataSource
