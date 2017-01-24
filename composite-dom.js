"use strict";
function getSpaces(numSpaces) {
    var spaces = '';
    for (var i = 0; i < numSpaces; i++) {
        spaces += ' ';
    }
    return spaces;
}
var DomElement = (function () {
    function DomElement(tagName) {
        this.tagName = tagName;
        this.children = [];
    }
    DomElement.prototype.addChild = function (child) {
        this.children.push(child);
    };
    DomElement.prototype.print = function (spaces) {
        if (spaces === void 0) { spaces = 0; }
        var space = getSpaces(spaces);
        console.log(space + '<' + this.tagName + '>');
        this.children.forEach(function (child) {
            child.print(spaces + 4);
        });
        console.log(space + '</' + this.tagName + '>');
    };
    return DomElement;
}());
exports.DomElement = DomElement;
var TextNode = (function () {
    function TextNode(text) {
        this.text = text;
    }
    TextNode.prototype.print = function (spaces) {
        if (spaces === void 0) { spaces = 0; }
        var space = getSpaces(spaces);
        console.log(space + this.text);
    };
    return TextNode;
}());
exports.TextNode = TextNode;
/*
<html>
    <div>
        <p>
            Hi, I am a TextNode being printed!
        </p>
        <p>
            TextNode == leaf
        </p>
    </div>
</html>
 */
var html = new DomElement('html');
var div = new DomElement('div');
var p1 = new DomElement('p');
var p1Text = new TextNode('Hi, I am a TextNode being printed!');
var p2 = new DomElement('p');
var p2Text = new TextNode('TextNode == leaf');
html.addChild(div);
div.addChild(p1);
p1.addChild(p1Text);
div.addChild(p2);
p2.addChild(p2Text);
html.print();
