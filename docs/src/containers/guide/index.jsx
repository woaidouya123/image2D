import React from 'react';
import $$ from 'image2d';

export default class Guide extends React.Component {
    componentDidMount() {
        $$('.topmenu-item').attr('active', 'no');
        $$('#guide').attr('active', 'yes');
    }
    render() {
        return (
            <div>指南：设计中，敬请期待！</div>
        );
    }
};
