# webcloner_site
webcloner_site

## intro

for from https://github.com/jiweiyeah/nextjs-saas-template 



### config env

```
NEXT_PUBLIC_SUPABASE_URL=xxxxx
NEXT_PUBLIC_SUPABASE_ANON_KEY=xxxxx
NEXT_PUBLIC_APP_URL=xxxxx

# Github OAuth
GITHUB_CLIENT_ID=xxxxx
GITHUB_CLIENT_SECRET=xxxxx 
GITHUB_CALLBACK_URL=xxxxx/api/auth/github/callback

# Google OAuth
GOOGLE_CLIENT_ID=xxxxx
GOOGLE_CLIENT_SECRET=xxxxx

```

### run 

```
npm run dev
```


## test docker

### build docker

```
docker build -t webcloner .
```

### run docker

```
docker run -p 3000:3000 --env-file .env webcloner
```

### change 

1. use next-intl 处理多语言问题，避免语言参数层层传递