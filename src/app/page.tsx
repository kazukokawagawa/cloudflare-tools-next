import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Command } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden selection:bg-white/20">
      
      {/* 背景光晕：极简的聚光灯效果 */}
      {/* <div className="absolute top-[-20%] left-[50%] -translate-x-1/2 w-[800px] h-[500px] bg-white/5 blur-[120px] rounded-full pointer-events-none" /> */}

      <main className="relative z-10 flex flex-col items-center text-center space-y-8 px-4">
        
        {/* Logo / Icon */}
        <div className="h-16 w-16 bg-white/10 rounded-2xl flex items-center justify-center border border-white/10 shadow-2xl backdrop-blur-sm mb-4">
          <Command className="w-8 h-8 text-white" />
        </div>

        {/* 主标题 */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
          Cloudflare DNS Manager
        </h1>

        {/* 副标题：简短有力 */}
        <p className="text-lg text-gray-400 max-w-[500px] leading-relaxed">
          基于 Next.js 的第三方 CloudFlare DNS 管理工具。<br />
         简洁、快速、安全。
        </p>

        {/* 唯一的交互：去登录页 */}
        <div className="pt-4">
          <Link href="/login">
            <Button size="lg">
              开始使用
              <ArrowRight data-icon="inline-end" />
            </Button>
          </Link>
        </div>

      </main>
    </div>
  )
}