import $$ from 'image2d';

export default function (id) {

    // 更新顶部菜单标记
    $$('li', document.getElementById('topHeader')).attr('active', 'no');
    $$("#" + id).attr('active', 'yes');

    // 格式化代码
    prettyPrint();

};
