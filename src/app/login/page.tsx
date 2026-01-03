'use client'

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Github, Chrome, Command, ArrowLeft, Loader2 } from "lucide-react"

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }

  return (
    <div className="dark relative min-h-screen flex flex-col items-center justify-center bg-background text-foreground selection:bg-primary/20 overflow-hidden">
      
       {/* 返回首页 - 绝对定位左上角 */}
       <Link
        href="/"
        className="absolute left-6 top-6 flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span>Back</span>
      </Link>

      {/* 背景光效：保持与首页一致的极简光晕 - 使用 muted 颜色 */}
      {/* <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/20 blur-[100px] rounded-full pointer-events-none" /> */}

      <div className="relative z-10 w-full max-w-[380px] px-4">
        
        {/* Header区 */}
        <div className="flex flex-col items-center text-center space-y-4 mb-8">
           <div className="h-12 w-12 bg-secondary rounded-xl flex items-center justify-center border shadow-xl backdrop-blur-md">
            <Command className="w-6 h-6 text-foreground" />
          </div>
          <div className="space-y-1">
             <h1 className="text-2xl font-bold tracking-tight">
              Authentication
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your credentials to continue
            </p>
          </div>
        </div>

        {/* 标准 Shadcn Tabs */}
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>

          <TabsContent value="login">
             <form onSubmit={onSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Input 
                    id="email" 
                    placeholder="name@example.com" 
                    required 
                    type="email"
                  />
                  <Input 
                    id="password" 
                    placeholder="Password" 
                    required 
                    type="password"
                  />
                </div>
                
                <Button className="w-full" disabled={isLoading}>
                    {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Sign In
                </Button>
             </form>

             {/* 分割线 */}
             {/* <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    Or continue with
                  </span>
                </div>
              </div> */}

               {/* <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline">
                    <Github className="mr-2 h-4 w-4" /> Github
                  </Button>
                   <Button variant="outline">
                    <Chrome className="mr-2 h-4 w-4" /> Google
                  </Button>
               </div> */}
          </TabsContent>

          <TabsContent value="register">
             <div className="space-y-4">
                <div className="space-y-2">
                    <Input 
                        placeholder="Email" 
                        type="email"
                    />
                     <Input 
                        placeholder="Password" 
                        type="password"
                    />
                    <Input 
                        placeholder="Confirm Password" 
                        type="password"
                    />
                </div>
                 <Button className="w-full">
                    Create Account
                </Button>
             </div>
          </TabsContent>
        </Tabs>

        {/* 底部 Terms */}
        {/* <p className="mt-8 text-center text-xs text-muted-foreground max-w-[280px] mx-auto leading-relaxed">
          By clicking continue, you agree to our <span className="underline hover:text-foreground cursor-pointer transition-colors">Terms</span> and <span className="underline hover:text-foreground cursor-pointer transition-colors">Privacy Policy</span>.
        </p> */}
      </div>

    </div>
  )
}
