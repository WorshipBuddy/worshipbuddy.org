/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/sets/:setId',
        destination: 'worshipbuddy://sets?setId=:setId',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
