import React, {Component} from 'react';
import Header from './Header';
import Button from './Button';
import CollectionRenameForm from './CollectionRenameForm';
import CollectionExportForm from './CollectionExportForm';

class CollectionControls extends Component {
    state= {
        name: 'new',
        isEditingName: false
    };

    getHeaderText = () => {
        const {name} = this.state;
        const {numberOfTweetsInCollection} = this.props;
        let text = numberOfTweetsInCollection;

        if (numberOfTweetsInCollection===1) {
            text = '${text} tweet in your';
        } else {
            text = '${text} tweets in your';
        }

        return (
            <span>
                {text} <strong>{name}</strong> collection
            </span>
        );
    };

    toggleEditCollectionName = () => {
        this.setState(prevState => ({
            isEditingName: !prevState.isEditingName
        }));
    };

    setCollectionName = (name) => {
        this.setState({
            name,
            isEditingName: false
        });
    };

    render () {
        const {name, isEditingName} = this.state;
        const {
            onRemoveAllTweetsFromCollection,
            htmlMarkup
        } = this.props;

        if(isEditingName) {
            return (
                <CollectionRenameForm
                    name={name} //여기서 setCollectionName 에 변수로 name 안넘겨줘도 되는건가?
                    onChangeCollectionName = {this.setCollectionName}
                    onCancleCollectionNameChange = {this.toggleEditCollectionName}
                />
            );
        }

        return (
            <div>
                <Header text={this.getHeaderText()}/>

                <Button
                    label="Rename Collection"
                    handleClick={this.toggleEditCollectionName}
                />

                <Button
                    label="Empty Collection"
                    handleClick={onRemoveAllTweetsFromCollection}
                />

                <CollectionExportForm htmlMarkup={htmlMarkup} />
            </div>
        );
    }
}

export default CollectionControls;

