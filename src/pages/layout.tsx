import { Navbar } from "@/components/Navbar/Navbar";
import '@/app/styles.scss';

 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}