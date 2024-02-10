/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
      },
      // reactStrictMode: true,
      images:  {
        remotePatterns : [
          {
            protocol: 'https',
            hostname : 'raw.githubusercontent.com', 
            port : '', 
            pathname : '/mantinedev/mantine/master/.demo/images/**'

          }, 
          {
            protocol: 'https',
            hostname : 'nuixlmwutxqlbjyxnbxj.supabase.co', 
            port : '', 
            pathname : '/storage/v1/object/public/specialty_image/**'

          }
          
        ]
      }
    

};

export default nextConfig;
