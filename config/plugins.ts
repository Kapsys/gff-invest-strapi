export default ({ env }) => ({
    'users-permissions': {
        config: {
            jwtSecret: env('JWT_SECRET'),
        },
    },
    upload: env('STORAGE', 's3') === 'local' ? localFileStorageConfig() : s3FileStorageConfig(env),
    'strapi-v5-plugin-populate-deep': {},
});

const localFileStorageConfig = () => ({
    provider: 'local',
    providerOptions: {},
});

const s3FileStorageConfig = (env) => ({
    config: {
        provider: 'aws-s3',
        providerOptions: {
            baseUrl: `https://s3.${env('AWS_REGION')}.amazonaws.com/${env('AWS_BUCKET')}`,
            s3Options: {
                credentials: {
                    accessKeyId: env('AWS_ACCESS_KEY_ID'),
                    secretAccessKey: env('AWS_ACCESS_SECRET'),
                },
                region: env('AWS_REGION'),
                params: {
                    Bucket: env('AWS_BUCKET'),
                },
            },
        },
        actionOptions: {
            upload: {
                CacheControl: 'public, max-age=1800, must-revalidate',
            },
            uploadStream: {
                CacheControl: 'public, max-age=1800, must-revalidate',
            },
            delete: {},
        },
    },
});
