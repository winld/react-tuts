//如果没有使用customize-cra，在这里可以对congfig进行配置
// module.exports = config => {
//   return config;
// };
const { override, addDecoratorsLegacy } = require("customize-cra");
module.exports = override(addDecoratorsLegacy());

// export default withCoyperight(Another);
//让cra支持@装饰器写法，不管我们要配置什么，我们最好的方法是使用react-app-rewired这个包来对cra创建的项目进行轻微的配置调整
// 2、安装好之后，在package.json中把script里面的react-script替换成react-app-rewired
// 3、在根目录下创建一个config-overrides.js
// module.exports = config => {
//   return config;
// };
// 4、当然如果想要配置更方便，可以再安装customize-cra,然后把config-overrides.js改成这样
// const { override, addDecoratorsLegacy } = require("customize-cra");
// module.exports = override(addDecoratorsLegacy());
