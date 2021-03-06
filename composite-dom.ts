interface IDomElement {
  	print(spaces:number);
}

function getSpaces(numSpaces:number) {
	let spaces = '';
	for (let i = 0; i < numSpaces; i++) {
			spaces += ' ';
	}
	return spaces;
}

export class DomElement implements IDomElement {
	private spaces:number;
	private tagName:string;
	private children:IDomElement[];	

	constructor(tagName:string) {
		this.tagName = tagName;
		this.children = [];
	} 

	addChild(child:IDomElement) {
		this.children.push(child);
	}

	print(spaces:number = 0) {
		let space:string = getSpaces(spaces);
		console.log(space + '<' + this.tagName + '>');
		this.children.forEach(child => {						
			child.print(spaces + 4);			
		});
		console.log(space + '</' + this.tagName + '>');
	}
}

export class TextNode implements IDomElement {
	private text;

	constructor(text:string) {
		this.text = text;
	}

	print(spaces:number = 0) {
		let space:string = getSpaces(spaces);
		console.log(space + this.text);
	}
}
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

let html = new DomElement('html');
let div = new DomElement('div');
let p1 = new DomElement('p');
let p1Text = new TextNode('Hi, I am a TextNode being printed!');
let p2 = new DomElement('p');
let p2Text = new TextNode('TextNode == leaf');

html.addChild(div);
	div.addChild(p1);
		p1.addChild(p1Text);
	div.addChild(p2);
		p2.addChild(p2Text);

html.print()
