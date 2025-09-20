'use client'

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, CreditCard, Settings } from "lucide-react"
import { supabase } from "@/lib/supabase"
import { Icons } from "@/components/icons"
import { useTranslations } from "@/i18n/client"

export default function ProfilePage({ params: { lang } }: { params: { lang: string }
}) {
  const [userData, setUserData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const t= useTranslations ()

  useEffect(() => {
    // 加载字典

    // 加载用户数据
    async function loadUserData() {
      const userEmail = decodeURIComponent(document.cookie
        .split('; ')
        .find(row => row.startsWith('userEmail='))
        ?.split('=')[1] || '');
      if (!userEmail) {
        router.push(`/${lang}/signin`);
        return;
      }

      try {
        const { data, error } = await supabase
          .from('users')
          .select()
          .eq('email', userEmail)
          .single();

        if (error) throw error;
        setUserData(data);
      } catch (error) {
        console.error('Error loading user data:', error);
        router.push(`/${lang}/signin`);
      } finally {
        setLoading(false);
      }
    }

    loadUserData()
  }, [lang, router])

  if (loading) {
    return (
      <div className="container py-12 flex justify-center">
        <Icons.spinner className="h-8 w-8 animate-spin" />
      </div>
    )
  }

  if (!userData) {
    return null
  }

  return (
    <div className="container py-12">
      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid w-full max-w-[500px] grid-cols-3 gap-2">
          <TabsTrigger 
            value="profile" 
            className="tab-highlight tab-active-glow flex items-center gap-2"
          >
            <User className="h-4 w-4" />
            {t('profile.tabs.profile')}
          </TabsTrigger>
          <TabsTrigger 
            value="subscription" 
            className="tab-highlight tab-active-glow flex items-center gap-2"
          >
            <CreditCard className="h-4 w-4" />
            {t('profile.tabs.subscription')}
          </TabsTrigger>
          <TabsTrigger 
            value="settings" 
            className="tab-highlight tab-active-glow flex items-center gap-2"
          >
            <Settings className="h-4 w-4" />
            {t('profile.tabs.settings')}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>{t('profile.basicInfo')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="text-sm text-muted-foreground">{t('profile.email')}</div>
                <div>{userData.email}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">{t('profile.joinDate')}</div>
                <div>{userData.user_created}</div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="subscription">
          <Card>
            <CardHeader>
              <CardTitle>{t('profile.subscription')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {userData.plans_end && (
                <div>
                  <div className="text-sm text-muted-foreground">{t('profile.expireDate')}</div>
                  <div>{userData.plans_end}</div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>{t('profile.settings')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="text-sm text-muted-foreground">{t('profile.settingsComingSoon')}</div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
