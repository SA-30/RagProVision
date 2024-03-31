import Navbar from "@/components/navbar";
import SidebarNav from "./components/SidebarNav";

export default function Docs({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
          <div className=" relative">
            <div className="fixed w-full top-0 px-10 z-10">
                <Navbar />
            </div>
            <div className="flex pt-28 pl-10">
                <div className='fixed'>
                    <SidebarNav />
                </div>
                <div className='ml-40'>
                    {children}
                </div>
            </div>
          </div>
      </body>
    </html>
  );
}
