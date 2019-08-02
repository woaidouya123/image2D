import React from 'react';
import $$ from 'image2d';

export default class Source extends React.Component {
    componentDidMount() {
        $$('.topmenu-item').attr('active', 'no');
        $$('#source').attr('active', 'yes');
    }
    render() {
        return (
            <div>资源：设计中，敬请期待！</div>
        );
    }
};
