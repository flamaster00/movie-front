import { Navbar } from "@/widgets/Navbar/Navbar";
import StoreProvider from "./StoreProvider";

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