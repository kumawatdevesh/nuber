import AWS from 'aws-sdk'

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
});

const sendEmailClient = () => {

    const params = {
        Destination: {
            CcAddresses: [
                'kumawatdevesh99@gmail.com',

            ],
            ToAddresses: [
                'devesh@safearth.in',
            ]
        },
        Message: {
            Body: {
                Html: {
                    Charset: "UTF-8",
                    Data: "This is an amazing email!"
                },
                Text: {
                    Charset: "UTF-8",
                    Data: "This is serious email"
                }
            },
            Subject: {
                Charset: 'UTF-8',
                Data: 'Test email'
            }
        },
        Source: 'kumawatdevesh99@gmail.com',
        ReplyToAddresses: [
            'kumawatdevesh99@gmail.com'
        ],
    }

    // Create the promise and SES service object
    const sendPromise = new AWS.SES({ apiVersion: '2010-12-01' }).sendEmail(params).promise()

    // Handle promise's fulfilled/rejected states
    sendPromise.then(
        function (data) {
            console.log(data.MessageId)
        }).catch(
            function (err) {
                console.error(err, err.stack)
            })

}

export default sendEmailClient

// p-ZS4uU6DzvHeAofpTGxL8UWprv-nsp4uzeRCXyR