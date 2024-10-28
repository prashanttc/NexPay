import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
   const loggedin = {firstName:"prashant", lastName:"chouhan"};

  return (
  <main className="h-screen w-full font-inter flex">
    <Sidebar user={loggedin} />
    <div className="flex size-full flex-col">
      <div className="root-layout">
        <Image src="/icons/logo.svg" alt="main menu" height={30} width={30}/>
        <div>
          <MobileNav user={loggedin}/>
        </div>
      </div>
      {children}
    </div>
    
  </main>
  );
}
