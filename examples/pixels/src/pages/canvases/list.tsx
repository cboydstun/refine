import { AntdList, useSimpleList } from "@pankod/refine-antd";

import { CanvasTile } from "components/canvas";
import { SponsorsBanner } from "components/banners";
import { Canvas } from "types";

export const CanvasList: React.FC = () => {
    const { listProps } = useSimpleList<Canvas>({
        resource: "canvases",
        pagination: {
            pageSize: 12,
        },
        initialSorter: [
            {
                field: "created_at",
                order: "desc",
            },
        ],
    });

    return (
        <div className="container">
            <div className="paper">
                <AntdList
                    {...listProps}
                    className="canvas-list"
                    split={false}
                    renderItem={(canvas) => <CanvasTile canvas={canvas} />}
                />
            </div>
            <SponsorsBanner />
        </div>
    );
};
