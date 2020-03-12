module.exports = {

    // 命令参数配置
    "config": {
        help: {
            short: 'h',
            info: '[0]Display this help text.',
            demo: 'image2d-cli --help|-h <term>'
        },
        version: {
            short: 'v',
            info: '[1]Display the version of image2d-cli.',
            demo: 'image2d-cli --version|-v'
        },
        init: {
            short: 'i',
            info: '[2]Initializing the component project.',
            demo: 'image2d-cli --init|-i'
        },
        force: {
            short: 'f',
            info: '[x]Enforce the current operation.',
            demo: 'image2d-cli --force|-f'
        }
    },

    // 帮助信息
    "help": `
    Usage: image2d-cli <command>
    
    where <command> is one of:
    --help, -h, --version, -v, --init, -i, --force, -f
    
    image2d-cli --help|-h <term>       search for help on <term>
    image2d-cli --help|-h              involved overview
      `

};
