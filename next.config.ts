import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        domains: ['lh3.googleusercontent.com','medicaldialougearticleimages.s3.amazonaws.com'],
      },
      async headers (){
        return [
          {
            source:"/api/:path*",
            headers:[
              {key:"Access-Control-Allow-Credentials",value:"true"},
              {key:"Access-Control-Allow-Origin",value:'*'},
              {key:"Access-Control-Allow-Methods",value:'GET,DELETE,PATCH,POST,PUT'},
              {key:"Access-Control-Allow-Origin",value:'*'},
              {key:"Access-Control-Allow-Headers",value:'*'}
            ]
          }
        ]
      }
};

export default nextConfig;
