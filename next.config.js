// const { withNextVideo } = require('next-video/process')

/** @type {import('next').NextConfig} */
const nextConfig = {

    env: {
        
        BASE_URL: "http://localhost:3000",
        API_URL: "http://13.126.252.23:8080",
        // TOKEN: "1a0845f2f0cba67737de25aec721451a40160a6954f4f63b1cb67b73fbae5e3541f221fc7ee131d349d6f697c9b24b6b9b7c2cb9d2d3f775d34057117d143a13db6588a0e40022e3a4e725a44937e498a63bc951135c4593f05cc8e5688cfe8b0d990e6d198fa4d25de9f164524d53306c642b46c613e3426ccc8c2572ce9ea5",
        // TOKEN:"57aea713b31fb36155c207531b23c89aa1a87809a803046fed7d0ca8c63cff1f37c21a0375a3cf87bf9a6c775b05e1ede688234d8d5964f08de746045bf06a3791d8b0e5929f78913a57d1660184498547fc78a9ce485f3d0616f8274381fab0623277abf37ba4b6f74663945acd06bf978c8ab9c8df6048bfb7e92c00d72be0"
        TOKEN:"d6ff08d4c1858fdc152df5a3ffb07fe867eb6e9224dad12450b47d23bf39bd7f714e659b05d68a8940e3ad30fb249c68928a1cf442479dfc7242724d24cc02d470af417c182e861a79a4115668c68d049acfbce3ff93a6ec48100bd0c63389160cb6001c2afebe8b9bcc7d1adf8c6c504b30a058de5c8c897f232f2d4b2f3aac",
        CLAIM_URL:'https://brandeyes.kapturecrm.com/add-ticket-from-other-source.html/v.2.0',
        CLAIM_KEY:"MDU2MzkwYzI3OGJyZHpzYm9hc2o4cTl5bDlzeG14cnJwa3MwcGxlOG1iZzZrYm1yM2k="
    }
}
module.exports = nextConfig
