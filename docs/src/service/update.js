import $$ from 'image2d';

export default function (id, subId) {

    // 格式化代码
    prettyPrint();

    // 更新顶部菜单标记
    if (arguments.length == 1) {
        $$('li', document.getElementById('topHeader')).attr('active', 'no');
        $$("#" + id).attr('active', 'yes');
    }

    // 更新二级菜单
    else if (arguments.length == 2) {

        if (id == 'api') {
            $$('li.apimenu-item', document.getElementById('api-nav')).attr('active', 'no');
            $$("#" + subId).attr('active', 'yes');
        }

    }

};
