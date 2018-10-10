"use strict";
import { expect } from 'chai';
import cookier from '../src/index';

describe('testing cookie() function to safely set cookie values', () =>  {
	beforeEach(() => {
		const document = {
			cookie: ''
		}

		global.document = document;
	});

	it('should be able to set a true value to a cookie', () => {
		cookier('testCookie').set(true);
		expect(document.cookie).to.equal('testCookie=true; path=/');
	});

	it('should be able to get the set cookie', () => {
		document.cookie = 'testCookie=true; path=/';
		const result = cookier('testCookie').get();
		expect(result).to.equal('true');
	});

	it('should be able to get and set a cookie', () => {
		cookier('testCookie').set(true);
		const result = cookier('testCookie').get();
		expect(result).to.equal('true');
	});

	it('should be able to remove a cookie', () => {
		cookier('testCookie').set(true);
		const resultOne = cookier('testCookie').get();
		expect(resultOne).to.equal('true');
		cookier('testCookie').remove();
		const resultTwo = cookier('testCookie').get();
		expect(resultTwo.length).to.equal(0);
	});

	it('should be able to set a stringified object to a cookie', () => {
		cookier('testCookie').set(JSON.stringify({ key: 'value' }));
		const result = cookier('testCookie').get();
		expect(JSON.parse(result)).to.deep.equal({ key: 'value' });
	});
});
