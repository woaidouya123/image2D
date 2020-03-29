import $$ from 'image2d';

export default function (text_info) {

    let imageUrl =
        // 获取画笔
        $$("<canvas>").attr({
            width: 200,
            height: 150
        }).painter()

            // 配置画笔
            .config({
                "strokeStyle": "rgba(210,210,230,0.7)",
                "font-size": 20,
                "textAlign": "center",
                "textBaseline": "middle"
            })

            // 绘制文字
            .strokeText(text_info, 100, 70, -Math.PI / 7)

            // 图片导出为地址
            .toDataURL();

    // 创建容器
    $$("<div>")

        // 设置容器参数
        .css({
            width: '100vw',
            height: '100vh',
            position: "fixed",
            top: 0,
            left: 0,
            "pointer-events": "none",
            "z-index": 3,
            "background-image": "url(" + imageUrl + ")"
        })

        // 挂载水印到页面
        .appendTo('body');
};
