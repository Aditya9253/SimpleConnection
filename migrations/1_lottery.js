const Migrations = artifacts.require("lottery");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};