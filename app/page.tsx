import ListingAdCard from "./components/ListingAdCard";
import { samplePropertyData } from './utils/sample-data'

export default function Home() {
  return (
    <main>
      <ListingAdCard data={samplePropertyData}/>
    </main>
  )
}
