import { StackList } from "@/components/StackList/StackList";
import styles from "./index.module.scss";

import type { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";
import RootLayout from "./layout";

const Page: NextPageWithLayout = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.page}>
          <StackList />
        </div>
      </div>
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
      <RootLayout>{page}</RootLayout>
  );
};

export default Page;
