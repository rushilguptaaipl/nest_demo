export default () => ({
    TypeORMConfig: {
        type: process.env.DB_CONNECTION,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        synchronize: process.env.TYPE_ORM_SYNCHRONIZE,
        autoLoadEntities: process.env.TYPE_ORM_AUTO_LOAD_ENTITIES,
        entities: [__dirname + process.env.TYPE_ORM_ENTITIES],
        migrations: [__dirname + process.env.TYPE_ORM_MIGRATIONS],
        migrationsRun: process.env.TYPE_ORM_MIGRATION_RUN,
        cli: {
            migrationsDir: __dirname + process.env.TYPE_ORM_MIGRATION_DIR,
        },
    }
});