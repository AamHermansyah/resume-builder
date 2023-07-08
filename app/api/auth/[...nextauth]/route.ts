import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: '831888070089-fljmtf0qv0jo2c2sjimnotcuedlbj26l.apps.googleusercontent.com',
      clientSecret: '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'
    })
  ],
});

export { handler as GET, handler as POST };