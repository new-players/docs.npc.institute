const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

module.exports = withNextra(
  {
    typescript: {
      ignoreBuildErrors: process.env.NEXT_PUBLIC_IGNORE_BUILD_ERROR === "true",
    },
    eslint: {
      ignoreDuringBuilds: process.env.NEXT_PUBLIC_IGNORE_BUILD_ERROR === "true",
    },
    webpack: config => {
      config.resolve.fallback = { fs: false, net: false, tls: false };
      return config;
    },    
  }
)
