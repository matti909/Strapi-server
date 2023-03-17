module.exports = ({ env }) => ({
	email: {
		config: {
			provider: 'mailgun',
			providerOptions: {
				apiKey: env('MAILGUN_API_KEY'),
				domain: env('MAILGUN_DOMAIN'),
				host: env('MAILGUN_HOST', 'api.mailgun.net'),
			},
			settings: {
				defaultFrom: 'myemail@protonmail.com',
				defaultReplyTo: 'myemail@protonmail.com',
			},
		},
	},
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
				upload: {},
				uploadStream: {},
				delete: {},
			},
		},
	},
});