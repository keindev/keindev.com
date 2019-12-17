import { NowRequest, NowResponse } from '@now/node';
import npmUserPackages from 'npm-user-packages';

export default (req: NowRequest, res: NowResponse): void => {
    npmUserPackages(req.query.name as string).then(data => {
        res.status(200).json(data);
    });
};
