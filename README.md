## Getting Started

First, create .env file from .env-example

For env file you need github and google oauth secret and resend account

Create database with prisma:

```bash
npx prisma generate
# then
npx prisma db push
```

run the development:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Login Form

![](https://github.com/Kananoro/nextjs-auth/blob/main/public/auth-login.png)

## Register Form

![](https://github.com/Kananoro/nextjs-auth/blob/main/public/auth-register.png?raw=true)
![](https://github.com/Kananoro/nextjs-auth/blob/main/public/auth-register-confirm.png?raw=true)

## Settings Form

![](https://github.com/Kananoro/nextjs-auth/blob/main/public/auth-settings.png?raw=true)
