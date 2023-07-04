import { Image, TouchableWithoutFeedback } from 'react-native';
import ReactNativeZoomableView from '@openspacelabs/react-native-zoomable-view/src/ReactNativeZoomableView';

const Map = (props) => {
    function handlePress(evt) {
        console.log(`x coord = ${evt.nativeEvent.pageX}`);
      }

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
              <Image source={props.imageURL} />
            </TouchableWithoutFeedback>
      </ReactNativeZoomableView>
    );
  };

export default Map;