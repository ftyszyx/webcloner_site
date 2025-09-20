"use client";
import { Button } from "@/components/ui/button";
import { useTranslations } from "@/i18n/client";
import { useEffect, useState } from "react";
export default function Hero() {
  const t = useTranslations("home.hero");
  const [downloadUrl, setDownloadUrl] = useState<string>("");
  useEffect(() => {
    fetch("/api/app-info").then((r) => r.json()).then((d) => {
      console.log("d", d);
      setDownloadUrl(d?.app_download_url || "");
    }).catch(() => { });
  }, []);
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">{t("title")}</h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">{t("description")}</p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row ">
            <Button size="lg" asChild disabled={!downloadUrl} variant="default">
              <a href={downloadUrl || "#"} target="_blank" rel="noopener noreferrer" >
                {t("download")}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
