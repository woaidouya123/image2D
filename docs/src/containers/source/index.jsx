import React from 'react';
import $$ from 'image2d';

export default class Source extends React.Component {
    componentDidMount() {
        $$('.topmenu-item').attr('active', 'no');
        $$('#source').attr('active', 'yes');
    }
    render() {

        let ul = {
            li: {
                backgroundColor:"#eeeeee",
                margin:".2rem .3rem",
                position:'relative',
                width:'3rem',
                display:"inline-block",
                h2: {
                    fontFamily:"fantasy",
                    lineHeight:'.4rem',
                    padding:"0 .1rem",
                    color:"red",
                    div: {
                        display: "inline-block",
                        fontSize: ".12rem",
                        float:"right",
                        a: {
                            padding: "0 .05rem",
                            color: "gray"
                        }
                    }
                }
            }
        };

        return (
            <ul style={ul}>
                <li style={ul.li}>
                    <h2 style={ul.li.h2}>
                    npm-downloads
                    <div style={ul.li.h2.div}>
                            <a style={ul.li.h2.div.a} href='https://yelloxing.github.io/npm-downloads/' target="_blank">访问</a>
                            <a style={ul.li.h2.div.a} href='https://github.com/yelloxing/npm-downloads' target="_blank">代码</a>
                        </div>
                    </h2>
                    <p class='npmDownloads' style={{
                        height:'1.9rem',
                        width:'100%',
                        display:"inline-block",
                        backgroundPosition:"center",
                        backgroundSize:"100% auto",
                        backgroundRepeat:'no-repeat'
                    }} ></p>                    
                </li>
            </ul>
        );
    }
};
