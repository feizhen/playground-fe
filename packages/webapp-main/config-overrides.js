const { addLessLoader, override } = require("customize-cra");

module.exports = override(
  /**
    支持 less
   */
  addLessLoader()
)