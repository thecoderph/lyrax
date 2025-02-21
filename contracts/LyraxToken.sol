// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";

contract LyraxToken is ERC20, ERC20Permit {
    constructor(uint256 initialSupply) ERC20("Lyrax", "LYX") ERC20Permit("Lyrax") {
      _mint(msg.sender, initialSupply);
    }
}
