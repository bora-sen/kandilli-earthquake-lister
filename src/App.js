import Reveal from "react-reveal/Fade"
import { Header,Footer,EQList, Layout, Options } from "./components"
import { MainContextProvider } from "./context/MainContext"
export default function App() {
  return (

  <Reveal>
    <Layout>
      <MainContextProvider>
        <Header />
        <Options />
        <EQList />
        <Footer />
      </MainContextProvider>
    </Layout>
  </Reveal>

    )

}
