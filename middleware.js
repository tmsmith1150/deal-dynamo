export { default } from 'next-auth/middleware';

export const config = {
    matcher: ['/products', '/products/add', '/profile', '/products/saved']
}