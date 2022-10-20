module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/graphql',
        destination: 'https://seal-app-l2daf.ondigitalocean.app/api/graphql',
      },
    ];
  },
};
