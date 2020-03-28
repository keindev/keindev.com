import { NowRequest, NowResponse } from '@now/node';
import { Provider } from 'gh-gql';

const { query } = new Provider();

export default ({ query: { name, size } }: NowRequest, nowRes: NowResponse): void => {
    // + Get repositories list
    // for Each repositories
    const repositories = ['gh-gql', 'tasktree-cli'];

    // query.repository.

    // get object id
    // get file
    // add to list
    /*
    Provider.fetch(`https://api.npms.io/v2/search?q=maintainer:${name}&size=${size}&from=0`)
        .then(res => res.json())
        .then(data => {
            nowRes.status(200).json(data);
        });
    */
};
