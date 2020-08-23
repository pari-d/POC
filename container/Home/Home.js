import React, { Component } from 'react';
import { SafeAreaView, FlatList, Text, TextInput, View } from 'react-native';

import style from './style';

import ListRow from '../../component/ListRow';

let _this;
export default class Home extends Component {

    constructor(props) {
        super(props);
        _this = this;
        props.fetchTravellerList();
        this.state = {
            listData: []
        }
    }
    UNSAFE_componentWillReceiveProps(newProps) {
        const { listData } = this.state;
        if (listData.length < newProps.travellerList.length) {
            this.setState({
                listData: newProps.travellerList
            })
        }
    }

    filterData(value) {
        const { travellerList } = this.props;
        let result;
        if (value.length > 0) {
            result = travellerList.filter((item) => item.first_name.toLowerCase().includes(value.toLowerCase()) || item.last_name.toLowerCase().includes(value.toLowerCase()));
        }
        else if (value == "") {
            result = travellerList;
        }
        this.setState({
            listData: result
        })
    }

    navigateToDetails(selectedItem) {
        const { selectedTraveller } = this.props;
        selectedTraveller(selectedItem);
        _this.props.navigation.push('Details');
    }

    renderError() {
        const { errorMessage } = this.props;
        return (
            <View>
                <Text>{errorMessage}</Text>
            </View>
        )
    }

    renderSearchBar() {
        return (
            <TextInput
                style={style.searchBar}
                onChangeText={(value) => this.filterData(value)}
                placeholder={'Search'}
            />
        )
    }

    renderText() {
        return (
            <Text>
                Fetching travellers list
            </Text>
        )
    }

    renderListItem({ item }) {
        return (
            <ListRow handleClick={(selectedItem) => _this.navigateToDetails(selectedItem)} displayItem={item} />
        )
    }

    renderList(data) {
        return (
            <FlatList
                style={{ flex: 1 }}
                data={data}
                extraData={data}
                renderItem={this.renderListItem}
                keyExtractor={(item) => item.first_name + item.id}
            />
        )
    }

    renderContent() {
        const { listData } = this.state;
        if (listData && listData.length > 0) {
            return this.renderList(listData);
        }
        else {
            return (
                this.renderText()
            )
        }
    }
    render() {
        const { isError } = this.props;
        return (
            <SafeAreaView style={style.container}>
                {!isError ? this.renderSearchBar() : null}
                {isError ? this.renderError() : this.renderContent()}
            </SafeAreaView>
        )
    }
}
