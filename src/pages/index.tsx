'use client'

import { memo, useEffect, useState, type ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";
import RootLayout from "./layout";
import { CollectionsList } from "@/widgets/CollectionsList";
import { TCollection } from "@/entities/collection";

const Page: NextPageWithLayout = memo(() => {
  const [collections, setCollections] = useState<TCollection[] | null>(null)

  const getPublishedCollections = async () => {
    try {

      const response = await fetch('http://localhost:5000/api/collections/')
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`)
      }
      const json = await response.json()
      
      setCollections((json.rows))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPublishedCollections()
  }, [])

  return (
    <>
          {collections && <CollectionsList collectionsList={collections}/>} 
    </>
  );
});

// Page.getLayout = function getLayout(page: ReactElement) {
//   return (
//     <RootLayout>{page}</RootLayout>
//   );
// };

export default Page;
