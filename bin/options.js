module.exports = {

    // 命令参数配置
    "config": {
        version: {
            short: 'v',
            info: '[0]Display the version of image2d-cli.',
            demo: 'image2d-cli --version|-v'
        },
        init: {
            short: 'i',
            info: '[1]Initializing the configuration file.',
            demo: 'image2d-cli --init|-i'
        },
        help: {
            short: 'h',
            info: '[3]Display this help text.',
            demo: 'image2d-cli --help|-h <term>'
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
    --version, -v, --init, -i, --help, -h, --force, -f
    
    image2d-cli --help|-h <term>       search for help on <term>
    image2d-cli --help|-h              involved overview
      `

};
