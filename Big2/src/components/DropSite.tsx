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
        right: 50,
        top: -50,
        backgroundImage: `url(https://cdn.shopify.com/s/files/1/1200/3916/products/61f_pgf_5L._SL1500_grande.jpg?v=1560189702)`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
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