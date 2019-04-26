import browser from '../../core/browser';

export default function (key, value) {

    if (key === 'textAlign') {
        return {
            "left": "start",
            "right": "end",
            "middle": "middle"
        }[value] || value;
    }

    else if (key === 'textBaseline') {
        // todo
        return value;
    }

    return value;
};
