import { s3Api } from './s3-api';

describe('s3Api', () => {
  it('should work', () => {
    expect(s3Api()).toEqual('s3-api');
  });
});
