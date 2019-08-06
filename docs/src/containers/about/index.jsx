import React from 'react';
import $$ from 'image2d';

export default class About extends React.Component {
    componentDidMount() {
        $$('.topmenu-item').attr('active', 'no');
        $$('#about').attr('active', 'yes');
    }
    render() {
        return (
            <div>编辑中，敬请期待！</div>
        );
    }
};
