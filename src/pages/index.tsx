'use client'
import styles from "./index.module.scss";

import { memo, useEffect, useState, type ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";
import RootLayout from "./layout";
import { TCollection } from "@/shared/types/CollectionTypes";
import { CollectionPreview } from "@/entities/collections";
import { CollectionsList } from "@/widgets/CollectionsList";

const Page: NextPageWithLayout = memo(() => {
  const [collections, setCollections] = useState<TCollection[] | null>(null)

  const getData = async () => {
    try {

      const response = await fetch('http://localhost:5000/api/collections/')
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`)
      }
      const json = await response.json()
      console.log(json.rows[0])
      setCollections((json.rows))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.page}>
          hello
          {collections && <CollectionsList collectionsList={collections}/>} 
        </div>
      </div>
    </>
  );
});

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <RootLayout>{page}</RootLayout>
  );
};

export default Page;
