import AccessoriesSection from "./components/accessories";
import ComponentsSection from "./components/components";
import DemoSection from "./components/demo";
import FAQ from "./components/faq";
import Footer from "./components/footer";
import Header from "./components/header";
import SpecsSection from "./components/specs";
import GlobalStyles from "./styles/globalStyles";
import { MainLayout } from "./styles/mainLayout";

function App() {
  return (
    <>
      <GlobalStyles></GlobalStyles>
      <MainLayout>
        <Header></Header>
        <SpecsSection></SpecsSection>
        <ComponentsSection></ComponentsSection>
        <DemoSection></DemoSection>
        <AccessoriesSection></AccessoriesSection>
        <FAQ></FAQ>
        <Footer></Footer>
      </MainLayout>
    </>
  );
}

export default App;
