import { AuthForm } from "@/components/auth/auth-form"
import { Icons } from "@/components/icons"
import Link from "next/link"
import { useTranslations } from "@/i18n/client"
export default function SignUpPage({
  params: { lang }
}: {
  params: { lang: string }
}) {
  const t = useTranslations(lang)
  return (
    <div className="container relative flex-1 flex items-center justify-center min-h-[calc(100vh-8rem)]">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <Icons.chrome className="mx-auto h-6 w-6" />
          <h1 className="text-2xl font-semibold tracking-tight">
            {t('auth.signup.title')}
          </h1>
          <p className="text-sm text-muted-foreground">
            {t('auth.signup.description')}
          </p>
        </div>
        <AuthForm mode="signup" />
        <p className="px-8 text-center text-sm text-muted-foreground">
          <Link
            href={`/${lang}/signin`}
            className="hover:text-brand underline underline-offset-4"
          >
            {t('auth.signup.hasAccount')} {t('auth.signup.signinLink')}
          </Link>
        </p>
      </div>
    </div>
  )
}
