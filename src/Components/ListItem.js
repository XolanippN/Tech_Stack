
import React, { Component } from 'react';
import { Text ,View}  from 'react-native';
import { CardSection } from './Common';


class ListItem extends Component { 

    render() {

        const { titleStyle } = styles;

        return(
            <View>
                <CardSection>
                    <Text style={titleStyle} >{this.props.library.title }</Text>
                </CardSection>
                <CardSection>
                    <Text style={titleStyle} >{this.props.library.description }</Text>
                </CardSection>
            </View>
        );
    };
};

const styles = {
    titleStyle: {
        fontSize: 18,
       paddingLeft: 15      
    }
}

export default ListItem;