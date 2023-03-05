import { $authHost, $host } from ".";

export const personalCreate = async (name, email, phone, description) => {
	const { data } = await $host.post('personal', {name, email, phone, description});
	return data;
};
export const fetchPersonal = async () => {
	const { data } = await $authHost.get('/personal');
	return data;
};

export const deletePersonal = async id => {
	const {data} = await $authHost.delete(`/personal/${id}`);
	return data
};