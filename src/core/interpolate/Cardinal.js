import hermite from './Hermite';
import { initConfig } from '../tool';

/**
 * Cardinal三次插值
 * ----------------------------
 * Hermite拟合的计算是，确定二个点和二个点的斜率
 * 用一个y=ax(3)+bx(2)+cx+d的三次多项式来求解
 * 而Cardinal是建立在此基础上
 * 给定需要拟合的二个点和第一个点的前一个点+最后一个点的后一个点
 * 第一个点的斜率由第一个点的前一个点和第二个点的斜率确定
 * 第二个点的斜率由第一个点和第二个点的后一个点的斜率确定
 * @param {Json} config 可选
 */
export default function (config) {



};
