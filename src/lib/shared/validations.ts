/* eslint-disable */


export interface IGenericOption {
	[x: string]: any;
}


// declare var RegExp: {
// 	new (pattern: any, flags?: string): RegExp
// 	(pattern: any, flags?: string): RegExp
// }

// rules
export const required = (value: any) => {
	if (value == undefined) {
		return false;
	} else if (typeof value === 'object' && !Object.keys(value).length) {
		return false;
	} else if (typeof value == 'string' && value.trim() == '') {
		return false;
	} else if (value.constructor === Array && value.length <= 0) {
		return false;
	} else {
		return true;
	}
};

export const email = (email: string) => {
	if (typeof email == 'string' && email === '') {
		return true;
	}
	const emailRegex = new RegExp(
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@([a-z\d]{1,}[a-z+\d_-]*)(([.][a-z1-9]{2,}){1,})$/i
	);
	return emailRegex.test(email);
};

export const mobile = (mobile: string) => {
	if (typeof mobile == 'string' && mobile === '') {
		return true;
	}
	const mobileRegex = new RegExp(/^[6-9][\d]{9}$/);
	return mobileRegex.test(mobile);
};

export const integer = (integer: string) => {
	const IntegerRegex = new RegExp(/^\d+$/g);
	return IntegerRegex.test(integer);
};

export const stringToRegex = (regexString: string) => {
	return /^\/.*\/[gimuy]*$/.test(regexString) ? eval(regexString) : new RegExp(regexString);
};

export const regex = (regexString: string, value: string) => {
	return stringToRegex(regexString).test(value);
};

export const inverse_regex = (regexString: string, value: string) => {
	return !stringToRegex(regexString).test(value);
};

export const maxValue = (maxValue: number | string, value: number | string) => {
	if (isNaN(maxValue as number) || isNaN(value as number)) {
		return true;
	} else if (parseFloat(value as string) > parseFloat(maxValue as string)) {
		return false;
	} else {
		return true;
	}
};

export const minLength = (minLength: number, value: string) => {
	if (value) {
		return value.toString().trim().length >= minLength;
	} else {
		return false;
	}
};

export const maxLength = (maxLength: number, value: string) => {
	if (value) {
		return value.toString().length <= maxLength;
	}

	return true;
};

export const minValue = (minValue: number | string, value: string | number) => {
	if (isNaN(minValue as number) || isNaN(value as number)) {
		return true;
	} else if (parseFloat(value as string) < parseFloat(minValue as string)) {
		return false;
	} else {
		return true;
	}
};

export const panNumber = (value: string) => {
	const regex = /[A-Z]{5}[0-9]{4}[A-Z]{1}/i;
	return value == undefined || value === '' || regex.test(value);
};

export const alphabets = (value: string) => {
	const regex = /[A-Za-z]+$/gi;
	return value == undefined || value === '' || regex.test(value);
};

export const aadharNumber = (value: string) => {
	const regex = /^\d{12}$/;
	return value == undefined || value === '' || regex.test(value);
};

export const gstIN = (value: string) => {
	const regex = /^[\d]{2}[A-Z]{5}[\d]{4}[A-Z]{1}[A-Z\d]{1}[Zz]{1}[A-Z\d]{1}$/i;
	return value == undefined || value === '' || regex.test(value);
};

// export const pincode = (value) => {
// 	if (value == undefined || value === '') return true
// 	return !!Helpers.verifyPincode(value)
// }

export const alphaNumeric = (value: string) => {
	if (!value) {
		return true;
	}
	const regex = /^[a-z0-9]+$/i;
	if (!regex.test(value)) {
		return false;
	}
	return true;
};

export const alphaNumericWithSpace = (value: string) => {
	if (!value) {
		return true;
	}
	const regex = /^[a-z0-9\s]+$/i;
	if (!regex.test(value)) {
		return false;
	}
	return true;
};

export const multipleOf = (multiple: number, value: number) => {
	return value % multiple === 0;
};

