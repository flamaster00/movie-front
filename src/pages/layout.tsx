import StoreProvider from "@/shared/store/StoreProvider";
import { Navbar } from "@/widgets/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <StoreProvider>
        <Navbar />
        <main>{children}</main>
      </StoreProvider>
    </>
  )
}