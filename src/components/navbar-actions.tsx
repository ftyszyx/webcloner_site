"use client"

import { useRouter } from "next/navigation"
import { ThemeToggle } from "./theme-toggle"
import { LanguageSwitcher } from "./language-switcher"
import { UserNav } from "./user-nav"
import { Button } from "./ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useLocale, useTranslations } from "next-intl"

export function NavbarActions() {
  const t = useTranslations('nav');
  const lang = useLocale();
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const router = useRouter()

  // 监听登录状态
  useEffect(() => {
    // 初始检查登录状态
    const checkLoginStatus = () => {
      const userEmail = decodeURIComponent(document.cookie
        .split('; ')
        .find(row => row.startsWith('userEmail='))
        ?.split('=')[1] || '');
      setIsLoggedIn(!!userEmail)
    }

    // 首次检查
    checkLoginStatus()

    // 监听 storage 事件
    const handleStorageChange = () => {
      checkLoginStatus()
    }

    window.addEventListener('storage', handleStorageChange)
    // 添加自定义事件监听
    window.addEventListener('loginStateChange', handleStorageChange)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
      window.removeEventListener('loginStateChange', handleStorageChange)
    }
  }, [])

  const handleLogout = () => {
    document.cookie = 'userEmail=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    window.dispatchEvent(new Event('loginStateChange'));
    router.refresh();
    router.push(`/${lang}`);
  }

  return (
    <div className="flex items-center space-x-2">
      <ThemeToggle />
      <LanguageSwitcher />
      {/* {isLoggedIn ? (
        <UserNav onLogout={handleLogout} />
      ) : (
        <Link href={`/signin`}>
          <Button variant="ghost" size="sm">{t('signin')}</Button>
        </Link>
      )} */}
    </div>
  )
}
