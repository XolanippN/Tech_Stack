import React, { Component } from 'react';
import { ListView } from 'react-native'; // Listview helps to use the same componets, each time takes the subset of all components
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
    componentWillMount(){
        // boilerplate set up code to set data and show a listview
        const ds = new ListView.DataSource({
            rowHasChanged: (r1,r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(this.props.libraries);
    }

    renderRow(library){
        return <ListItem library={library} />;
    }

    render(){
           console.log(this.dataSource)
        return (
            <ListView
                 dataSource={this.dataSource}
                 renderRow={this.renderRow} // we need to the list view exactly of how to render each row
            />
        );
    };
};


// takes aplication state and maps them to props 
const mapStateToProps = state => {
return {libraries : state.libraries }; //libraries is a prop
};

export default connect(mapStateToProps)(LibraryList);
