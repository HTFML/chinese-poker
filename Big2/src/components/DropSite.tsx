import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

interface Props {
    onDrop: () => void;
    onDragOverAllowDrop: () => void;
}

const styles = StyleSheet.create({
    droppable: {
        position: 'absolute',
        width: 200,
        height: 200,
        right: 100,
        top: 10,
        backgroundColor: '#9E9E9E',
    }
  })

const DropSite = (props: Props) => {   

    const { onDrop, onDragOverAllowDrop } = props;

    return (
        <View>
            <Text 
                style={styles.droppable}
                onDrop={(e) => onDrop(e)}
                onDragOver={(e) => onDragOverAllowDrop(e)}
            >   
                Drop here!
            </Text>
        </View>
    )
}

export default DropSite