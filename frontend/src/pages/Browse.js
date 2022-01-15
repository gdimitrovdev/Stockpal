import React from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

import '../css/Browse.css';
import ChartComponent from "../components/Chart.component";

export default class Browse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.setState({ loaded: false });
        const query = "aa";

        // find stock symbols by query
        fetch(`https://ticker-2e1ica8b9.now.sh/keyword/${query}`)
        .then(res => res.json())
        .then(json => this.setState({ symbols: json, loaded: true }));
    }

    render() {
        return (
            <div className="browse">
                {
                    this.state.loaded
                    ? (
                        this.state.symbols.map((row) => {
                            return <ChartComponent symbol={row.symbol} />;
                        })
                    )
                    : <ClimbingBoxLoader />
                }
            </div>
        );
    }
}
