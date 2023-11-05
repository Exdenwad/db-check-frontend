import ChartElement from "./components/Chart/Chart";
import Warnings from "./components/Warnings/Warnings";

export default function Errors(props) {
    return (
        <>
            <ChartElement rollbacks={props?.rollbacks} />
            <Warnings
                allerts={props?.allerts}
            />
        </>
    );
}