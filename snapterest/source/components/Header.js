import React, {Component} from 'react';

export const DEFAULT__HEADER_TEXT = 'Default header';

const headerStyle = {
    fontSize: '16px',
    fontWeight: '300',
    display: 'inline-block',
    margin: '20px 10px'
};

class Header extends Component {
    render () {
        const {text} = this.props;
        return (
            <h2 style={headerStyle}>{text}</h2>
        );
    }
}

Header.defaultProps = {
    text: DEFAULT__HEADER_TEXT
};

export default Header;
