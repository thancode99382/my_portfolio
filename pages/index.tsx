import Page from "@/components/Page/Page";
import { HomePage } from "@/modules/HomePage";

export default function Home() {
  return (
  <Page title = {'DatDong'} >
    <HomePage.Hero/>
    <HomePage.Resume/>
    <HomePage.Projects/>
    <HomePage.Contact/>
  </Page>
      
  );
}
