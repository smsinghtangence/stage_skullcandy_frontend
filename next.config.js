// const { withNextVideo } = require('next-video/process')

/** @type {import('next').NextConfig} */
const nextConfig = {

    env: {
        
        BASE_URL: "http://localhost:3000",
        API_URL: "http://13.126.252.23:8080",
        // TOKEN: "1a0845f2f0cba67737de25aec721451a40160a6954f4f63b1cb67b73fbae5e3541f221fc7ee131d349d6f697c9b24b6b9b7c2cb9d2d3f775d34057117d143a13db6588a0e40022e3a4e725a44937e498a63bc951135c4593f05cc8e5688cfe8b0d990e6d198fa4d25de9f164524d53306c642b46c613e3426ccc8c2572ce9ea5",
        TOKEN:"57aea713b31fb36155c207531b23c89aa1a87809a803046fed7d0ca8c63cff1f37c21a0375a3cf87bf9a6c775b05e1ede688234d8d5964f08de746045bf06a3791d8b0e5929f78913a57d1660184498547fc78a9ce485f3d0616f8274381fab0623277abf37ba4b6f74663945acd06bf978c8ab9c8df6048bfb7e92c00d72be0"
    }
}
module.exports = nextConfig