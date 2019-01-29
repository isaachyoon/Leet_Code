var numUniqueEmails = function(emails) {
	let hashSet = new Set();
	emails.forEach((email) => {
		hashSet.add(parseEmail(email));
	})
	return hashSet.size;
}

function parseEmail(email) {
	let newEmail = '';
	let stopCopying = false;
	for (let i = 0; i < email.length; i++) {
		if (!stopCopying && email[i] !== '.' && email[i] !== '@' && email[i] !== '+') {
			newEmail += email[i];
		} else if (email[i] === '+') {
			stopCopying = true;
		} else if (email[i] === '@') {
			newEmail += email.slice(i);
			return newEmail;
		}
	}
	return newEmail;
}

let test1 = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"];
let res = numUniqueEmails(test1);
console.log(res);