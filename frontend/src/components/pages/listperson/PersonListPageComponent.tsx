import {Breadcrumb} from "antd";
import {ListComponent} from "./ListComponent";
import {FilterComponent} from "./FilterComponent";

export const PersonListPageComponent: React.FC = () => {

    return (
        <>
            <Breadcrumb style={{margin: '16px 0',}}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>Pessoas</Breadcrumb.Item>
            </Breadcrumb>

            <div className="site-layout-content">
                <FilterComponent />
                <ListComponent />
            </div>
        </>
    );
}