import { Image, TouchableWithoutFeedback } from 'react-native';
import ReactNativeZoomableView from '@openspacelabs/react-native-zoomable-view/src/ReactNativeZoomableView';
import Marker from './Marker';

const Map = (props) => {
    function handlePress(evt) {
        console.log(`x coord = ${evt.nativeEvent.pageX}`);
      }

      function getMarkers() {
        axios
          .get('http://127.0.0.1:8000/api/markers/')
          .then(response => {
            this.markers = response.data
            console.log(this.markers)
          })
      },
  
      addMarker(event) {
        this.markers.push({ top: event.pageY, left: event.pageX })
      },
  
      postMarker(marker) {
        axios
          .post('http://127.0.0.1:8000/api/markers/',
            {
              name: this.name,
              description: this.description,
              top: marker.top,
              left: marker.left
            })
            .then(this.markers.push(marker))
      },
  
      deleteMarker(marker) {
        axios
          .delete('http://127.0.0.1:8000/api/markers/' + marker.id)
          .then(this.markers.pop(marker))
      },

    return (
        <ReactNativeZoomableView
        maxZoom={1.5}
        minZoom={0.1}
        zoomStep={0.5}
        initialZoom={1}
        panBoundaryPadding={2000}
        contentHeight={2000}
        contentWidth={2000}>
            <TouchableWithoutFeedback onPress={(evt) => handlePress(evt)} >
              
              <Marker />
              {/*<Image source={props.imageURL} />*/}
              
            </TouchableWithoutFeedback>
      </ReactNativeZoomableView>
    );
  };

export default Map;