import { Typography } from "@material-ui/core";
import Chart from "./Chart";
import Forecast from "./Forecast";
import Plan from "./Plan";
import Shipment from "./Shipment";

function Page(props: any) {
    return (
        <div style={{ width: "80%", margin: "auto" }}>
            <Typography variant="h5">{props.header}</Typography>
            <Chart data={props.data} />
            <Forecast forecast={props.forecast} />
            <Shipment shipment={props.shipment} />
            <Plan plan={props.plan} />
        </div>
    );
}

export default Page;
