/*
 * LightningChartJS example that shows the creation and styling of a Pyramid chart.
 */
// Import LightningChartJS
const lcjs = require('@lightningchart/lcjs')

// Extract required parts from LightningChartJS.
const { PyramidChartTypes, PyramidLabelSide, PyramidSliceModes, SliceLabelFormatters, lightningChart, LegendBoxBuilders, Themes } = lcjs

const lc = lightningChart({
            resourcesBaseUrl: new URL(document.head.baseURI).origin + new URL(document.head.baseURI).pathname + 'resources/',
        })
const dashboard = lc.Dashboard({
    numberOfColumns: 2,
    numberOfRows: 1,
    theme: Themes[new URLSearchParams(window.location.search).get('theme') || 'darkGold'] || undefined,
})

const pyramid1 = dashboard
    .createPyramidChart({ columnIndex: 0, rowIndex: 0, type: PyramidChartTypes.LabelsOnSides })
    .setTitle('Company staff growth')
    .setSliceGap(5)
    .setLabelSide(PyramidLabelSide.Left)
    .setSliceMode(PyramidSliceModes.VariableWidth)

const pyramid2 = dashboard
    .createPyramidChart({ columnIndex: 1, rowIndex: 0, type: PyramidChartTypes.LabelsOnSides })
    .setTitle('Company staff growth')
    .setSliceGap(5)
    .setLabelSide(PyramidLabelSide.Right)
    .setSliceMode(PyramidSliceModes.VariableHeight)

// Data for slices
const data = [
    {
        name: '2015 - 2016',
        value: 3,
    },
    {
        name: '2016 - 2017',
        value: 5,
    },
    {
        name: '2017 - 2018',
        value: 10,
    },
    {
        name: '2018 - 2019',
        value: 17,
    },
]

pyramid1.addSlices(data)
pyramid1.setLabelFormatter(SliceLabelFormatters.NamePlusValue)

pyramid2.addSlices(data)
pyramid2.setLabelFormatter(SliceLabelFormatters.NamePlusValue)
