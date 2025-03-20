import type { NextConfig } from "next";
import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    images: {
        domains: ['www.outlineai.com'], 
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'outlineai.com',
                port: '',
                pathname: '/img/**',
                search: '',
            },
        ],
    }
  /* config options here */
};

const withMDX = createMDX({
    // Add markdown plugins here, as desired
    options: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [],
        providerImportSource: "@mdx-js/react",
    },
});

export default withMDX(nextConfig);