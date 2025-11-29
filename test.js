const users = [
	{ name: 'Alice', age: 30 },
	{ name: 'Bob', age: 25 },
	{ name: 'Charlie', age: 30 },
	{ name: 'David', age: 20 },
];

//1 задача
const getSortUserUnicalAge = (arr) => {
	const ages = new Set(arr.map((el) => el.age));
	return [...ages].sort((a, b) => a - b);
};

console.log(getSortUserUnicalAge(users));

//2-задача
const getDataWithTimer = async () => {
	const start = Date.now();
	await new Promise((resolve) => setTimeout(resolve, 500));
	const ms = Date.now() - start;
	return ms;
};

//3-задача count добавил что бы посомтреть что точно 3 лог вызывается
const debounce = (fn, delay) => {
	let timeout = null;
	let count = 0;
	return () => {
		count++;
		if (timeout) clearTimeout(timeout);
		timeout = setTimeout(() => fn(count), delay);
	};
};

const log = debounce((count) => console.log('called' + count), 1000);
log();
log();
log();

//4 задача
const input = {
	name: 'Alex',
	contacts: {
		email: 'alex@example.com',
		phone: '123456789',
	},
};
const getKeys = (obj, prefix = null) => {
	if (typeof obj !== 'object' && obj === null && Array.isArray(obj)) return;
	const arrKeys = [];

	for (let item in obj) {
		if (
			typeof obj[item] === 'object' &&
			obj[item] !== null &&
			!Array.isArray(obj[item])
		) {
			arrKeys.push(...getKeys(obj[item], `${item}`));
		} else {
			arrKeys.push(prefix ? `${prefix}.${item}` : item);
		}
	}

	return arrKeys;
};

console.log(getKeys(input));

//5
const getPeople = (people) => {
	return people.reduce((acc, p) => {
		if (!acc[p.age]) {
			acc[p.age] = [];
		}
		acc[p.age].push(p.name);
		return acc;
	}, {});
};

//1
const getPeople2 = (arr) => {
	const mapPeople = new Map();
	for (let i of arr) {
		mapPeople.set(i.id, i);
	}

	return [...mapPeople.values()];
};

//2
const measureAsyncTime = async (fn) => {
	const time = Date.now();
	const result = await fn();
	const respones = {
		result,
		time: Date.now() - time,
	};
	console.log(respones);
	return respones;
};

//3
// const throttle = (fn, delay) => {
// 	let timeout = null;
// 	return () => {
// 		if (timeout) return;
// 		if (!timeout)
// 			timeout = setTimeout(() => {
// 				fn();
// 				clearTimeout(timeout);
// 				timeout = null;
// 			}, delay);
// 	};
// };
// const throttledLog = throttle(() => console.log(Date.now()), 2000);

// const interval = setInterval(throttledLog, 300);

//4 - уф сложноватая оказалась, но написал сам
const flaterObj = (data, prefix) => {
	let obj = {};
	for (let item in data) {
		const path = prefix ? `${prefix}.${item}` : item;

		if (
			typeof data[item] === 'object' &&
			data[item] !== null &&
			!Array.isArray(data[item])
		) {
			obj = { ...obj, ...flaterObj(data[item], path) };
		} else {
			obj[path] = data[item];
		}
	}

	return obj;
};

//5
const loadData = async (id) => {
	return new Promise((resolve) =>
		setTimeout(
			() =>
				resolve({
					id,
					name: 'Name' + id,
				}),
			500
		)
	);
};

const loadAll = async (ids) => {
	const res = await Promise.all(ids.map(loadData));
	console.log(res);
	return res;
};
console.log(loadAll([1, 2, 3]));

//1
const getUserTotalPrice = (arr) => {
	return arr.reduce((acc, user) => {
		if (!acc[user.userId]) {
			acc[user.userId] = user.price;
		} else {
			acc[user.userId] += user.price;
		}
		return acc;
	}, {});
};

//2
const debounceAsync = async (fn, delay) => {
	let timeout = null;

	return async () => {
		if (timeout) clearTimeout(timeout);
		return await new Promise((resolve) => {
			timeout = setTimeout(async () => {
				const res = await fn();
				resolve(res);
			}, delay);
		});
	};
};

//3
const PromiseTiming = async (...args) => {
	const startTime = Date.now();
	const result = {};
	for (let [index, item] of args.entries()) {
		const res = await item();
		result[`result${index}`] = res;
	}

	return {
		...result,
		time: Date.now() - startTime,
	};
};

//4 сложная ))
const deepEqual = (objLeft, objRight) => {
	if (Object.keys(objLeft).length !== Object.keys(objRight).length) {
		return false;
	}

	for (const [key, value] of Object.entries(objLeft)) {
		if (
			typeof value === 'object' &&
			value !== null &&
			typeof objRight[key] === 'object' &&
			objRight[key] !== null
		) {
			if (deepEqual(value, objRight[key])) continue;
			return false;
		}
		if (value !== objRight[key]) {
			return false;
		}
	}

	return true;
};
