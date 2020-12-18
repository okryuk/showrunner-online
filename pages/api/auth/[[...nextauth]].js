import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
    // Configure one or more authentication providers
    providers: [
        Providers.GitHub({
            clientId: process.env.NEXT_PUBLIC_GITHUB_OAUTH_CLIENT_ID,
            clientSecret: process.env.GITHUB_OAUTH_CLIENT_SECRET,
            scope: "read:user"
        }),
        // ...add more providers here
    ],

    // A database is optional, but required to persist accounts in a database
    // database: process.env.DATABASE_URL,
}

export default (req, res) => NextAuth(req, res, options)