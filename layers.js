var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_output_shapefile_1 = new ol.format.GeoJSON();
var features_output_shapefile_1 = format_output_shapefile_1.readFeatures(json_output_shapefile_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_output_shapefile_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_output_shapefile_1.addFeatures(features_output_shapefile_1);
var lyr_output_shapefile_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_output_shapefile_1, 
                style: style_output_shapefile_1,
                popuplayertitle: "output_shapefile",
                interactive: true,
                title: '<img src="styles/legend/output_shapefile_1.png" /> output_shapefile'
            });
var group_group1 = new ol.layer.Group({
                                layers: [lyr_GoogleSatelliteHybrid_0,lyr_output_shapefile_1,],
                                fold: "open",
                                title: "group1"});

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_output_shapefile_1.setVisible(true);
var layersList = [group_group1];
lyr_output_shapefile_1.set('fieldAliases', {'PlotID': 'PlotID', 'ID': 'ID', 'Plot': 'Plot', 'Block': 'Block', 'Row': 'Row', 'Range': 'Range', 'Weight': 'Weight', 'Height': 'Height', 'Maturity': 'Maturity', 'Yield': 'Yield', 'TuberSet': 'TuberSet', });
lyr_output_shapefile_1.set('fieldImages', {'PlotID': 'TextEdit', 'ID': 'Range', 'Plot': 'Range', 'Block': 'Range', 'Row': 'Range', 'Range': 'Range', 'Weight': 'TextEdit', 'Height': 'TextEdit', 'Maturity': 'Range', 'Yield': 'TextEdit', 'TuberSet': 'TextEdit', });
lyr_output_shapefile_1.set('fieldLabels', {'PlotID': 'header label - visible with data', 'ID': 'inline label - always visible', 'Plot': 'header label - visible with data', 'Block': 'header label - always visible', 'Row': 'inline label - always visible', 'Range': 'inline label - always visible', 'Weight': 'inline label - visible with data', 'Height': 'inline label - visible with data', 'Maturity': 'inline label - visible with data', 'Yield': 'inline label - always visible', 'TuberSet': 'inline label - always visible', });
lyr_output_shapefile_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});