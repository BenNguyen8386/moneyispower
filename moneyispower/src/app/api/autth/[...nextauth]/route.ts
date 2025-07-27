import NextAuth from 'next-auth';
import EmailProvider from 'next-auth/providers/email';

const handler = NextAuth({
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
  ],
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
      signIn: '/login', // Redirect to custom login page
    },
});

export { handler as GET, handler as POST };
