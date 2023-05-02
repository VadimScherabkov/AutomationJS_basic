const {expect} = require('chai');
const {sendRequest} = require('../helpers/api.helper');
const postTestData = require('../config/postTestData.json');
const invaidPostTestData = require('../config/invalidPostTestData.json');
const putTestData = require('../config/putTestData.json');
const emptyTestData = require('../config/emptyTestData.json');

describe('GET method', () => {
    it('Validate that the first post has userId = 1', async () => {
        const response = await sendRequest('posts/1');

        expect(response.data.userId).to.equal(1);
        expect(response.status).to.equal(200);
    });

    it('Validate title of users post', async () => {
        const response = await sendRequest('posts/1');

        expect(response.data.title)
        .to.equal('sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
    });

    it('Invalid url returns 404 error', async () => {
        const response = await sendRequest('posts/fgnfgn');
        expect(response.status).to.equal(404);
        expect(response.statusText).to.equal('Not Found');

    });

    it('Find post with by passing id into url', async () => {
        const response = await sendRequest('posts?id=30');
        const object = response.data.find((user) => user.id === 30);

        expect(object.id).to.equal(30);
    });

    it('Find all posts', async () => {
        const response = await sendRequest('posts');

        expect(response.status).to.equal(200);
    });
});

describe('POST method', () => {
    it('Valid data is created', async () => {
        const response = await sendRequest('posts', postTestData, 'post');

        expect(response.data.title).to.equal('JS Automation Course');
        expect(response.data.body).to.equal('This is some body text');
        expect(response.data.userId).to.equal(1);
    });

    it('Validate that successful creating a post returns 201 status', async () => {
        const response = await sendRequest('posts', postTestData, 'post');

        expect(response.status).to.equal(201);
    });

    it('Validate that successful creating a post does not return 200 status', async () => {
        const response = await sendRequest('posts', postTestData, 'post');

        expect(response.status).not.to.equal(200);
    });

    it('Invalid url returns 404 error', async () => {
        const response = await sendRequest('postssss', postTestData, 'post');

        expect(response.status).to.equal(404);
        expect(response.statusText).to.equal('Not Found');
    });

    it('All data types are accepted by server ', async () => {
        const response = await sendRequest('posts', invaidPostTestData, 'post');

        expect(response.status).to.equal(201);
        expect(response.data.title).to.equal(1);
        expect(response.data.body).to.equal(true);
        expect(response.data.userId).to.equal('abc');
    });

    it('Validate empty data is created with id 101', async () => {
        const response = await sendRequest('posts', {}, 'post');

        expect(response.status).to.equal(201);
        expect(response.data.id).to.equal(101);
    });

    it('Validate empty data is created with id 101', async () => {
        const response = await sendRequest('posts', emptyTestData, 'post');

        expect(response.status).to.equal(201);
        expect(response.data.id).to.equal(101);
        expect(response.data.title).to.equal('');
        expect(response.data.body).to.equal(' ');
        expect(response.data.userId).to.equal('');
    });
});

describe('PUT method', () => {
    it('All data is updated with new data', async () => {
        const response = await sendRequest('posts/1', putTestData, 'put');

        expect(response.status).to.equal(200);
        expect(response.data.userId).to.equal(666);
        expect(response.data.title).to.equal(undefined);
        expect(response.data.body).to.equal(undefined);
        expect(response.data.id).to.equal(1);
    });

    it('Invalid url returns 404 error', async () => {
        const response = await sendRequest('postssss', putTestData, 'put');

        expect(response.status).to.equal(404);
        expect(response.statusText).to.equal('Not Found');
    });

    it('Validate empty data is created with id 101', async () => {
        const response = await sendRequest('posts/1', {}, 'put');

        expect(response.status).to.equal(200);
        expect(response.data.id).to.equal(1);
        expect(response.data.userId).to.equal(undefined);
        expect(response.data.title).to.equal(undefined);
        expect(response.data.body).to.equal(undefined);
    });

    it('Validate empty data is created with id 101', async () => {
        const response = await sendRequest('posts/1', emptyTestData, 'put');

        expect(response.status).to.equal(200);
        expect(response.data.id).to.equal(1);
        expect(response.data.title).to.equal('');
        expect(response.data.body).to.equal(' ');
        expect(response.data.userId).to.equal('');
    });
});

describe('DELETE method', () => {
    it('Validate that post is deleted', async () => {
        const response = await sendRequest('posts/1', 'delete');

        expect(response.status).to.equal(200);
    });

    it('Validate that all posts are deleted', async () => {
        const response = await sendRequest('posts', 'delete');

        expect(response.status).to.equal(200);
    });

    it('Delete filtered post', async () => {
        const response = await sendRequest('posts?id=30', 'delete');

        expect(response.status).to.equal(200);
    });

    it('Invalid url returns 404 error', async () => {
        const response = await sendRequest('postssss', 'delete');

        expect(response.status).to.equal(404);
        expect(response.statusText).to.equal('Not Found');
    });

    it('Delete non existing post', async () => {
        const response = await sendRequest('posts/666', 'delete');

        expect(response.status).to.equal(404);
        expect(response.statusText).to.equal('Not Found');
    });
});
