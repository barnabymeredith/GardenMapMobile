import { Popover, Tooltip } from 'react-native-popper';
import { Pressable, Text } from 'react-native';


const Marker = (props) => {
    function handlePress(evt) {
        console.log(`x coord = ${evt.nativeEvent.pageX}`);
    }

    return (
        <Popover
            trigger={
                <Pressable>
                    <Text>Press me</Text>
                </Pressable>
            }
        >
            <Popover.Backdrop />
            <Popover.Content>
                <Text>Hello World</Text>
            </Popover.Content>
        </Popover>
    );
};

export default Marker;