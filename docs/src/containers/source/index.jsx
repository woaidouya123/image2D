import React from 'react';
import $$ from 'image2d';

export default class Source extends React.Component {
    componentDidMount() {
        $$('.topmenu-item').attr('active', 'no');
        $$('#source').attr('active', 'yes');
    }
    render() {
        return (
            <div style={{
                "backgroundImage":"url('src/assets/error.png')",
                "paddingTop":"3rem",
                "backgroundSize":"auto 3rem",
                "lineHeight":"5em",
                "backgroundRepeat":"no-repeat",
                "backgroundPosition":"center top",
                "textAlign":"center",
                "color":"#be3a6e",
                "fontSize":".3rem"
            }}>
                温馨提示：资源正在整理中，敬请期待！
            </div>
        );
    }
};
