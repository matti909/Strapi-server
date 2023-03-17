module.exports = ({ env }) => ({
upload: {
    config: {
        provider: 'aws-s3',
        providerOptions: {
            accessKeyId: env('AWS_PUBLIC_KEY'),
            secretAccessKey: env('AWS_SECRET_KEY'),
            region: env('AWS_REGION'),
            params: {
                Bucket: env('AWS_BUCKET'),
            },
        },
        actionOptions: {
            upload: {
              ACL: null
            },
            uploadStream: {
              ACL: null
            },
          }
    },
},

});