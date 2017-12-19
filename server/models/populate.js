import mongoose from 'mongoose';
import signUpSchema from './signUpSchema';

const signUp = [
	{
		text: 123,
		email: 123,
		password: 123
	}
];

mongoose.createConnection('mongodb://iDatLe:souperprivate1@ds049854.mlab.com:49854/votingapp', {useMongoClient: true});

signUp.map(data => {
	const signUp = new signUpSchema(data);
	signUp.save();
})

