import Sidebar from "@/components/sidebar";
import Rightbar from "@/components/Rightbar";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex justify-center bg-black text-white max-w-[1200px] mx-auto">
        <Sidebar />
        <main className="flex-3">{children}</main>
        <Rightbar />
      </body>
    </html>
  );
} 