export const validationRules: IGenericOption = {
	integer,
	email,
	mobile,
	required,
	regex,
	inverse_regex,
	maxValue,
	minValue,
	minLength,
	maxLength,
	pan: panNumber,
	aadhar: aadharNumber,
	gstin: gstIN,
	// pincode: pincode,
	alphaNumeric,
	alphaNumericWithSpace,
	multipleOf,
	alphabets,
};
// rules end

// Validation Messages
export const ValidationMessages: IGenericOption = {
	required: 'Please enter this value',
	email: 'Invalid email id',
	mobile: 'Invalid mobile no',
	integer: 'Please enter a valid intege value',
	regex: 'Please enter a valid value',
	inverse_regex: 'Please enter a valid value',
	maxValue: 'Value exceeds the maximum value allowed.',
	minValue: 'Value is less than the minimum value allowed.',
	maxLength: 'Character limit exceeded.',
	minLength: 'Not enough characters entered.',
	pan: 'Expected format AAAAA5555A',
	aadhar: 'Expected format 555555555555',
	gstin: 'Expected format 22AAAAA0000A1Z5',
	pincode: 'Please enter a valid 6 digit PIN code',
	alphaNumeric: 'Please enter only alphabets and numbers.',
	alphaNumericWithSpace: 'Invalid Characters.',
	multipleOf: 'Please enter the value which is multiple of a desired number.',
	alphabets: 'Alphabets Only',
};
//
export const callValidator = (validationName: any, validationObj: any, value: any) => {
	let isValid = true;
	switch (validationName) {
		case 'regex':
			isValid = validationRules[validationName](validationObj.expression, value);
			break;
		case 'inverse_regex':
			isValid = validationRules[validationName](validationObj.expression, value);
			break;
		case 'maxValue':
			isValid = validationRules[validationName](validationObj.maxValue, value);
			break;
		case 'minValue':
			isValid = validationRules[validationName](validationObj.minValue, value);
			break;
		case 'customHandler':
			isValid = validationObj.customHandler(value);
			break;
		case 'minLength':
			isValid = validationRules[validationName](validationObj.minLength, value);
			break;
		case 'maxLength':
			isValid = validationRules[validationName](validationObj.maxLength, value);
			break;
		case 'multipleOf':
			isValid = validationRules[validationName](validationObj.multiple, value);
			break;
		default:
			if (validationRules[validationName]) {
				isValid = validationRules[validationName](value);
			}
			break;
	}
	return isValid;
};

// helper validation functions
export const validationHandler = (value: string, validationArray: string | any[]) => {
	const validationObject = { isValid: true, message: '' };

	if (Object.prototype.toString.call(validationArray) !== '[object Array]') {
		throw new Error('validationArray should be an array (In Validations.ts)');
	} else {
		for (let i = 0; i < validationArray.length; i++) {
			if (typeof validationArray[i] == 'string') {
				validationObject.isValid = validationRules[validationArray[i]](value);
				validationObject.message = '';
				if (!validationObject.isValid) {
					validationObject.message = ValidationMessages[validationArray[i]];
				}
			} else if (typeof validationArray[i] == 'object') {
				if (validationArray[i].hasOwnProperty('name')) {
					validationObject.isValid = callValidator(
						validationArray[i].name,
						validationArray[i],
						value
					);
					validationObject.message = '';
					if (!validationObject.isValid) {
						// checking if custom message is passed if not then use standard msgs
						if (validationArray[i].hasOwnProperty('message')) {
							validationObject.message = validationArray[i].message;
						} else {
							validationObject.message = ValidationMessages[validationArray[i].name] as string;
						}
					}
				} else {
					throw new Error('Validation object must have name key');
				}
			} else {
				throw new Error('Valdiation rules can only be of type string or object');
			}

			// breaking if any one validation is false
			if (!validationObject.isValid) {
				break;
			}
		}
		return validationObject;
	}
};
// helpers end

/* eslint-enable */
