// 命名空间路径
export const NAMESPACE = {
    "svg": "http://www.w3.org/2000/svg",
    "xhtml": "http://www.w3.org/1999/xhtml",
    "xlink": "http://www.w3.org/1999/xlink",
    "xml": "http://www.w3.org/XML/1998/namespace",
    "xmlns": "http://www.w3.org/2000/xmlns/"
};

// 空格、标志符
export const REGEXP = {

    // http://www.w3.org/TR/css3-selectors/#whitespace
    "whitespace": "[\\x20\\t\\r\\n\\f]",

    // http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
    "identifier": "(?:\\\\.|[\\w-]|[^\0-\\xa0])+"
};
