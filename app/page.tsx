import { Metadata } from "next";
import ListingAdCard from "./components/ListingAdCard";
import { samplePropertyData } from './utils/sample-data'

export const metadata: Metadata = {
  title: samplePropertyData.title,
};

export default function Home() {
  return (
    <main>
      <ListingAdCard data={samplePropertyData}/>
    </main>
  )
}
