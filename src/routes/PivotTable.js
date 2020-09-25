import React from "react";

import Page from "../components/Page";

import PivotTableDrillExample from "./components/PivotTableDrillExample";
import PivotTableSortingExample from "./components/PivotTableSortingExample";
import PivotTableTotalsExample from "./components/PivotTableTotalsExample";
import PivotTableRowGroupingExample from "./components/PivotTableRowGroupingExample";
import PivotTableSubtotalsExample from "./components/PivotTableSubtotalsExample";
import PivotTableSortingAggregationExample from "./components/PivotTableSortingAggregationExample";

const PivotTable = () => {
    return (
        <Page>
            <div>
                <h1>Pivot Table</h1>

                <hr className="separator" />

                <h2>Example of presorted pivot table</h2>
                <div id="measures-row-attributes-and-column-attributes">
                    <PivotTableSortingExample/>
                </div>
                <hr className="separator" />

                <h2>Example of pivot table with totals</h2>
                <div id="table-with-totals">
                    <PivotTableTotalsExample/>
                </div>
                <hr className="separator" />

                <h2>Example of drill event</h2>
                <div id="table-with-drill-events">
                    <PivotTableDrillExample/>
                </div>
                <hr className="separator" />

                <h2>Example of rows grouping</h2>
                <div id="table-with-row-grouping">
                    <PivotTableRowGroupingExample/>
                </div>
                <hr className="separator" />

                <h2>Example of subtotals</h2>
                <div id="table-with-subtotals">
                    <PivotTableSubtotalsExample/>
                </div>
                <hr className="separator" />

                <h2>Example of sort with aggregation</h2>
                <div id="table-with-sort-aggregation">
                    <PivotTableSortingAggregationExample/>
                </div>
            </div>
        </Page>
    );
};

export default PivotTable;
