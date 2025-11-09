"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { BookOpen, Bookmark, Share2, Shield } from "lucide-react";
import { useTranslations } from "@/i18n/client";

interface FeatureInfo {
  image: React.ReactNode;
  title: string;
  description: string;
}

export default function Features() {
  const t = useTranslations();
  const img_width = 800;
  const img_height = 600;
  const features: FeatureInfo[] = [
    {
      image: <Image src="/images/home.png" alt="home" width={img_width} height={img_height} className="w-full h-auto rounded-2xl shadow-2xl" />,
      title: t("features.home.title"),
      description: t("features.home.description"),
    },
    {
      image: <Image src="/images/account.png" alt="account" width={img_width} height={img_height} className="w-full h-auto rounded-2xl shadow-2xl" />,
      title: t("features.account.title"),
      description: t("features.account.description"),
    },
    {
      image: <Image src="/images/task.png" alt="task" width={img_width} height={img_height} className="w-full h-auto rounded-2xl shadow-2xl" />,
      title: t("features.task.title"),
      description: t("features.task.description"),
    },
    // {
    //   image: (
    //     <Image src="/images/weibo_save.gif" alt="weibo_save" width={img_width} height={img_height} className="w-full h-auto rounded-2xl shadow-2xl" />
    //   ),
    //   title: t("features.weibo_save.title"),
    //   description: t("features.weibo_save.description"),
    // },
  ];

  const demoVideos: FeatureInfo[] = [
    {
      image: <Image src="/images/weibo.gif" alt="weibo" width={img_width} height={img_height} className="w-full h-auto rounded-2xl shadow-2xl" />,
      title: t("demo.weibo.title"),
      description: t("demo.weibo.description"),
    },
    {
      image: <Image src="/images/douyin.gif" alt="douyin" width={img_width} height={img_height} className="w-full h-auto rounded-2xl shadow-2xl" />,
      title: t("demo.douyin.title"),
      description: t("demo.douyin.description"),
    },  
    {

      image: <Image src="/images/redbook.gif" alt="douyin" width={img_width} height={img_height} className="w-full h-auto rounded-2xl shadow-2xl" />,
      title: t("demo.redbook.title"),
      description: t("demo.redbook.description"),
    },
    {
      image: <Image src="/images/sinablog.gif" alt="sinablog" width={img_width} height={img_height} className="w-full h-auto rounded-2xl shadow-2xl" />,
      title: t("demo.sinablog.title"),
      description: t("demo.sinablog.description"),
    },
  ];

  return (
    <div>
      <section className="w-full py-8 md:py-12 lg:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">{t("features.title")}</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">{t("features.description")}</p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 mt-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 bg-transparent shadow-none">
                <CardHeader className="text-center">
                  <CardTitle className="text-lg md:text-2xl font-bold text-primary">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground text-center">{feature.description}</p>
                </CardContent>
                {feature.image}
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full py-8 md:py-12 lg:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">{t("demo.title")}</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">{t("demo.description")}</p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 mt-8">
            {demoVideos.map((demoVideo, index) => (
              <Card key={index} className="border-0 bg-transparent shadow-none">
                <CardHeader className="text-center">
                  <CardTitle className="text-lg md:text-2xl font-bold text-primary">{demoVideo.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground text-center">{demoVideo.description}</p>
                </CardContent>
                {demoVideo.image}
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
