'use strict';
const SKDateTime = Object.create(smalltalk.SKPrimitiveModule);
smalltalk.primitiveManager.registerModule(SKDateTime, "SKDateTime");

SKDateTime.primGetUtcOffsetSeconds = function (receiver, args) {
	return new Date().getTimezoneOffset() * 60;
}

SKDateTime.primGetYear = function (receiver, args) {
	return receiver.getFullYear();
}

SKDateTime.primSetYear = function (receiver, args) {
	const year = args[0].valueOf();
	if (typeof year != 'number' || !year.isInteger()) {
		return this.primFailValue;
	}
	receiver.setFullYear(year);
}

SKDateTime.primGetMonth = function (receiver, args) {
	return receiver.getMonth() + 1;
}

SKDateTime.primSetMonth = function (receiver, args) {
	const month = args[0].valueOf();
	if (typeof month != 'number' || !month.isInteger() || !((month >= 1) && (month <= 12))) {
		return this.primFailValue;
	}
	receiver.setMonth(month - 1);
}

SKDateTime.primGetDayOfWeek = function (receiver, args) {
	return receiver.getDay() + 1;
}

SKDateTime.primGetDayOfMonth = function (receiver, args) {
	return receiver.getDate();
}

SKDateTime.primSetDayOfMonth = function (receiver, args) {
	const day = args[0].valueOf();
	if (typeof day != 'number' || !day.isInteger() || !((day >= 1) && (day <= 31)) ) {
		return this.primFailValue;
	}
	receiver.setDate(day);
}

SKDateTime.primAsString = function (receiver, args) {
	return receiver.toString();
}

SKDateTime.primGetTime = function (receiver, args) {
	return receiver.getTime();
}

SKDateTime.primSetTime = function (receiver, args) {
	const time = args[0].valueOf();
	if(typeof time != 'number' || !time.isInteger) {
		return this.primFailValue;
	}
	receiver.setTime(time);
}

SKDateTime.primAsDateString = function (receiver, args) {
	return receiver.toDateString();
}

SKDateTime.primAsTimeString = function (receiver, args) {
	return receiver.toTimeString();
}

SKDateTime.primAsLocaleString = function (receiver, args) {
	return receiver.toLocaleString();
}

SKDateTime.primSetHours = function (receiver, args) {
	const hour = args[0].valueOf();
	if (typeof hour != 'number' || !hour.isInteger() || !((hour >= 0) && (hour <= 23)) ) {
		return this.primFailValue;
	}
	receiver.setHours(hour);
}

SKDateTime.primSetMinutes = function (receiver, args) {
	const minutes = args[0].valueOf();
	if (typeof minutes != 'number' || !minutes.isInteger() || !((minutes >= 0) && (minutes <= 59)) ) {
		return this.primFailValue;
	}
	receiver.setMinutes(minutes);
}

SKDateTime.primSetSeconds = function (receiver, args) {
	const seconds = args[0].valueOf();
	if (typeof seconds != 'number' || !seconds.isInteger() || !((seconds >= 0) && (seconds <= 59)) ) {
		return this.primFailValue;
	}
	receiver.setSeconds(seconds);
}

SKDateTime.primSetMilliseconds = function (receiver, args) {
	const milliseconds = args[0].valueOf();
	if (typeof milliseconds != 'number' || !milliseconds.isInteger() || !((milliseconds >= 0) && (milliseconds <= 999)) ) {
		return this.primFailValue;
	}
	receiver.setMilliseconds(milliseconds);
}

SKDateTime.primGetHours = function (receiver, args) {
	return receiver.getHours();
}

SKDateTime.primGetSeconds = function (receiver, args) {
	return receiver.getSeconds();
}

SKDateTime.primGetMilliseconds = function (receiver, args) {
	return receiver.getMilliseconds();
}

SKDateTime.primEquality = function (receiver, args) {
	const date = args[0];
	if (date.constructor !== Date) {
		return this.primFailValue;
	}
	return receiver.getTime() == date.getTime();
}

SKDateTime.primLessThan = function (receiver, args) {
	const date = args[0];
	if (date == null || date.constructor !== Date) {
		return this.primFailValue;
	}
	return receiver < date;
}

SKDateTime.primGreaterThan = function (receiver, args) {
	const date = args[0];
	if (date == null || date.constructor !== Date) {
		return this.primFailValue;
	}
	return receiver > date;
}

SKDateTime.primLessThanEqualTo = function (receiver, args) {
	const date = args[0];
	if (date == null || date.constructor !== Date) {
		return this.primFailValue;
	}
	return receiver <= date;
}

SKDateTime.primGreaterThanEqualTo = function (receiver, args) {
	const date = args[0];
	if (date == null || date.constructor !== Date) {
		return this.primFailValue;
	}
	return receiver >= date;
}

SKDateTime.primIsValid = function (receiver, args) {
	return isFinite(receiver);
}

SKDateTime.primNew = function (receiver, args) {
	const argument = args[0].valueOf();
	const accepted = ['string', 'number'];
	if (!accepted.includes(typeof argument)) {
		return this.primFailValue;
	}
	return new Date(argument);
}
