import { Component, OnInit, Input, ElementRef, transition } from '@angular/core';

@Component({
	selector: '[gp-skew]',
	templateUrl: './skew.component.html',
	styleUrls: ['./skew.component.less'],
	host: {
		'[style.transform]': '"skew(" + skew + "deg)"',
		'[style.margin-left]': 'skewWidth + "px"',
		'[style.margin-right]': 'skewWidth + "px"',
	}
})
export class SkewComponent implements OnInit {

	skew: number;
	@Input('gp-skew') set gpSkew(skew) {
		skew = parseInt(skew);
		if (!isNaN(skew) && skew !== 0) {
			this.skew = skew;
		} else {
			this.skew = -30;
		}
	}
	skewWidth: number;
	counterSkew: {} = {
		transform: '',
		'margin-left': '',
		'margin-right': ''
	}

	constructor(private element: ElementRef) { }

	ngOnInit() {
		this.skewWidth = Math.tan(Math.abs(this.skew) * Math.PI / 180) * this.element.nativeElement['offsetHeight'] / 2;
		this.counterSkew['transform'] = 'skew(' + (this.skew * -1) + 'deg)';
		this.counterSkew['margin-left'] = this.skewWidth + 'px';
		this.counterSkew['margin-right'] = this.skewWidth + 'px';
	}

}
