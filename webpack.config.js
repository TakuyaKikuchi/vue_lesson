import devConfig from './tasks/webpack/development';
import prdConfig from './tasks/webpack/production';


const isProduction = process.env.NODE_ENV === 'production';
const webpackConfig = isProduction ? prdConfig : devConfig;

export default webpackConfig;
