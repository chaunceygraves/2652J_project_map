function style_202_SW_mains_12_in_CP_N(feature) {
    switch (String(feature.properties['STATUS'])) {
        case 'Pre-Construction':
            return {
                pane: 'pane_202_SW_mains_12_in_CP_N',
                    opacity: 1,
                    color: 'rgba(93,201,99,1.0)',
                    dashArray: '',
                    lineCap: 'round',
                    lineJoin: 'round',
                    weight: 4.0,
                    fillOpacity: 0,
                    interactive: true,
            }
            break;

            // case 'Post-Construction, Pre-Payment':
            //   return {
            //     pane: 'pane_202_SW_mains_12_in_CP_N',
            //       opacity: 1,
            //       color: 'rgba(132,23,123,1.0)',
            //       dashArray: '',
            //       lineCap: 'square',
            //       lineJoin: 'bevel',
            //       weight: 4.0,
            //       fillOpacity: 0,
            //       interactive: true,
            //   }

            // case 'Post-Construction, Post-Payment':
            //   return {
            //     pane: 'pane_202_SW_mains_12_in_CP_N',
            //       opacity: 1,
            //       color: 'rgba(132,23,123,1.0)',
            //       dashArray: '',
            //       lineCap: 'square',
            //      lineJoin: 'bevel',
            //       weight: 4.0,
            //       fillOpacity: 0,
            //       interactive: true,
            //   }
            //   break;
    }
}


var layer_202_SW_mains_12_in_CP_N = {};
var json_202_SW_mains_0 = json_202_SW_mains_0;
var layer_202_SW_mains_12_in_CP_N_layer = {};


layer_202_SW_mains_12_in_CP_N.loaded = false;
layer_202_SW_mains_12_in_CP_N.type = json_202_SW_mains_0.type;
layer_202_SW_mains_12_in_CP_N.name = json_202_SW_mains_0.name;
layer_202_SW_mains_12_in_CP_N.crs = json_202_SW_mains_0.crs;
layer_202_SW_mains_12_in_CP_N.features = [];


function SW_mains_202_12_in_CP_N_toggle() {



    if (document.getElementById("202_SW_mains_12_in_CP_N").checked) {




        if (layer_202_SW_mains_12_in_CP_N.loaded == false) {



            map.createPane('pane_202_SW_mains_12_in_CP_N');
            map.getPane('pane_202_SW_mains_12_in_CP_N').style.zIndex = 700;
            map.getPane('pane_202_SW_mains_12_in_CP_N').style['mix-blend-mode'] = 'normal';




            for (var ii = 0; ii < json_202_SW_mains_0.features.length; ii++)

            {


                if (json_202_SW_mains_0['features'][ii].properties.PIPE_DIA == '12\"' && json_202_SW_mains_0['features'][ii].properties.SCOPE.includes('(N) VCP'))

                {

                    layer_202_SW_mains_12_in_CP_N.features.push(json_202_SW_mains_0.features[ii]);

                }

            }



            layer_202_SW_mains_12_in_CP_N_layer = new L.geoJson(layer_202_SW_mains_12_in_CP_N, {
                attribution: '',
                interactive: true,
                dataVar: 'layer_202_SW_mains_12_in_CP_N',
                layerName: 'layer_202_SW_mains_12_in_CP_N_layer',
                pane: 'pane_202_SW_mains_12_in_CP_N',
                onEachFeature: pop_202_SW_mains_0,
                style: style_202_SW_mains_12_in_CP_N,
            });
            bounds_group.addLayer(layer_202_SW_mains_12_in_CP_N_layer);

        }

        layer_202_SW_mains_12_in_CP_N.loaded = true;
        map.addLayer(layer_202_SW_mains_12_in_CP_N_layer);

    } else {

        map.removeLayer(layer_202_SW_mains_12_in_CP_N_layer);

    }

}
