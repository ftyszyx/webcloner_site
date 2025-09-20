"use client"
import { AuthForm } from "@/components/auth/auth-form"
import { Icons } from "@/components/icons"
import { useTranslations, useLocale } from "@/i18n/client"
import Link from "next/link"

export default function SignInPage({ params: { lang } }: {
  params: { lang: string }
}) {
  const t = useTranslations()
  const locale = useLocale()

  return (
    <div className="container relative flex-1 flex items-center justify-center min-h-[calc(100vh-8rem)]">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <Icons.chrome className="mx-auto h-6 w-6" />
          <h1 className="text-2xl font-semibold tracking-tight">
            {t('auth.signin.title')}
          </h1>
          <p className="text-sm text-muted-foreground">
            {t('auth.signin.description')}
          </p>
        </div>
        <AuthForm mode="signin" />
        <p className="px-8 text-center text-sm text-muted-foreground">
          <Link 
            href={`/${locale}/signup`}
            className="hover:text-brand underline underline-offset-4"
          >
            {t('auth.signin.noAccount')} {t('auth.signin.signupLink')}
          </Link>
        </p>
      </div>
    </div>
  )
}
