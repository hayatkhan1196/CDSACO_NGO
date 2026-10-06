import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import ContentList from "../../components/ContentList";
export default function Page() {
    return <>
        <SiteHeader />
        <ContentList type="projects" title="Our Projects" intro="Explore projects, locations, partners and implementation updates." />
        <SiteFooter />
    </>;
}
