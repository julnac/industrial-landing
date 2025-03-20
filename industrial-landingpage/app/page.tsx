import DesignInstant from "./components/DesignInstant";
import Welcome from "./components/Welcome";
import Content from "./components/Content";

export default function Home() {
    return (
        <div className="mx-auto">
            <Welcome/>
            <DesignInstant/>
            <Content/>
        </div>
    )
}

