// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BookRegistry {
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can perform this action");
        _;
    }

    struct Book {
        string title;
        string author;
        address currentOwner;
    }

    mapping(uint256 => Book) public books;
    uint256 public bookCount;

    event BookAdded(uint256 indexed bookId, string title, string author, address indexed owner);
    event OwnershipTransferred(uint256 indexed bookId, address indexed previousOwner, address indexed newOwner);

    function addBook(uint256 registration, string memory _title, string memory _author) external onlyOwner {

        books[registration] = Book(_title, _author, owner);
        bookCount++;
        emit BookAdded(registration, _title, _author, owner);
    }

    function transferOwnership(uint256 registrationId, address _newOwner) external {
        require(_newOwner != address(0), "Invalid address");
        require(_newOwner != books[registrationId].currentOwner, "The new owner is the same as the current owner");
        require(msg.sender == books[registrationId].currentOwner, "Only the current owner can transfer ownership");

        address previousOwner = books[registrationId].currentOwner;
        books[registrationId].currentOwner = _newOwner;

        emit OwnershipTransferred(registrationId, previousOwner, _newOwner);
    }

    function getBookDetails(uint256 registrationId) external view returns (string memory, string memory, address) {
    
        Book memory book = books[registrationId];
        return (book.title, book.author, book.currentOwner);
    }
}