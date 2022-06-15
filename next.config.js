/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  // plugins: [
  //   {
  //     name: "preset-default",
  //     params: {
  //       overrides: { removeViewBox: false },
  //     },
  //   },
  // ],
};
