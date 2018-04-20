import client from './https';

const config = {
    headers: {
        'Content-Type': 'aplication/json',
    },
};

export const getUserByUserName = query => client.get(`/${query}`,config);
export const getUserRepos = query => client.get(`/${query}/repos`,config);
