import { NextResponse } from 'next/server';

export function middleware(request: { cookies: { get: (arg0: string) => any; }; nextUrl: { pathname: string; }; url: string | URL | undefined; }) {

  const token = request.cookies.get('accessToken');
  const loginPath = '/login';

  
  if (request.nextUrl.pathname === loginPath) {
    return NextResponse.next();
  } 
  if (!token) {
     return NextResponse.redirect(new URL('/login', request.url));
  }
console.log('no redirection why?')
  return NextResponse.next();

}
export const config = {
  matcher: ['/aptilink(.*)','/']
}