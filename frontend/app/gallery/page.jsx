import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import ContentList from "../../components/ContentList";
export default function Page() { return <><SiteHeader/>
<ContentList type="gallery" title="Photo Gallery" intro="Photos and visual stories from our community activities."/>
<SiteFooter/></>; }
