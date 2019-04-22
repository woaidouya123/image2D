/**
 * 初始化配置文件
 * @param {Json} init 默认值
 * @param {Json} data
 * @return {Json}
 */
export let initConfig = function (init, data) {
    for (let key in data)
        try {
            init[key] = data[key];
        } catch (e) {
            throw new Error("Illegal property value！");
        }
    return init;
};

// 命名空间路径
export const NAMESPACE = {
    "svg": "http://www.w3.org/2000/svg",
    "xhtml": "http://www.w3.org/1999/xhtml",
    "xlink": "http://www.w3.org/1999/xlink",
    "xml": "http://www.w3.org/XML/1998/namespace",
    "xmlns": "http://www.w3.org/2000/xmlns/"
};

// 正则表达式
export const REGEXP = {

    // 空白字符:http://www.w3.org/TR/css3-selectors/#whitespace
    "whitespace": "[\\x20\\t\\r\\n\\f]",

    // 空格外的空白字符
    "blank": "[\\n\\f\\r]",

    // 标志符:http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
    "identifier": "(?:\\\\.|[\\w-]|[^\0-\\xa0])+"
};

// 记录需要使用xlink命名空间常见的xml属性
export const XLINK_ATTRIBUTE = ["href", "title", "show", "type", "role", "actuate"];
