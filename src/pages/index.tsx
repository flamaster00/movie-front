import { Sidebar } from "@/components/Sidebar/Sidebar";
import { StackList } from "@/components/StackList/StackList";
import styles from "./index.module.scss";
import { Navbar } from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <>
    <Navbar />
    <div className={styles.wrapper}>
      <Sidebar />
      <div className={styles.page}>
        <StackList />
      </div>
    </div>
    </>
  );
}
